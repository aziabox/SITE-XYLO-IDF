# Xylo Patrimoine — insectes xylophages en Île-de-France

Site statique entièrement consacré au **diagnostic et au traitement des insectes
xylophages** en Île-de-France : termites, capricorne des maisons, vrillettes, lyctus.
94 pages, construites avec [Astro 7](https://astro.build).

Le positionnement n'est pas celui d'une entreprise de désinsectisation, mais celui
d'un spécialiste du bois et de la structure : **expertise du bois, diagnostic,
patrimoine immobilier, protection durable**.

---

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # génère dist/
npm start        # sert dist/ — c'est la commande utilisée en hébergement
npm run audit    # audit SEO et liens internes de la version générée
```

Node 22.12 ou supérieur (`engines` dans `package.json`) — exigé par Astro 7.

Le port et l'hôte suivent la variable d'environnement `PORT` ; l'URL canonique
suit `SITE_URL` si elle est définie, sinon la valeur inscrite dans
`astro.config.mjs`.

Les vérifications visuelles et de responsive utilisent Playwright, installé à la
demande pour ne pas alourdir l'installation en production :

```bash
npm install --no-save playwright
```

---

## ⚠️ À compléter avant la mise en ligne

Tout ce qui n'a pas été fourni par l'entreprise est resté **explicitement vide**.
Aucune donnée n'a été inventée : ni statistique, ni avis, ni certification, ni garantie.
Ces éléments se renseignent dans un seul fichier, `src/data/site.ts`.

| Champ | Fichier | Conséquence tant qu'il est vide |
|---|---|---|
| `legal.companyName`, `legalForm`, `siret`, `rcs`, `vat`, `capital`, `publicationDirector`, `host` | `src/data/site.ts` | La page *Mentions légales* affiche « À compléter » et un bandeau d'avertissement |
| `address` | `src/data/site.ts` | L'adresse postale est omise des mentions légales et du balisage `Organization` |
| `email` | `src/data/site.ts` | L'adresse électronique est omise des mentions légales et de la politique de confidentialité |
| `formEndpoint` | `src/data/site.ts` | L'envoi du formulaire est **bloqué** et l'internaute est invité à appeler — jamais d'échec silencieux |
| `decennale` | `src/data/site.ts` | Aucune mention de garantie décennale n'est affichée nulle part sur le site |
| `rcPro` | `src/data/site.ts` | L'assurance professionnelle n'est pas mentionnée dans les mentions légales |
| `certifications` | `src/data/site.ts` | La page *Garanties* explique qu'aucune certification n'est affichée, et pourquoi |
| `reviews` | `src/data/site.ts` | Aucun avis n'est affiché ; l'emplacement est prévu |
| `site` (domaine) | `astro.config.mjs` et `public/robots.txt` | Les URL canoniques et le sitemap pointent vers `xylo-patrimoine.fr` |

### Garantie décennale

C'est le point le plus sensible du secteur. Le site ne l'affiche **jamais** par défaut.

```ts
// src/data/site.ts
decennale: {
  verified: true,                       // bascule l'affichage
  insurer: 'Nom de l'assureur',
  policyNumber: '…',
  validFrom: '01/01/2025',
  validUntil: '31/12/2025',
  coveredActivities: ['Traitement de charpente', 'Renforcement de structure bois'],
  territory: 'France métropolitaine',
},
```

Tant que `verified` vaut `false`, la page *Garanties* explique honnêtement que tous les
travaux de traitement du bois ne relèvent pas de cette garantie, et que l'attestation
est remise avec le devis lorsque l'intervention entre dans ce champ.

**Ne basculez ce champ qu'avec l'attestation d'assurance sous les yeux.**

---

## Architecture du contenu

```
/                                     Accueil
/insectes-xylophages                  Pilier : reconnaître les espèces
/termites  /capricorne-des-maisons  /vrillette  /lyctus  /insectes-du-bois
/diagnostic-insectes-xylophages       Méthode et rapport
/traitement-insectes-xylophages       Pilier : curatif et préventif
/traitement-termites  /traitement-capricorne  /traitement-vrillette
/traitement-charpente  /traitement-bois  /prevention-insectes-xylophages

Vous constatez
/bois-attaque-insectes  /trous-dans-charpente  /sciure-charpente
/vermoulure-bois  /insectes-charpente  /insectes-poutres  /insectes-plancher

Types de bâtiments
/types-de-batiments
/traitement-charpente-maison  /traitement-charpente-ancienne
/traitement-charpente-copropriete  /traitement-bois-maison
/traitement-bois-batiment  /traitement-bois-commerce

Île-de-France
/zones-intervention
/zones-intervention/{paris, seine-et-marne, yvelines, essonne,
                     hauts-de-seine, seine-saint-denis, val-de-marne, val-doise}
/traitement-xylophages-{16 communes}

Blog
/blog  ·  /blog/{termites, capricornes, vrillettes, lyctus,
                 charpente, bois, prevention, diagnostic}
/blog/{catégorie}/{article}          23 articles

Informations
/faq  /garanties-et-assurances  /demander-un-diagnostic  /merci
/mentions-legales  /politique-de-confidentialite  /plan-du-site  /404
```

---

## Sources de contenu

Le contenu éditorial est séparé du gabarit. Pour modifier le site, on touche
presque toujours à l'un de ces fichiers :

| Fichier | Contenu |
|---|---|
| `src/data/site.ts` | Identité, coordonnées, assurances, avis — **source de vérité unique** |
| `src/data/insectes.ts` | Fiches espèces : biologie, signes, diagnostic, traitement, confusions |
| `src/data/departements.ts` | Les 8 départements : contexte bâti, ouvrages sensibles, FAQ locale |
| `src/data/villes.ts` | Les 16 communes : contexte, habitat, zones à contrôler, FAQ |
| `src/data/carte.ts` | Géométrie de la carte, cours d'eau, positions des communes |
| `src/data/nav.ts` | Menus principal, secondaire et pied de page |
| `src/content/blog/*.md` | Les articles |
| `src/content.config.ts` | Schéma des articles et définition des catégories |

### Ajouter une commune

1. Ajouter une entrée dans `src/data/villes.ts` (`intro`, `answer`, `contexte`,
   `habitat`, `zones`, `faq`).
2. Ajouter ses coordonnées projetées dans `CITY_POINTS` (`src/data/carte.ts`).
3. La page, le lien départemental, le plan du site et le sitemap se génèrent seuls.

**N'ajoutez une commune que si vous avez réellement quelque chose de spécifique à en
dire.** Générer des pages interchangeables dessert le référencement autant que le lecteur.

### Ajouter un article

Déposer un fichier `.md` dans `src/content/blog/`. Le front-matter est validé à la
compilation : un champ manquant fait échouer le build plutôt que de passer inaperçu.

```yaml
---
title: "…"
description: "…"        # 135 à 165 caractères
category: diagnostic     # une des 8 catégories
published: "2025-10-01"
readingTime: 6
answer: "…"              # réponse directe, exploitée en encadré et par les moteurs génératifs
links:  [{ label: "…", href: "/…" }]
faq:    [{ q: "…", a: "…" }]
---
```

---

## Identité visuelle

| Rôle | Jeton | Valeur |
|---|---|---|
| Vert sauge profond | `--sauge-500` | `#5D7E6A` |
| Vert forêt discret | `--sauge-700` | `#3A5344` |
| Brun bois | `--bois-500` | `#8A6F52` |
| Ivoire | `--ivoire` | `#FCFAF5` |
| Beige pierre | `--pierre-200` | `#E5DDCC` |
| Gris chaud | `--gris-600` | `#635D53` |
| Accent cuivre | `--cuivre-500` | `#9D5A33` |

Les jetons sont définis dans `src/styles/tokens.css`. Le cuivre est un **accent** :
il souligne, il ne remplit pas.

Typographie : **Fraunces** pour les titres, **DM Sans** pour le texte, auto-hébergées
via `@fontsource-variable`. Seuls les sous-ensembles latins sont téléchargés par le
navigateur, et ils sont préchargés.

Tous les couples de couleurs texte/fond respectent le niveau **AA** du WCAG.

---

## Photographies

Le site est livré avec des **schémas techniques SVG** dessinés pour lui — ferme de
charpente annotée, coupe de bois attaqué. Ils ne sont pas des images d'attente : ils
expliquent quelque chose.

Pour passer aux photographies, déposez les fichiers dans `src/assets/photos/` en
suivant la convention décrite dans le README de ce dossier. Astro génère alors
automatiquement l'AVIF, le WebP, plusieurs largeurs et le chargement différé. Tant
qu'un fichier est absent, le schéma reste affiché.

```astro
<Photo
  nom="inspection-charpente-insectes-xylophages.jpg"
  alt="Inspection d’une charpente présentant des signes possibles d’attaque d’insectes xylophages"
  legende="…"
>
  <Charpente />
</Photo>
```

---

## Carte interactive

`src/components/CarteIdf.astro` affiche la géométrie réelle de l'Île-de-France,
stockée dans `src/data/carte.ts`.

### Données et provenance

| Couche | Source | Licence |
| --- | --- | --- |
| Contours départementaux et communaux | IGN, **Admin Express COG**, via [france-geojson](https://github.com/gregoiredavid/france-geojson) | Licence ouverte (Etalab) |
| Cours d'eau (Seine, Marne, Yonne) | **Natural Earth** 10 m | Domaine public |

La Licence ouverte impose la mention de la source : elle est affichée sur la carte
elle-même (`.map__credit`, « Contours : IGN Admin Express — Licence ouverte (Etalab) »).
**Ne pas la retirer.**

### Traitement géométrique

- **Projection Lambert-93 (EPSG:2154)**, la projection légale française — et non une
  simple mise à l'échelle des degrés, qui étirerait la région d'environ 30 % en largeur.
- **Simplification topologique** par mapshaper (Visvalingam pondérée, 12 %,
  `keep-shapes`) : les frontières partagées restent strictement communes, donc
  **aucun interstice** entre deux départements voisins.
- Contour de région obtenu par `-dissolve2` des huit départements, posé sous les
  tracés comme fond continu et servant de `clipPath` aux cours d'eau.
- Étiquettes placées au **pôle d'inaccessibilité** de chaque polygone (balayage de
  grille puis raffinement local), et non au centroïde, qui tombe hors du territoire
  pour les formes concaves.
- Les quatre départements de petite taille (75, 92, 93, 94) portent une pastille
  numérotée au lieu d'un nom, faute de place.

### Régénération

`src/data/carte.ts` est **généré** : ne pas le modifier à la main.

```bash
npm install --no-save mapshaper
node scripts/generer-carte.mjs
```

Le script met les téléchargements en cache dans `node_modules/.cache/carte`.
Pour ajouter une commune sur la carte, l'ajouter au tableau `VILLES` du script
puis régénérer — le centroïde réel est calculé, jamais saisi à la main.

### Comportement

- **Rendue côté serveur** : indexable, et pleinement utilisable sans JavaScript
  (la liste des départements sous la carte est une alternative réelle, pas un pis-aller).
- **Script différé**, initialisé par `IntersectionObserver` quand la carte approche
  du champ de vision : aucun impact sur le chargement initial.
- Zoom molette (jusqu'à 8 ×), déplacement au pointeur, pincement tactile,
  boutons + / − / réinitialiser.
- Le facteur de zoom courant est publié dans la propriété CSS `--z`. Traits et
  étiquettes sont dimensionnés en `calc(Npx / var(--z))` et les tracés portent
  `vector-effect: non-scaling-stroke` : ils gardent donc une taille constante à
  l'écran quel que soit l'agrandissement, comme sur une vraie carte.
- Panneau latéral : survol au pointeur fin, première pression sur écran tactile.
- Sur une page départementale ou communale, le territoire courant est pré-sélectionné.

> Le panneau est reconstruit en JavaScript. Les styles d'Astro étant locaux au
> composant, ils ne s'appliquent pas aux nœuds créés par script : les règles du
> panneau sont donc déclarées en `:global()`. Le retirer casserait silencieusement
> la mise en forme.

**La carte ne comporte aucun marqueur d'intervention ni de client.** Elle représente
les zones desservies et les communes disposant d'une page dédiée, rien d'autre.

---

## SEO et GEO

- Titles, meta descriptions et H1 uniques sur les 94 pages — vérifié par `audit.mjs`.
- Canonical, Open Graph, Twitter Card, `sitemap-index.xml`, `robots.txt`.
- JSON-LD : `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, et selon la page
  `Service`, `Article`, `FAQPage`. **Aucun `aggregateRating`, `review`, `award` ou
  `priceRange`** n'est émis : ces données n'existent pas.
- Hiérarchie de titres sans saut de niveau.
- Chaque page porte une **réponse directe** (« En bref », « Réponse courte ») rédigée
  pour être citable telle quelle par un moteur génératif, et répondant aux six
  questions : quoi, où, comment, pourquoi, quand, qui.
- `robots.txt` autorise explicitement les robots des moteurs génératifs.

### Audit

```bash
npm run build && node audit.mjs
```

Le script vérifie : titles et descriptions présents, uniques et de bonne longueur ;
H1 unique ; canonical ; liens internes et ressources ; validité du JSON-LD ; images
sans `alt` ; pages trop courtes.

---

## Sécurité

`npm audit` remonte **0 vulnérabilité**. Le site ne charge aucune ressource
externe : polices, styles et scripts sont tous auto-hébergés. Aucun script
tiers, aucun traceur, aucun cookie.

### Politique de sécurité de contenu

Activée dans `astro.config.mjs` (`security.csp`). Astro calcule l'empreinte
SHA-256 de chaque script et de chaque style qu'il produit, et les inscrit dans
une balise `meta` propre à chaque page. La politique ne contient **ni
`unsafe-inline` ni `unsafe-eval`** :

```
default-src 'self' ; base-uri 'self' ; form-action 'self' ;
object-src 'none' ; frame-src 'none' ; img-src 'self' data: ;
font-src 'self' ; connect-src 'self' ; upgrade-insecure-requests ;
script-src 'self' <empreintes> ; style-src 'self' <empreintes>
```

Deux conséquences sur la façon d'écrire le code, à respecter pour toute
évolution :

- **Aucun attribut `style=` en ligne.** Ils seraient bloqués. Utilisez les
  classes utilitaires de `src/styles/global.css` (`.mt-*`, `.fs-*`, `.tac`…).
- **Aucun `is:inline` ni `define:vars` sur un script.** Un script marqué
  `is:inline` échappe au traitement d'Astro, donc à l'empreinte, et se retrouve
  bloqué. Pour transmettre une valeur du serveur au navigateur, passez par un
  attribut `data-*` lu ensuite via `dataset` — c'est ce que fait
  `src/components/Formulaire.astro`.

Les deux seuls `is:inline` restants sont des blocs de données
(`application/ld+json` et `application/json`), que les navigateurs
n'exécutent pas.

### En-têtes HTTP

`public/.htaccess` est copié tel quel dans `dist/` et lu par Apache comme par
LiteSpeed, le serveur utilisé chez Hostinger. Il fournit les en-têtes qu'une
balise `meta` ne peut pas porter :

| En-tête | Valeur |
|---|---|
| `X-Frame-Options` / `frame-ancestors` | `DENY` / `'none'` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | toutes les interfaces refusées, sauf `fullscreen=(self)` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-origin` |
| `X-Permitted-Cross-Domain-Policies` | `none` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |

Le fichier gère aussi la compression, le cache (immuable pour `/_astro/`,
revalidation pour le HTML), la page 404 et le refus d'accès aux fichiers de
configuration.

> **`Strict-Transport-Security` n'est envoyé qu'en HTTPS** (`env=HTTPS`).
> Vérifiez que le certificat est en place avant la mise en ligne : un
> navigateur ayant reçu cet en-tête refusera le HTTP pendant deux ans.
>
> Les redirections vers HTTPS et vers le domaine canonique sont **commentées**
> dans le fichier. Décommentez-les une fois le domaine définitif connu.

### Vérifier après déploiement

```bash
curl -sI https://votre-domaine.fr | grep -iE 'content-security|x-frame|x-content|referrer|permissions|strict-transport'
```

---

## Intégrité des informations

C'est une contrainte structurante du projet, pas une clause de style.

Le site **n'affiche pas** :

- de statistique d'infestation par département ou par commune — il n'existe pas de
  donnée publique fiable à cette échelle ;
- d'avis ou de témoignage client tant qu'aucun n'a été réellement recueilli ;
- de certification non détenue ;
- de garantie décennale non justifiée par une attestation ;
- de nombre d'interventions, d'années d'expérience ou de clients ;
- de liste de communes classées en zone termites — ces arrêtés préfectoraux évoluent,
  et une information obsolète sur un site commercial a des conséquences réelles dans
  une vente. Le site renvoie systématiquement vers la mairie ou la préfecture.

Les pages départementales et communales le disent explicitement au lecteur.

---

## Performance

Mesures sur la version générée :

| | |
|---|---|
| JavaScript total | 6,3 ko brut · **2,8 ko gzip** |
| CSS (un seul fichier) | 65,5 ko brut · **12,1 ko gzip** |
| Polices téléchargées | 2 fichiers latins, préchargés |
| Page la plus lourde | 22,1 ko gzip |
| Images | SVG en ligne, aucune requête |

Aucun script tiers, aucun traceur, aucun cookie — d'où l'absence de bandeau de
consentement, expliquée dans la politique de confidentialité.

---

## Structure du dépôt

```
src/
  assets/photos/        photographies (+ convention de nommage)
  components/           en-tête, pied de page, carte, formulaire, SEO, blocs éditoriaux
    illus/              schémas techniques SVG
  content/blog/         les 23 articles
  data/                 contenu structuré (voir plus haut)
  integrations/         typographie française, préchargement des polices
  layouts/              gabarit de base
  lib/                  balisage schema.org, plugin rehype des tableaux
  pages/                routes
  styles/               jetons et feuille globale
public/                 robots.txt, favicon, .htaccess, image de partage
scripts/
  generer-carte.mjs     régénère `src/data/carte.ts` depuis les données IGN
audit.mjs               audit SEO et liens internes (`npm run audit`)
```

### Hébergement

Le site est **statique** : un hébergeur de fichiers suffit.

| | |
|---|---|
| Commande d'installation | `npm ci` |
| Commande de build | `npm run build` |
| Dossier publié | `dist` |
| Commande de démarrage | `npm start` (pour les plateformes qui lancent un serveur Node) |
| Version de Node | 22.12 ou supérieure |

### Deux intégrations maison

- `typographie-francaise` — applique les règles typographiques françaises au HTML
  généré : espace fine insécable avant `: ; ! ? »`, après `«`, et entre un nombre et
  son unité. Évite qu'un deux-points se retrouve seul en début de ligne sur un titre.
- `precharge-polices` — injecte les `<link rel="preload">` des polices latines, dont
  les noms sont hachés à la compilation.

---

## Déploiement

Sortie statique dans `dist/`, déployable tel quel sur n'importe quel hébergeur.

Avant la première mise en ligne :

1. Renseigner `src/data/site.ts` (voir le tableau plus haut).
2. Remplacer le domaine dans `astro.config.mjs` et `public/robots.txt`,
   ou définir la variable d'environnement `SITE_URL`.
3. Brancher `formEndpoint` sur le traitement réel des demandes.
4. Servir en HTTPS et configurer une page d'erreur 404 pointant sur `/404.html`.
5. Relire les mentions légales avec l'entreprise.
