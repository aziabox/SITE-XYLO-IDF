import { SITE } from '~/data/site';

export type QA = { q: string; a: string };

/** FAQPage — uniquement si la page affiche réellement ces questions-réponses. */
export const faqSchema = (items: QA[]) =>
  items.length
    ? {
        '@type': 'FAQPage',
        mainEntity: items.map((i) => ({
          '@type': 'Question',
          name: i.q,
          acceptedAnswer: { '@type': 'Answer', text: i.a },
        })),
      }
    : null;

/**
 * Service — décrit une prestation réellement proposée.
 * Aucun prix, aucune note et aucun avis ne sont émis : ces données ne sont pas
 * disponibles et ne doivent pas être inventées.
 */
export const serviceSchema = (opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaName?: string;
}) => ({
  '@type': 'Service',
  '@id': `${SITE.url}${opts.path}#service`,
  name: opts.name,
  description: opts.description,
  serviceType: opts.serviceType ?? 'Traitement des insectes xylophages',
  provider: { '@id': `${SITE.url}/#organisation` },
  areaServed: { '@type': 'AdministrativeArea', name: opts.areaName ?? 'Île-de-France' },
  audience: { '@type': 'Audience', audienceType: 'Propriétaires, copropriétés, syndics, entreprises' },
});

export const articleSchema = (opts: {
  title: string;
  description: string;
  path: string;
  published: string;
  modified?: string;
  section?: string;
  image?: string;
}) => ({
  '@type': 'Article',
  '@id': `${SITE.url}${opts.path}#article`,
  headline: opts.title,
  description: opts.description,
  datePublished: opts.published,
  dateModified: opts.modified ?? opts.published,
  inLanguage: 'fr-FR',
  ...(opts.section ? { articleSection: opts.section } : {}),
  ...(opts.image ? { image: new URL(opts.image, SITE.url).href } : {}),
  author: { '@id': `${SITE.url}/#organisation` },
  publisher: { '@id': `${SITE.url}/#organisation` },
  mainEntityOfPage: { '@id': `${SITE.url}${opts.path}#page` },
});

/** Petit utilitaire de formatage de date en français. */
export const frDate = (iso: string) =>
  new Date(iso + (iso.length === 10 ? 'T12:00:00Z' : '')).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
