/**
 * Source de verite unique du site.
 *
 * REGLE ABSOLUE : aucune donnee de ce fichier ne doit etre inventee.
 * Tout ce qui n’est pas encore fourni par l’entreprise reste a `null`
 * ou `verified: false`. Les composants sont ecrits pour masquer
 * proprement les blocs non renseignes plutot que d’afficher une
 * information fausse (garantie, certification, avis, statistique).
 */

export const SITE = {
  name: 'Xylo Patrimoine',
  baseline: 'Diagnostic et traitement des insectes xylophages',
  region: 'Ile-de-France',
  url: 'https://www.xylo-patrimoine.fr',
  locale: 'fr-FR',
  /** Numero officiel fourni par l’entreprise. */
  phoneDisplay: '07 56 82 27 85',
  phoneHref: 'tel:+33756822785',
  phoneE164: '+33756822785',
  /** A completer par l’entreprise : email de contact reel. */
  email: null as string | null,
  /** A completer : adresse postale reelle de l’etablissement. */
  address: null as null | {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  },
  /** A completer : SIRET, forme juridique, capital, RCS, TVA, directeur de publication. */
  legal: {
    companyName: null as string | null,
    legalForm: null as string | null,
    siret: null as string | null,
    rcs: null as string | null,
    vat: null as string | null,
    capital: null as string | null,
    publicationDirector: null as string | null,
    host: null as string | null,
  },
  /**
   * Assurance decennale.
   * `verified` reste a false tant que l’attestation n’a pas ete fournie.
   * Aucune mention de garantie decennale n’est affichee tant que
   * `verified !== true` (voir src/components/GarantieSection.astro).
   */
  decennale: {
    verified: false,
    insurer: null as string | null,
    policyNumber: null as string | null,
    validFrom: null as string | null,
    validUntil: null as string | null,
    coveredActivities: null as string[] | null,
    territory: null as string | null,
  },
  /** Assurance responsabilite civile professionnelle : idem. */
  rcPro: {
    verified: false,
    insurer: null as string | null,
    policyNumber: null as string | null,
  },
  /** Certifications reellement detenues (Certibiome, CTB-A+, Qualibat...). Vide tant que non justifie. */
  certifications: [] as { name: string; issuer: string; number?: string; validUntil?: string }[],
  /** Avis clients reels uniquement. Tant que le tableau est vide, aucun avis n’est affiche. */
  reviews: [] as { author: string; rating: number; date: string; body: string; source: string }[],
  /** Horaires reellement pratiques. */
  openingHours: [
    { days: 'Lundi au vendredi', hours: '8h00 - 19h00' },
    { days: 'Samedi', hours: '9h00 - 17h00' },
  ],
  /** Endpoint du formulaire. A brancher sur le back-office de l’entreprise. */
  formEndpoint: null as string | null,
} as const;

export const CTA = {
  primary: { label: 'Demander un diagnostic', href: '/demander-un-diagnostic' },
  secondary: { label: 'Appeler un specialiste', href: SITE.phoneHref },
  phone: { label: `Appeler le ${SITE.phoneDisplay}`, href: SITE.phoneHref },
  charpente: { label: 'Faire examiner ma charpente', href: '/demander-un-diagnostic' },
  devis: { label: 'Demander un devis', href: '/demander-un-diagnostic' },
} as const;
