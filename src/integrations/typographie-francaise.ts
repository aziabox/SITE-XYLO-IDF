import type { AstroIntegration } from 'astro';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const NNBSP = ' '; // espace fine insécable
const NBSP = ' ';  // espace insécable

/** Segmente le HTML : on ne transforme jamais l'intérieur d'une balise, d'un script ou d'un style. */
const SPLIT = /(<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<!--[\s\S]*?-->|<[^>]*>)/gi;

const applique = (texte: string) =>
  texte
    // Ponctuation haute : espace fine insécable avant : ; ! ? »
    .replace(/(\S) +([:;!?»])(?=\s|$|<|&)/g, `$1${NNBSP}$2`)
    // Guillemet ouvrant
    .replace(/(«) +/g, `$1${NNBSP}`)
    // Unités et nombres : pas de coupure entre le nombre et son unité
    .replace(/(\d) (mm|cm|m|km|%|€|ans?|h)\b/g, `$1${NBSP}$2`);

const transforme = (html: string) =>
  html
    .split(SPLIT)
    .map((part, i) => (i % 2 === 1 ? part : applique(part)))
    .join('');

const walk = async (dir: string): Promise<string[]> => {
  const out: string[] = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (extname(entry.name) === '.html') out.push(full);
  }
  return out;
};

/**
 * Applique les règles typographiques françaises au HTML généré.
 * Évite qu'un deux-points ou un point d'interrogation se retrouve seul
 * en début de ligne, ce qui arrive souvent sur les titres responsives.
 */
export default function typographieFrancaise(): AstroIntegration {
  return {
    name: 'typographie-francaise',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = await walk(root);
        let modifiees = 0;
        await Promise.all(
          files.map(async (f) => {
            const src = await readFile(f, 'utf-8');
            const out = transforme(src);
            if (out !== src) {
              await writeFile(f, out, 'utf-8');
              modifiees++;
            }
          }),
        );
        logger.info(`typographie française appliquée à ${modifiees} page(s)`);
      },
    },
  };
}
