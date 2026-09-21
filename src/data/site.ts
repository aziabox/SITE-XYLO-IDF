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
  /** Siege social declare au RCS (source : registre, via Pappers). */
  address: {
    street: '1 rue Albert Simonin',
    postalCode: '92400',
    city: 'Courbevoie',
    country: 'France',
    /** Code ISO 3166-1, attendu par schema.org. */
    countryCode: 'FR',
  } as null | {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    countryCode: string;
  },
  /**
   * Identification de l’editeur. Donnees issues du registre national des
   * entreprises et du RCS de Nanterre, verifiables sur l’extrait Pappers /
   * l’avis de situation SIRENE.
   */
  legal: {
    companyName: 'ASSOUL Bilal' as string | null,
    /** Entreprise individuelle : pas de capital social, la ligne est masquee. */
    legalForm: 'Entrepreneur individuel' as string | null,
    siren: '901 133 041' as string | null,
    siret: '901 133 041 00011' as string | null,
    rcs: '901 133 041 R.C.S. Nanterre' as string | null,
    rcsDate: '07/07/2021' as string | null,
    rneDate: '06/07/2021' as string | null,
    /** Code APE declare (INSEE). */
    ape: '81.29A' as string | null,
    apeLabel: 'Désinfection, désinsectisation, dératisation' as string | null,
    /**
     * TVA intracommunautaire : NON renseignee volontairement.
     * Le numero theorique FR17901133041 est signale comme non valide dans
     * VIES, ce qui est le cas courant d’une entreprise en franchise en base.
     * Publier un numero invalide serait une mention fausse : tant que le
     * regime n’est pas confirme, la ligne n’est pas affichee.
     */
    vat: null as string | null,
    capital: null as string | null,
    publicationDirector: 'Bilal ASSOUL' as string | null,
    /**
     * Hebergeur. Denomination, code entreprise et adresse legale tels que
     * publies par Hostinger. Le telephone reste a confirmer sur le contrat
     * d’hebergement : aucun numero non verifie n’est publie ici.
     */
    host: {
      name: 'HOSTINGER, UAB',
      companyCode: '302710386',
      street: 'Švitrigailos g. 34',
      postalCode: 'LT-03230',
      city: 'Vilnius',
      country: 'Lituanie',
      url: 'https://www.hostinger.fr',
      phone: null as string | null,
    } as null | {
      name: string; companyCode: string; street: string; postalCode: string;
      city: string; country: string; url: string; phone: string | null;
    },
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
