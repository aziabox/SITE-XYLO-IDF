import { readdir, readFile } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';

const ROOT = 'dist';
const walk = async (d) => {
  const out = [];
  for (const e of await readdir(d, { withFileTypes: true })) {
    const f = join(d, e.name);
    if (e.isDirectory()) out.push(...(await walk(f)));
    else out.push(f);
  }
  return out;
};
const files = await walk(ROOT);
const htmls = files.filter((f) => extname(f) === '.html');
const assets = new Set(files.map((f) => '/' + relative(ROOT, f).replace(/\\/g, '/')));

const urlOf = (f) => {
  let u = '/' + relative(ROOT, f).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '');
  return u.replace(/\/$/, '') || '/';
};
const pages = new Set(htmls.map(urlOf));

const grab = (h, re) => { const m = h.match(re); return m ? m[1].trim() : null; };
const rows = [];
const problems = [];
const titles = new Map(), descs = new Map();

for (const f of htmls) {
  const url = urlOf(f);
  const h = await readFile(f, 'utf-8');
  const title = grab(h, /<title>([\s\S]*?)<\/title>/);
  const desc = grab(h, /<meta name="description" content="([\s\S]*?)"/);
  const canon = grab(h, /<link rel="canonical" href="([\s\S]*?)"/);
  const h1s = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => m[1].replace(/<[^>]*>/g, '').trim());
  const h2s = [...h.matchAll(/<h2[^>]*>/g)].length;
  const og = grab(h, /<meta property="og:image" content="([\s\S]*?)"/);
  const noindex = /content="noindex/.test(h);
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let ldTypes = [];
  for (const m of ld) {
    try {
      const j = JSON.parse(m[1]);
      ldTypes = (j['@graph'] ?? [j]).map((n) => n['@type']);
    } catch (e) { problems.push([url, 'JSON-LD invalide: ' + e.message]); }
  }
  const imgs = [...h.matchAll(/<img\b[^>]*>/g)];
  const noAlt = imgs.filter((m) => !/\balt=/.test(m[0])).length;
  const textLen = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().length;

  if (!title) problems.push([url, 'title manquant']);
  if (!desc) problems.push([url, 'meta description manquante']);
  if (desc && (desc.length < 70 || desc.length > 185)) problems.push([url, `description ${desc.length} car.`]);
  if (title && title.length > 65) problems.push([url, `title ${title.length} car.`]);
  if (h1s.length !== 1) problems.push([url, `${h1s.length} H1`]);
  if (!canon) problems.push([url, 'canonical manquant']);
  if (noAlt) problems.push([url, `${noAlt} <img> sans alt`]);
  if (!noindex) {
    if (title) titles.set(title, [...(titles.get(title) ?? []), url]);
    if (desc) descs.set(desc, [...(descs.get(desc) ?? []), url]);
  }
  if (textLen < 900 && !noindex) problems.push([url, `contenu court (${textLen} car.)`]);

  // liens internes (hors <script> et <style>, où les gabarits JS produisent de faux positifs)
  const hLinks = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  for (const m of hLinks.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    let target = m[1].replace(/\/$/, '') || '/';
    if (assets.has(m[1]) || assets.has(target)) continue;
    if (pages.has(target)) continue;
    if (/\.(xml|txt|png|svg|jpg|webp|ico|css|js|json|woff2?)$/.test(m[1])) {
      if (!assets.has(m[1])) problems.push([url, `asset manquant : ${m[1]}`]);
      continue;
    }
    problems.push([url, `lien interne cassé : ${m[1]}`]);
  }
  rows.push({ url, title, desc, h1: h1s[0], h2s, ldTypes: ldTypes.join('+'), og, textLen, noindex });
}

console.log(`Pages HTML : ${htmls.length}`);
const dupT = [...titles].filter(([, v]) => v.length > 1);
const dupD = [...descs].filter(([, v]) => v.length > 1);
console.log(`Titles dupliqués : ${dupT.length}`);
dupT.slice(0, 10).forEach(([t, v]) => console.log(`  « ${t.slice(0, 60)} » → ${v.join(', ')}`));
console.log(`Descriptions dupliquées : ${dupD.length}`);
dupD.slice(0, 10).forEach(([, v]) => console.log(`  → ${v.join(', ')}`));

const byKind = {};
for (const [u, p] of problems) {
  const kind = p.replace(/ : .*/, '').replace(/\d+/g, 'N');
  (byKind[kind] ||= []).push(`${u} — ${p}`);
}
console.log(`\nProblèmes : ${problems.length}`);
for (const [k, v] of Object.entries(byKind).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n[${v.length}] ${k}`);
  v.slice(0, 12).forEach((l) => console.log('   ' + l));
  if (v.length > 12) console.log(`   … et ${v.length - 12} autres`);
}
console.log('\nLongueur moyenne du texte :', Math.round(rows.reduce((a, r) => a + r.textLen, 0) / rows.length));
