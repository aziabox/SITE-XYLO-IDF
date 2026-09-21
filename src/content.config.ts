import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = {
  termites: {
    name: 'Termites',
    slug: 'termites',
    desc: "Reconnaissance, cheminements, réglementation et traitement des termites souterrains.",
  },
  capricornes: {
    name: 'Capricornes',
    slug: 'capricornes',
    desc: "Le capricorne des maisons : identification, dégâts sur les charpentes en résineux, traitement.",
  },
  vrillettes: {
    name: 'Vrillettes',
    slug: 'vrillettes',
    desc: "Petite et grosse vrillette : signes, rôle de l’humidité, mobilier et charpentes.",
  },
  lyctus: {
    name: 'Lyctus',
    slug: 'lyctus',
    desc: "Les insectes des bois feuillus récents : parquets, lambris, contreplaqués et mobilier.",
  },
  charpente: {
    name: 'Charpente',
    slug: 'charpente',
    desc: "Inspection, entretien et traitement des charpentes traditionnelles et industrialisées.",
  },
  bois: {
    name: 'Bois',
    slug: 'bois',
    desc: "Comprendre le matériau : essences, aubier, duramen, humidité et durabilité naturelle.",
  },
  prevention: {
    name: 'Prévention',
    slug: 'prevention',
    desc: "Éviter une nouvelle infestation : ventilation, surveillance, bonnes pratiques de chantier.",
  },
  diagnostic: {
    name: 'Diagnostic',
    slug: 'diagnostic',
    desc: "Méthode d’observation, distinction entre attaque ancienne et active, erreurs fréquentes.",
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    /** Titre SEO si différent du titre éditorial. */
    seoTitle: z.string().optional(),
    description: z.string(),
    category: z.enum(Object.keys(CATEGORIES) as [CategorySlug, ...CategorySlug[]]),
    published: z.string(),
    updated: z.string().optional(),
    /** Réponse directe en une phrase, exploitée en chapô et par les moteurs génératifs. */
    answer: z.string(),
    readingTime: z.number().optional(),
    related: z.array(z.string()).default([]),
    /** Pages du site à mettre en avant depuis l’article. */
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { blog };
