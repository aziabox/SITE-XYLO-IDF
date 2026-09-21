// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import typographieFrancaise from './src/integrations/typographie-francaise.ts';
import prechargePolices from './src/integrations/precharge-polices.ts';
import rehypeTableaux from './src/lib/rehype-tableaux.ts';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.xylo-patrimoine.fr',
  /* Les plateformes d'hébergement imposent l'hôte et le port par variable
     d'environnement. `server` s'applique à `astro dev` comme à `astro preview`,
     que le script `start` utilise pour servir dist/. */
  server: {
    host: true,
    port: Number(process.env.PORT) || 4321,
  },
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    typographieFrancaise(),
    prechargePolices(),
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      filter: (page) => !page.includes('/merci') && !page.includes('/404'),
      serialize(item) {
        const url = item.url;
        let priority = 0.6;
        if (url.replace(/https?:\/\/[^/]+\//, '') === '') priority = 1.0;
        else if (/\/(insectes-xylophages|traitement-insectes-xylophages|diagnostic-insectes-xylophages|zones-intervention)\/?$/.test(url)) priority = 0.9;
        else if (/\/(termites|capricorne-des-maisons|vrillette|lyctus|traitement-charpente|traitement-bois)\/?$/.test(url)) priority = 0.85;
        else if (/\/blog\//.test(url)) priority = 0.5;
        return { ...item, priority };
      },
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeTableaux],
  },
  vite: {
    build: { cssCodeSplit: false },
  },
});
