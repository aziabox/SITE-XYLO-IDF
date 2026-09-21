/**
 * Géométrie schématique de l’Île-de-France utilisée par la carte interactive.
 *
 * Les tracés sont volontairement simplifiés : la carte est un outil de
 * navigation vers les pages départementales et communales, pas un document
 * cadastral. Les positions des villes sont issues de leurs coordonnées réelles,
 * projetées linéairement sur la fenêtre SVG.
 *
 * Aucun marqueur ne représente une intervention, un chantier ou un client :
 * la carte n’affiche que des zones desservies et des communes disposant d’une
 * page dédiée.
 */

export const VIEWBOX = { x: 0, y: 0, w: 1000, h: 860 };

export type DeptShape = { slug: string; code: string; name: string; d: string; labelX: number; labelY: number; chip?: boolean };

/** Contour général de la région, utilisé comme fond continu sous les départements. */
export const REGION_OUTLINE =
  'M95 168 L130 62 L288 32 L420 70 L530 116 L606 186 L682 150 L774 136 L902 240 L946 398 L932 540 L889 676 L748 810 L660 862 L572 796 L500 690 L462 726 L410 748 L350 730 L300 690 L262 632 L210 656 L142 604 L78 528 L28 422 L22 322 L66 246 Z';

export const DEPT_SHAPES: DeptShape[] = [
  {
    slug: 'val-doise',
    code: '95',
    name: "Val-d’Oise",
    d: 'M95 168 L130 62 L288 32 L420 70 L530 116 L606 186 L537 222 L470 244 L400 256 L330 240 L250 222 L168 198 Z',
    labelX: 330, labelY: 146,
  },
  {
    slug: 'seine-et-marne',
    code: '77',
    name: 'Seine-et-Marne',
    d: 'M606 186 L682 150 L774 136 L902 240 L946 398 L932 540 L889 676 L748 810 L660 862 L572 796 L500 690 L492 600 L478 520 L486 444 L516 408 L526 362 L506 322 L534 268 L537 222 Z',
    labelX: 706, labelY: 452,
  },
  {
    slug: 'yvelines',
    code: '78',
    name: 'Yvelines',
    d: 'M95 168 L168 198 L250 222 L330 240 L332 266 L320 300 L326 344 L338 384 L356 412 L332 452 L306 512 L288 570 L262 632 L210 656 L142 604 L78 528 L28 422 L22 322 L66 246 Z',
    labelX: 172, labelY: 398,
  },
  {
    slug: 'essonne',
    code: '91',
    name: 'Essonne',
    d: 'M356 412 L396 420 L420 430 L448 438 L486 444 L478 520 L492 600 L500 690 L462 726 L410 748 L350 730 L300 690 L262 632 L288 570 L306 512 L332 452 Z',
    labelX: 372, labelY: 590,
  },
  {
    slug: 'hauts-de-seine',
    code: '92',
    name: 'Hauts-de-Seine',
    d: 'M330 240 L400 256 L402 278 L406 320 L404 350 L404 392 L396 420 L356 412 L338 384 L326 344 L320 300 L332 266 Z',
    labelX: 352, labelY: 360, chip: true,
  },
  {
    slug: 'seine-saint-denis',
    code: '93',
    name: 'Seine-Saint-Denis',
    d: 'M400 256 L470 244 L537 222 L534 268 L506 322 L470 320 L450 306 L424 292 L402 278 Z',
    labelX: 494, labelY: 266, chip: true,
  },
  {
    slug: 'val-de-marne',
    code: '94',
    name: 'Val-de-Marne',
    d: 'M506 322 L526 362 L516 408 L486 444 L448 438 L420 430 L396 420 L404 392 L404 350 L426 338 L452 324 L470 320 Z',
    labelX: 496, labelY: 394, chip: true,
  },
  {
    slug: 'paris',
    code: '75',
    name: 'Paris',
    d: 'M360 316 A56 34 0 0 1 472 316 A56 34 0 0 1 360 316 Z',
    labelX: 416, labelY: 316, chip: true,
  },
];

/** Cours d’eau principaux, uniquement pour aider à se repérer. */
export const RIVIERES = [
  {
    name: 'Seine',
    d: 'M682 676 C640 640 592 590 554 556 C520 526 496 512 475 502 C452 488 462 440 462 412 C462 384 436 344 416 328 C396 312 380 268 373 250 C352 232 330 222 308 218 C250 212 186 214 136 218 C100 220 66 190 44 174',
  },
  { name: 'Marne', d: 'M858 270 C790 250 710 240 655 240 C610 244 586 290 572 308 C546 330 486 342 444 345 C432 344 428 336 424 330' },
  { name: 'Oise', d: 'M472 66 C452 110 420 150 386 178 C356 202 330 214 308 218' },
];

/** Villes disposant d’une page dédiée, positionnées d’après leurs coordonnées. */
export type CityPoint = { slug: string; name: string; dept: string; x: number; y: number; anchor?: 'start' | 'end' | 'middle'; dy?: number; always?: boolean };

export const CITY_POINTS: CityPoint[] = [
  { slug: 'pontoise', name: 'Pontoise', dept: 'val-doise', x: 308, y: 173, anchor: 'end', dy: -10, always: true },
  { slug: 'argenteuil', name: 'Argenteuil', dept: 'val-doise', x: 373, y: 250, anchor: 'start', dy: -9 },
  { slug: 'meaux', name: 'Meaux', dept: 'seine-et-marne', x: 655, y: 240, anchor: 'start', dy: -10, always: true },
  { slug: 'provins', name: 'Provins', dept: 'seine-et-marne', x: 836, y: 540, anchor: 'middle', dy: -12, always: true },
  { slug: 'fontainebleau', name: 'Fontainebleau', dept: 'seine-et-marne', x: 572, y: 657, anchor: 'middle', dy: 22, always: true },
  { slug: 'versailles', name: 'Versailles', dept: 'yvelines', x: 321, y: 357, anchor: 'end', dy: 4, always: true },
  { slug: 'saint-germain-en-laye', name: 'Saint-Germain-en-Laye', dept: 'yvelines', x: 305, y: 287, anchor: 'end', dy: -8 },
  { slug: 'le-vesinet', name: 'Le Vésinet', dept: 'yvelines', x: 323, y: 291, anchor: 'end', dy: 12 },
  { slug: 'etampes', name: 'Étampes', dept: 'essonne', x: 335, y: 634, anchor: 'middle', dy: 22, always: true },
  { slug: 'rueil-malmaison', name: 'Rueil-Malmaison', dept: 'hauts-de-seine', x: 343, y: 303, anchor: 'end', dy: -6 },
  { slug: 'neuilly-sur-seine', name: 'Neuilly-sur-Seine', dept: 'hauts-de-seine', x: 382, y: 296, anchor: 'end', dy: -14 },
  { slug: 'boulogne-billancourt', name: 'Boulogne-Billancourt', dept: 'hauts-de-seine', x: 370, y: 333, anchor: 'end', dy: 14 },
  { slug: 'montreuil', name: 'Montreuil', dept: 'seine-saint-denis', x: 458, y: 312, anchor: 'start', dy: -8 },
  { slug: 'vincennes', name: 'Vincennes', dept: 'val-de-marne', x: 456, y: 324, anchor: 'start', dy: 12 },
  { slug: 'nogent-sur-marne', name: 'Nogent-sur-Marne', dept: 'val-de-marne', x: 476, y: 333, anchor: 'start', dy: 4 },
  { slug: 'saint-maur-des-fosses', name: 'Saint-Maur-des-Fossés', dept: 'val-de-marne', x: 481, y: 360, anchor: 'start', dy: 12 },
];
