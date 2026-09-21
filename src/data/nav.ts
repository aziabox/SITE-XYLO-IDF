import { DEPARTEMENTS } from './departements';

export type NavLink = { label: string; href: string; desc?: string };
export type NavGroup = { label: string; href?: string; intro?: string; columns: { title: string; links: NavLink[] }[] };

export const MAIN_NAV: NavGroup[] = [
  {
    label: 'Les insectes',
    href: '/insectes-xylophages',
    intro: "Reconnaître l'insecte responsable avant de décider d'un traitement.",
    columns: [
      {
        title: 'Fiches espèces',
        links: [
          { label: 'Termites', href: '/termites', desc: "Colonie, cordonnets de terre, réglementation" },
          { label: 'Capricorne des maisons', href: '/capricorne-des-maisons', desc: 'Résineux, trous ovales, risque structurel' },
          { label: 'Vrillettes', href: '/vrillette', desc: 'Petite et grosse vrillette, rôle de l’humidité' },
          { label: 'Lyctus', href: '/lyctus', desc: 'Feuillus récents, vermoulure en farine' },
          { label: 'Autres insectes du bois', href: '/insectes-du-bois', desc: 'Espèces moins fréquentes et confusions' },
        ],
      },
      {
        title: 'Comprendre',
        links: [
          { label: 'Les insectes xylophages', href: '/insectes-xylophages' },
          { label: 'Diagnostic d’infestation', href: '/diagnostic-insectes-xylophages' },
          { label: 'Attaque ancienne ou active ?', href: '/blog/diagnostic/attaque-ancienne-ou-active' },
          { label: 'Vrillette ou capricorne ?', href: '/blog/diagnostic/vrillette-ou-capricorne' },
        ],
      },
    ],
  },
  {
    label: 'Traitements',
    href: '/traitement-insectes-xylophages',
    intro: 'Une méthode choisie selon le bois, l’insecte et l’état de la structure.',
    columns: [
      {
        title: 'Par insecte',
        links: [
          { label: 'Traitement des termites', href: '/traitement-termites' },
          { label: 'Traitement du capricorne', href: '/traitement-capricorne' },
          { label: 'Traitement des vrillettes', href: '/traitement-vrillette' },
        ],
      },
      {
        title: 'Par ouvrage',
        links: [
          { label: 'Traitement de charpente', href: '/traitement-charpente' },
          { label: 'Traitement du bois', href: '/traitement-bois' },
          { label: 'Traitement curatif et préventif', href: '/traitement-insectes-xylophages' },
          { label: 'Prévention et surveillance', href: '/prevention-insectes-xylophages' },
        ],
      },
      {
        title: 'Par bâtiment',
        links: [
          { label: 'Charpente de maison', href: '/traitement-charpente-maison' },
          { label: 'Charpente ancienne', href: '/traitement-charpente-ancienne' },
          { label: 'Charpente en copropriété', href: '/traitement-charpente-copropriete' },
          { label: 'Tous les types de bâtiments', href: '/types-de-batiments' },
        ],
      },
    ],
  },
  {
    label: 'Vous constatez',
    href: '/bois-attaque-insectes',
    intro: 'Partir du signe observé plutôt que d’une hypothèse.',
    columns: [
      {
        title: 'Signes sur le bois',
        links: [
          { label: 'Des trous dans la charpente', href: '/trous-dans-charpente' },
          { label: 'De la sciure sous la charpente', href: '/sciure-charpente' },
          { label: 'De la vermoulure dans le bois', href: '/vermoulure-bois' },
          { label: 'Du bois attaqué par des insectes', href: '/bois-attaque-insectes' },
        ],
      },
      {
        title: 'Par ouvrage concerné',
        links: [
          { label: 'Insectes dans la charpente', href: '/insectes-charpente' },
          { label: 'Insectes dans les poutres', href: '/insectes-poutres' },
          { label: 'Insectes dans le plancher', href: '/insectes-plancher' },
        ],
      },
    ],
  },
  {
    label: 'Zones',
    href: '/zones-intervention',
    intro: 'Les huit départements d’Île-de-France.',
    columns: [
      {
        title: 'Départements',
        links: DEPARTEMENTS.slice(0, 4).map((d) => ({
          label: `${d.name} (${d.code})`,
          href: `/zones-intervention/${d.slug}`,
        })),
      },
      {
        title: ' ',
        links: DEPARTEMENTS.slice(4).map((d) => ({
          label: `${d.name} (${d.code})`,
          href: `/zones-intervention/${d.slug}`,
        })),
      },
    ],
  },
];

export const SIMPLE_NAV: NavLink[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Garanties', href: '/garanties-et-assurances' },
];

export const FOOTER_NAV: { title: string; links: NavLink[] }[] = [
  {
    title: 'Insectes xylophages',
    links: [
      { label: 'Les insectes xylophages', href: '/insectes-xylophages' },
      { label: 'Termites', href: '/termites' },
      { label: 'Capricorne des maisons', href: '/capricorne-des-maisons' },
      { label: 'Vrillettes', href: '/vrillette' },
      { label: 'Lyctus', href: '/lyctus' },
      { label: 'Autres insectes du bois', href: '/insectes-du-bois' },
    ],
  },
  {
    title: 'Diagnostic et traitement',
    links: [
      { label: 'Diagnostic d’infestation', href: '/diagnostic-insectes-xylophages' },
      { label: 'Traitement des insectes xylophages', href: '/traitement-insectes-xylophages' },
      { label: 'Traitement de charpente', href: '/traitement-charpente' },
      { label: 'Traitement du bois', href: '/traitement-bois' },
      { label: 'Prévention et surveillance', href: '/prevention-insectes-xylophages' },
    ],
  },
  {
    title: 'Vous constatez',
    links: [
      { label: 'Trous dans la charpente', href: '/trous-dans-charpente' },
      { label: 'Sciure sous la charpente', href: '/sciure-charpente' },
      { label: 'Vermoulure dans le bois', href: '/vermoulure-bois' },
      { label: 'Insectes dans les poutres', href: '/insectes-poutres' },
      { label: 'Insectes dans le plancher', href: '/insectes-plancher' },
    ],
  },
  {
    title: 'Île-de-France',
    links: [
      { label: 'Zones d’intervention', href: '/zones-intervention' },
      ...DEPARTEMENTS.map((d) => ({ label: d.name, href: `/zones-intervention/${d.slug}` })),
    ],
  },
];
