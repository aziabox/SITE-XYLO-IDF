import type { AstroIntegration } from 'astro';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Précharge les deux sous-ensembles latins réellement utilisés par le site.
 *
 * Sans cela, la requête de police n'est émise qu'après l'analyse de la feuille
 * de styles, ce qui retarde le rendu du titre principal — donc le LCP. Les noms
 * de fichiers étant hachés à la compilation, l'injection se fait ici.
 */
export default function prechargePolices(): AstroIntegration {
  return {
    name: 'precharge-polices',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const assets = join(root, '_astro');
        let fichiers: string[] = [];
        try {
          fichiers = await readdir(assets);
        } catch {
          logger.warn('dossier _astro introuvable, préchargement ignoré');
          return;
        }

        const polices = fichiers.filter((f) => /-latin-wght-normal\.[^.]+\.woff2$/.test(f));
        if (!polices.length) {
          logger.warn('aucune police latine trouvée, préchargement ignoré');
          return;
        }

        const liens = polices
          .map((f) => `<link rel="preload" as="font" type="font/woff2" href="/_astro/${f}" crossorigin>`)
          .join('');

        const walk = async (d: string): Promise<string[]> => {
          const out: string[] = [];
          for (const e of await readdir(d, { withFileTypes: true })) {
            const full = join(d, e.name);
            if (e.isDirectory()) out.push(...(await walk(full)));
            else if (extname(e.name) === '.html') out.push(full);
          }
          return out;
        };

        const pages = await walk(root);
        await Promise.all(
          pages.map(async (f) => {
            const src = await readFile(f, 'utf-8');
            if (src.includes('rel="preload" as="font"')) return;
            await writeFile(f, src.replace('</head>', `${liens}</head>`), 'utf-8');
          }),
        );
        logger.info(`${polices.length} police(s) préchargée(s) sur ${pages.length} page(s)`);
      },
    },
  };
}
