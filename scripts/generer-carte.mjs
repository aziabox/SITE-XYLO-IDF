/**
 * Génère src/data/carte.ts à partir des données géographiques officielles.
 *
 * Ce script n'est pas exécuté à la compilation du site : il produit un fichier
 * TypeScript qui est versionné. Le site n'a donc aucune dépendance
 * cartographique en production.
 *
 * Pour le relancer :
 *   npm install --no-save mapshaper
 *   node scripts/generer-carte.mjs
 *
 * Sources
 * -------
 * Contours des départements et des communes :
 *   IGN — Admin Express COG, via github.com/gregoiredavid/france-geojson
 *   Licence ouverte (Etalab).
 * Cours d'eau :
 *   Natural Earth 10m (rivers + lake centerlines), domaine public.
 *
 * Projection
 * ----------
 * Lambert-93 (EPSG:2154), la projection légale française, puis normalisation
 * dans la fenêtre SVG. Une projection équirectangulaire déformerait sensiblement
 * la région à cette latitude.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const CACHE = 'node_modules/.cache/carte';
const SORTIE = 'src/data/carte.ts';
const VIEWBOX = { w: 1000, h: 880 };
/** Pourcentage de conservation des points (méthode Visvalingam pondérée). */
const SIMPLIFICATION = 12;
/**
 * Bande de territoire conservée autour de l'Île-de-France, en mètres.
 * Sans elle la région flotte sur un fond vide : une carte montre toujours
 * ce qu'il y a autour, c'est ce qui permet de se situer.
 */
const CONTEXTE = 22000;

const SOURCES = {
  departements:
    'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions/ile-de-france/departements-ile-de-france.geojson',
  communes:
    'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions/ile-de-france/communes-ile-de-france.geojson',
  france:
    'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements-version-simplifiee.geojson',
  rivieres:
    'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_rivers_lake_centerlines.geojson',
  'rivieres-eu':
    'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_rivers_europe.geojson',
  urbain:
    'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_urban_areas.geojson',
};

/* --------------------------------------------------------------------------
   Récupération, avec cache local pour ne pas retélécharger à chaque essai
   -------------------------------------------------------------------------- */
const recuperer = async (nom, url) => {
  await mkdir(CACHE, { recursive: true });
  const fichier = join(CACHE, `${nom}.geojson`);
  if (!existsSync(fichier)) {
    process.stdout.write(`  téléchargement de ${nom}… `);
    const r = await fetch(url);
    if (!r.ok) throw new Error(`${nom} : HTTP ${r.status}`);
    await writeFile(fichier, await r.text());
    console.log('ok');
  }
  return JSON.parse(await readFile(fichier, 'utf-8'));
};

/* --------------------------------------------------------------------------
   Projection Lambert-93 (conique conforme de Lambert, deux parallèles)
   -------------------------------------------------------------------------- */
const lambert93 = (() => {
  const a = 6378137;                    // demi-grand axe GRS80
  const e = 0.081819191042816;          // première excentricité
  const rad = (d) => (d * Math.PI) / 180;
  const phi0 = rad(46.5), lambda0 = rad(3);
  const phi1 = rad(44), phi2 = rad(49);
  const x0 = 700000, y0 = 6600000;

  const m = (p) => Math.cos(p) / Math.sqrt(1 - e * e * Math.sin(p) ** 2);
  const t = (p) =>
    Math.tan(Math.PI / 4 - p / 2) / ((1 - e * Math.sin(p)) / (1 + e * Math.sin(p))) ** (e / 2);

  const m1 = m(phi1), m2 = m(phi2), t1 = t(phi1), t2 = t(phi2), t0 = t(phi0);
  const n = (Math.log(m1) - Math.log(m2)) / (Math.log(t1) - Math.log(t2));
  const F = m1 / (n * t1 ** n);
  const rho0 = a * F * t0 ** n;

  return ([lon, lat]) => {
    const rho = a * F * t(rad(lat)) ** n;
    const theta = n * (rad(lon) - lambda0);
    return [x0 + rho * Math.sin(theta), y0 + rho0 - rho * Math.cos(theta)];
  };
})();

/* --------------------------------------------------------------------------
   Outils géométriques
   -------------------------------------------------------------------------- */
const anneaux = (geom) =>
  geom.type === 'Polygon' ? geom.coordinates : geom.coordinates.flat();

const lignes = (geom) =>
  geom.type === 'LineString' ? [geom.coordinates] : geom.coordinates;

/**
 * Découpe un anneau au rectangle de la fenêtre (Sutherland–Hodgman).
 * Les départements limitrophes et la tache urbaine débordent largement du
 * cadre : les découper divise le poids du fichier par plusieurs, alors que
 * le rendu serait identique puisque la fenêtre SVG rogne de toute façon.
 */
const decouperAuCadre = (anneau, [x0, y0, x1, y1]) => {
  const dedansBord = [
    (p) => p[0] >= x0, (p) => p[0] <= x1,
    (p) => p[1] >= y0, (p) => p[1] <= y1,
  ];
  const intersection = [
    (a, b) => [x0, a[1] + ((x0 - a[0]) / (b[0] - a[0])) * (b[1] - a[1])],
    (a, b) => [x1, a[1] + ((x1 - a[0]) / (b[0] - a[0])) * (b[1] - a[1])],
    (a, b) => [a[0] + ((y0 - a[1]) / (b[1] - a[1])) * (b[0] - a[0]), y0],
    (a, b) => [a[0] + ((y1 - a[1]) / (b[1] - a[1])) * (b[0] - a[0]), y1],
  ];
  let sortie = anneau;
  for (let k = 0; k < 4 && sortie.length; k++) {
    const entree = sortie;
    sortie = [];
    for (let i = 0; i < entree.length; i++) {
      const a = entree[(i + entree.length - 1) % entree.length];
      const b = entree[i];
      const da = dedansBord[k](a), db = dedansBord[k](b);
      if (db) { if (!da) sortie.push(intersection[k](a, b)); sortie.push(b); }
      else if (da) sortie.push(intersection[k](a, b));
    }
  }
  return sortie;
};

/** Douglas–Peucker, appliqué après projection : la tolérance est en pixels. */
const alleger = (pts, tolerance) => {
  if (pts.length < 3) return pts;
  const garder = new Array(pts.length).fill(false);
  garder[0] = garder[pts.length - 1] = true;
  const pile = [[0, pts.length - 1]];
  while (pile.length) {
    const [i, j] = pile.pop();
    const [x1, y1] = pts[i], [x2, y2] = pts[j];
    const dx = x2 - x1, dy = y2 - y1, l2 = dx * dx + dy * dy;
    let pire = -1, rang = -1;
    for (let k = i + 1; k < j; k++) {
      const [x, y] = pts[k];
      const t = l2 ? Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / l2)) : 0;
      const d = Math.hypot(x - (x1 + t * dx), y - (y1 + t * dy));
      if (d > pire) { pire = d; rang = k; }
    }
    if (pire > tolerance) { garder[rang] = true; pile.push([i, rang], [rang, j]); }
  }
  return pts.filter((_, k) => garder[k]);
};

/** Aire signée d'un anneau : sert à trouver l'anneau principal. */
const aire = (anneau) => {
  let s = 0;
  for (let i = 0, j = anneau.length - 1; i < anneau.length; j = i++) {
    s += anneau[j][0] * anneau[i][1] - anneau[i][0] * anneau[j][1];
  }
  return s / 2;
};

/**
 * Pôle d'inaccessibilité approché : le point intérieur le plus éloigné du bord.
 * Le centroïde tomberait hors de la forme pour un département concave comme
 * les Hauts-de-Seine, qui enserre Paris.
 */
const poleInterieur = (anneauPrincipal, trous = []) => {
  const xs = anneauPrincipal.map((p) => p[0]);
  const ys = anneauPrincipal.map((p) => p[1]);
  const [minX, maxX] = [Math.min(...xs), Math.max(...xs)];
  const [minY, maxY] = [Math.min(...ys), Math.max(...ys)];

  const dansAnneau = (x, y, anneau) => {
    let dedans = false;
    for (let i = 0, j = anneau.length - 1; i < anneau.length; j = i++) {
      const [xi, yi] = anneau[i], [xj, yj] = anneau[j];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) dedans = !dedans;
    }
    return dedans;
  };
  const dedans = (x, y) =>
    dansAnneau(x, y, anneauPrincipal) && !trous.some((t) => dansAnneau(x, y, t));

  const distanceBord = (x, y) => {
    let min = Infinity;
    for (const anneau of [anneauPrincipal, ...trous]) {
      for (let i = 0, j = anneau.length - 1; i < anneau.length; j = i++) {
        const [x1, y1] = anneau[j], [x2, y2] = anneau[i];
        const dx = x2 - x1, dy = y2 - y1;
        const l2 = dx * dx + dy * dy;
        const t = l2 ? Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / l2)) : 0;
        min = Math.min(min, Math.hypot(x - (x1 + t * dx), y - (y1 + t * dy)));
      }
    }
    return min;
  };

  // Balayage sur grille, puis raffinement local.
  let meilleur = null, meilleureD = -1;
  const N = 48;
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < N; j++) {
      const x = minX + ((maxX - minX) * i) / N;
      const y = minY + ((maxY - minY) * j) / N;
      if (!dedans(x, y)) continue;
      const d = distanceBord(x, y);
      if (d > meilleureD) { meilleureD = d; meilleur = [x, y]; }
    }
  }
  if (!meilleur) return [(minX + maxX) / 2, (minY + maxY) / 2];

  let pas = Math.max((maxX - minX), (maxY - minY)) / N;
  for (let k = 0; k < 24; k++) {
    let ameliore = false;
    for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]) {
      const x = meilleur[0] + dx * pas, y = meilleur[1] + dy * pas;
      if (!dedans(x, y)) continue;
      const d = distanceBord(x, y);
      if (d > meilleureD) { meilleureD = d; meilleur = [x, y]; ameliore = true; }
    }
    if (!ameliore) pas /= 2;
  }
  return meilleur;
};

/* --------------------------------------------------------------------------
   Programme
   -------------------------------------------------------------------------- */
console.log('Génération de la carte d’Île-de-France');

const brutDept = await recuperer('departements', SOURCES.departements);
const communes = await recuperer('communes', SOURCES.communes);
const rivieresBrutes = await recuperer('rivieres', SOURCES.rivieres);
const rivieresEurope = await recuperer('rivieres-eu', SOURCES['rivieres-eu']);
const franceEntiere = await recuperer('france', SOURCES.france);
const urbainBrut = await recuperer('urbain', SOURCES.urbain);

/* Simplification topologique : mapshaper conserve les frontières communes
   entre départements, ce qu'une simplification indépendante ne ferait pas. */
await mkdir(CACHE, { recursive: true });
const entree = join(CACHE, 'departements.geojson');
const simplifie = join(CACHE, 'departements-simplifies.geojson');
execFileSync(
  'npx',
  ['mapshaper', '-i', entree, '-simplify', `${SIMPLIFICATION}%`, 'weighted', 'keep-shapes',
   '-o', 'force', simplifie],
  { stdio: 'pipe' },
);
const dept = JSON.parse(await readFile(simplifie, 'utf-8'));
console.log(`  départements simplifiés à ${SIMPLIFICATION} %`);

/* Projection de tout le jeu, puis calcul de la fenêtre commune. */
const projete = dept.features.map((f) => ({
  code: f.properties.code,
  nom: f.properties.nom,
  anneaux: anneaux(f.geometry).map((r) => r.map(lambert93)),
}));

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
for (const d of projete) {
  for (const r of d.anneaux) {
    for (const [x, y] of r) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

/* La fenêtre part de l'emprise régionale, l'élargit de la bande de contexte,
   puis étire l'axe déficitaire pour épouser exactement le format de la
   VIEWBOX. Le cadre est ainsi rempli de territoire d'un bord à l'autre :
   plus de bandes vides, et plus de région flottant dans le vide. */
let cadreX0 = minX - CONTEXTE, cadreX1 = maxX + CONTEXTE;
let cadreY0 = minY - CONTEXTE, cadreY1 = maxY + CONTEXTE;
const formatVoulu = VIEWBOX.w / VIEWBOX.h;
const largeur = cadreX1 - cadreX0, hauteur = cadreY1 - cadreY0;
if (largeur / hauteur < formatVoulu) {
  const ajout = (hauteur * formatVoulu - largeur) / 2;
  cadreX0 -= ajout; cadreX1 += ajout;
} else {
  const ajout = (largeur / formatVoulu - hauteur) / 2;
  cadreY0 -= ajout; cadreY1 += ajout;
}
const echelle = VIEWBOX.w / (cadreX1 - cadreX0);

/** Lambert-93 → fenêtre SVG (l'axe des y est inversé). */
const versSvg = ([x, y]) => [
  +((x - cadreX0) * echelle).toFixed(1),
  +((cadreY1 - y) * echelle).toFixed(1),
];

/* Lambert-93 étant conforme et le facteur d'échelle voisin de 1 en
   Île-de-France, une unité de la fenêtre vaut bien cette distance au sol. */
const METRES_PAR_UNITE = 1 / echelle;
const CADRE = [0, 0, VIEWBOX.w, VIEWBOX.h];

const versChemin = (anneauxProjetes) =>
  anneauxProjetes
    .map((r) => {
      const pts = r.map(versSvg);
      // Supprime les points consécutifs identiques après arrondi.
      const nets = pts.filter((p, i) => i === 0 || p[0] !== pts[i - 1][0] || p[1] !== pts[i - 1][1]);
      return 'M' + nets.map(([x, y]) => `${x} ${y}`).join('L') + 'Z';
    })
    .join('');

/* -------------------- Départements -------------------- */
const ORDRE = ['95', '77', '78', '91', '92', '93', '94', '75'];
const SLUGS = {
  75: 'paris', 77: 'seine-et-marne', 78: 'yvelines', 91: 'essonne',
  92: 'hauts-de-seine', 93: 'seine-saint-denis', 94: 'val-de-marne', 95: 'val-doise',
};
/* Les quatre départements de la petite couronne sont trop exigus pour porter
   leur nom : ils reçoivent une pastille avec leur numéro. */
const PASTILLES = new Set(['75', '92', '93', '94']);

const formes = ORDRE.map((code) => {
  const d = projete.find((x) => x.code === code);
  const tries = [...d.anneaux].sort((a, b) => Math.abs(aire(b)) - Math.abs(aire(a)));
  const principal = tries[0];
  const trous = tries.slice(1).filter((r) => Math.abs(aire(r)) > Math.abs(aire(principal)) * 0.02);
  const [lx, ly] = versSvg(poleInterieur(principal, trous));
  return {
    slug: SLUGS[code],
    code,
    nom: d.nom,
    d: versChemin(d.anneaux),
    labelX: Math.round(lx),
    labelY: Math.round(ly),
    pastille: PASTILLES.has(code),
  };
});

/* -------------------- Contour de la région -------------------- */
execFileSync(
  'npx',
  ['mapshaper', '-i', simplifie, '-dissolve2', '-o', 'force', join(CACHE, 'region.geojson')],
  { stdio: 'pipe' },
);
const regionGeo = JSON.parse(await readFile(join(CACHE, 'region.geojson'), 'utf-8'));
/* Sans propriété à conserver, mapshaper rend une GeometryCollection
   plutôt qu'une FeatureCollection. */
const geomRegion = regionGeo.features?.[0]?.geometry ?? regionGeo.geometries?.[0] ?? regionGeo;
const contourRegion = versChemin(anneaux(geomRegion).map((r) => r.map(lambert93)));

/* -------------------- Communes retenues -------------------- */
const VILLES = {
  pontoise: ['Pontoise', 'val-doise'],
  argenteuil: ['Argenteuil', 'val-doise'],
  meaux: ['Meaux', 'seine-et-marne'],
  provins: ['Provins', 'seine-et-marne'],
  fontainebleau: ['Fontainebleau', 'seine-et-marne'],
  versailles: ['Versailles', 'yvelines'],
  'saint-germain-en-laye': ['Saint-Germain-en-Laye', 'yvelines'],
  'le-vesinet': ['Vésinet', 'yvelines'],
  etampes: ['Étampes', 'essonne'],
  'rueil-malmaison': ['Rueil-Malmaison', 'hauts-de-seine'],
  'neuilly-sur-seine': ['Neuilly-sur-Seine', 'hauts-de-seine'],
  'boulogne-billancourt': ['Boulogne-Billancourt', 'hauts-de-seine'],
  montreuil: ['Montreuil', 'seine-saint-denis'],
  vincennes: ['Vincennes', 'val-de-marne'],
  'nogent-sur-marne': ['Nogent-sur-Marne', 'val-de-marne'],
  'saint-maur-des-fosses': ['Saint-Maur-des-Fossés', 'val-de-marne'],
};
/* Communes dont le nom reste affiché sans survol : les autres sont trop
   proches les unes des autres au cœur de l'agglomération. */
const TOUJOURS = new Set(['pontoise', 'meaux', 'provins', 'fontainebleau', 'versailles', 'etampes']);
const ANCRAGES = {
  pontoise: ['end', -10], argenteuil: ['start', -9], meaux: ['start', -10],
  provins: ['middle', -13], fontainebleau: ['middle', 24], versailles: ['end', 4],
  'saint-germain-en-laye': ['end', -9], 'le-vesinet': ['end', 13], etampes: ['middle', 24],
  'rueil-malmaison': ['end', -7], 'neuilly-sur-seine': ['end', -15],
  'boulogne-billancourt': ['end', 15], montreuil: ['start', -9],
  vincennes: ['end', 14], 'nogent-sur-marne': ['start', 4],
  'saint-maur-des-fosses': ['start', 13],
};

const parNom = new Map(communes.features.map((f) => [f.properties.nom, f]));
const points = Object.entries(VILLES).map(([slug, [nom, dept]]) => {
  const f = parNom.get(nom);
  if (!f) throw new Error(`commune introuvable : ${nom}`);
  const rs = anneaux(f.geometry).map((r) => r.map(lambert93));
  const principal = [...rs].sort((a, b) => Math.abs(aire(b)) - Math.abs(aire(a)))[0];
  const [x, y] = versSvg(poleInterieur(principal));
  const [ancre, dy] = ANCRAGES[slug] ?? ['middle', -10];
  return { slug, nom: nom === 'Vésinet' ? 'Le Vésinet' : nom, dept,
           x: Math.round(x), y: Math.round(y), ancre, dy, toujours: TOUJOURS.has(slug) };
});

/* Les couches de décor se contentent de l'unité entière : au dixième près
   elles pèseraient un tiers de plus pour un rendu identique. */
const entier = (r) => r.map(([x, y]) => [Math.round(x), Math.round(y)]);

/* -------------------- Départements limitrophes -------------------- */
/* Contexte uniquement : ces territoires ne sont ni cliquables ni desservis.
   Ils sont découpés au cadre, allégés, et rendus en retrait. */
const CODES_IDF = new Set(ORDRE);
const voisins = [];
for (const f of franceEntiere.features) {
  if (CODES_IDF.has(f.properties.code)) continue;
  const anneauxCadres = anneaux(f.geometry)
    .map((r) => decouperAuCadre(r.map(lambert93).map(versSvg), CADRE))
    .map((r) => alleger(r, 1.6))
    .filter((r) => r.length > 2 && Math.abs(aire(r)) > 200);
  if (!anneauxCadres.length) continue;
  const tries = [...anneauxCadres].sort((a, b) => Math.abs(aire(b)) - Math.abs(aire(a)));
  const principal = tries[0];
  const visible = Math.abs(aire(principal));
  const chemin = tries
    .map((r) => 'M' + r.map(([x, y]) => `${Math.round(x)} ${Math.round(y)}`).join('L') + 'Z')
    .join('');
  /* Un département qui n'entre dans le cadre que par un coin n'a pas la place
     de porter son nom : on garde sa forme, on omet l'étiquette. */
  let etiquette = null;
  if (visible > 5200) {
    const [lx, ly] = poleInterieur(principal);
    if (lx > 46 && lx < VIEWBOX.w - 46 && ly > 30 && ly < VIEWBOX.h - 30) {
      etiquette = [Math.round(lx), Math.round(ly)];
    }
  }
  voisins.push({ code: f.properties.code, nom: f.properties.nom, d: chemin, etiquette });
}
voisins.sort((a, b) => a.code.localeCompare(b.code));

/* -------------------- Tache urbaine -------------------- */
/* Montre d'un coup d'œil pourquoi la petite couronne est si dense, et pose
   les villes du pourtour. Aucune donnée d'activité : c'est du bâti. */
const urbain = [];
for (const f of urbainBrut.features) {
  for (const r of anneaux(f.geometry)) {
    const ecran = decouperAuCadre(r.map(lambert93).map(versSvg), CADRE);
    if (ecran.length < 3) continue;
    const allege = alleger(ecran, 1.3);
    if (allege.length < 3 || Math.abs(aire(allege)) < 45) continue;
    urbain.push('M' + allege.map(([x, y]) => `${Math.round(x)} ${Math.round(y)}`).join('L') + 'Z');
  }
}

/* -------------------- Cours d'eau -------------------- */
/* Natural Earth publie les grands fleuves dans un jeu mondial et complète
   l'Europe dans un second : les deux sont nécessaires. À cette échelle le
   réseau se limite aux cours principaux — l'Oise, notamment, n'y figure pas.
   Mieux vaut un tracé incomplet mais exact qu'un tracé inventé. */
const RETENUS = ['Seine', 'Marne', 'Yonne', 'Loire', 'Eure', 'Aube'];
const sourcesEau = [...rivieresBrutes.features, ...rivieresEurope.features];
/* Un peu au large du cadre : les tronçons coupés net à la bordure se
   raccordent proprement une fois la fenêtre appliquée. */
const LARGE = [-30, -30, VIEWBOX.w + 30, VIEWBOX.h + 30];
const dansLarge = ([x, y]) =>
  x >= LARGE[0] && x <= LARGE[2] && y >= LARGE[1] && y <= LARGE[3];

const rivieres = [];
for (const nom of RETENUS) {
  const segments = [];
  for (const f of sourcesEau) {
    if ((f.properties.name ?? f.properties.name_en) !== nom) continue;
    for (const ligne of lignes(f.geometry)) {
      // Découpe la ligne en tronçons contenus dans la fenêtre.
      let courant = [];
      for (const pt of ligne.map(lambert93).map(versSvg)) {
        if (dansLarge(pt)) courant.push(pt);
        else if (courant.length) { segments.push(courant); courant = []; }
      }
      if (courant.length) segments.push(courant);
    }
  }
  const chemins = segments
    .filter((s) => s.length > 2)
    .map((s) => alleger(s, 0.8))
    .filter((s) => s.length > 1)
    .map((s) => 'M' + s.map(([x, y]) => `${x} ${y}`).join('L'));
  if (chemins.length) rivieres.push({ nom, d: chemins.join('') });
}

/* -------------------- Échelle -------------------- */
/* Une barre d'échelle est ce qui distingue une carte d'un schéma : elle donne
   les distances réelles. On retient une valeur ronde proche du septième de
   la largeur du cadre. */
const kmCadre = (VIEWBOX.w * METRES_PAR_UNITE) / 1000;
const PALIERS = [1, 2, 5, 10, 20, 25, 50, 100, 200];
const kmBarre = PALIERS.reduce(
  (m, v) => (Math.abs(v - kmCadre / 7) < Math.abs(m - kmCadre / 7) ? v : m),
  PALIERS[0],
);

/* -------------------- Écriture -------------------- */
const json = (v) => JSON.stringify(v);
const contenu = `/**
 * Géométrie de la carte d'Île-de-France.
 *
 * FICHIER GÉNÉRÉ — ne pas modifier à la main.
 * Régénérer avec : npm install --no-save mapshaper && node scripts/generer-carte.mjs
 *
 * Sources
 *   Contours des départements et des communes : IGN, Admin Express COG,
 *   via github.com/gregoiredavid/france-geojson — Licence ouverte (Etalab).
 *   Cours d'eau et tache urbaine : Natural Earth 10m — domaine public.
 *
 * Projection Lambert-93 (EPSG:2154), simplification topologique à ${SIMPLIFICATION} %
 * (Visvalingam pondérée, frontières communes préservées).
 *
 * La fenêtre déborde de ${(CONTEXTE / 1000).toFixed(0)} km au-delà de la région : les départements
 * limitrophes, les villes voisines et les cours d'eau y sont conservés pour
 * que la carte situe l'Île-de-France au lieu de la découper sur du vide.
 *
 * Aucun marqueur ne représente une intervention, un chantier ou un client :
 * la carte n'affiche que des zones desservies et les communes disposant
 * d'une page dédiée.
 */

export const VIEWBOX = { x: 0, y: 0, w: ${VIEWBOX.w}, h: ${VIEWBOX.h} };

/** Distance au sol d'une unité de la fenêtre, en mètres. */
export const METRES_PAR_UNITE = ${METRES_PAR_UNITE.toFixed(3)};

/** Barre d'échelle : une valeur ronde et sa longueur en unités de la fenêtre. */
export const ECHELLE = { km: ${kmBarre}, unites: ${((kmBarre * 1000) / METRES_PAR_UNITE).toFixed(1)} };

/** Contour de la région, posé sous les départements pour éviter tout interstice. */
export const REGION_OUTLINE =
  ${json(contourRegion)};

/**
 * Départements limitrophes. Contexte seul : non cliquables, non desservis,
 * découpés au cadre et fortement allégés.
 */
export const VOISINS: { code: string; name: string; d: string; labelX?: number; labelY?: number }[] = [
${voisins.map((v) => `  { code: ${json(v.code)}, name: ${json(v.nom)},${v.etiquette ? ` labelX: ${v.etiquette[0]}, labelY: ${v.etiquette[1]},` : ''} d: ${json(v.d)} },`).join('\n')}
];

/**
 * Tache urbaine (bâti continu). Aide à lire la densité de l'agglomération ;
 * ne représente ni chantier, ni client, ni zone d'activité.
 */
export const URBAIN = ${json(urbain.join(''))};

export type DeptShape = {
  slug: string;
  code: string;
  name: string;
  d: string;
  labelX: number;
  labelY: number;
  /** Les départements trop exigus portent une pastille numérotée. */
  chip?: boolean;
};

export const DEPT_SHAPES: DeptShape[] = [
${formes.map((f) => `  {
    slug: ${json(f.slug)},
    code: ${json(f.code)},
    name: ${json(f.nom)},
    labelX: ${f.labelX},
    labelY: ${f.labelY},${f.pastille ? '\n    chip: true,' : ''}
    d: ${json(f.d)},
  },`).join('\n')}
];

/** Cours d'eau principaux, uniquement pour aider à se repérer. */
export const RIVIERES: { name: string; d: string }[] = [
${rivieres.map((r) => `  { name: ${json(r.nom)}, d: ${json(r.d)} },`).join('\n')}
];

export type CityPoint = {
  slug: string;
  name: string;
  dept: string;
  x: number;
  y: number;
  anchor?: 'start' | 'end' | 'middle';
  dy?: number;
  /** Nom affiché sans survol, pour les communes assez isolées. */
  always?: boolean;
};

export const CITY_POINTS: CityPoint[] = [
${points.map((p) => `  { slug: ${json(p.slug)}, name: ${json(p.nom)}, dept: ${json(p.dept)}, x: ${p.x}, y: ${p.y}, anchor: ${json(p.ancre)}, dy: ${p.dy}${p.toujours ? ', always: true' : ''} },`).join('\n')}
];
`;

await writeFile(SORTIE, contenu);
const poids = Buffer.byteLength(contenu);
console.log(`  ${formes.length} départements, ${voisins.length} limitrophes, ${points.length} communes`);
console.log(`  ${rivieres.length} cours d'eau, ${urbain.length} emprises urbaines`);
console.log(`  échelle : 1 unité = ${METRES_PAR_UNITE.toFixed(1)} m, barre de ${kmBarre} km`);
console.log(`  ${SORTIE} écrit (${(poids / 1024).toFixed(1)} ko)`);
