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
  /* Politique de sécurité de contenu.
     Astro calcule l'empreinte SHA-256 de chaque script et de chaque style qu'il
     génère, et les inscrit dans une balise meta. Le site n'appelle aucune
     ressource externe — polices, styles et scripts sont tous auto-hébergés —
     et ne contient plus aucun attribut `style` en ligne, ce qui permet de se
     passer de 'unsafe-inline'.
     `frame-ancestors` n'a d'effet qu'en en-tête HTTP : il est défini dans
     public/.htaccess, avec les autres en-têtes de sécurité. */
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "manifest-src 'self'",
        "frame-src 'none'",
        "worker-src 'self'",
        'upgrade-insecure-requests',
      ],
    },
  },
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
