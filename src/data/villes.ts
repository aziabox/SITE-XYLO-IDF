/**
 * Villes faisant l’objet d’une page dédiée.
 *
 * Principe : une page par ville uniquement lorsqu’il existe un contexte bâti
 * réellement spécifique à décrire. Aucune page n’est générée en masse, aucun
 * texte n’est dupliqué d’une commune à l’autre, et aucune donnée d’infestation
 * locale n’est avancée.
 */

export type Ville = {
  slug: string;          // segment d’URL : /traitement-xylophages-<slug>
  name: string;
  dept: string;          // slug du département
  cp: string;
  /** Résumé factuel, utilisé en meta description et en chapô. */
  intro: string;
  /** Réponse directe propre à la commune, exploitée en encadré et par les moteurs génératifs. */
  answer: string;
  /** Deux à trois paragraphes de contexte local, propres à la commune. */
  contexte: string[];
  /** Types de bâtiments réellement présents dans la commune. */
  habitat: string[];
  /** Ouvrages bois à contrôler en priorité compte tenu de ce bâti. */
  zones: string[];
  faq: { q: string; a: string }[];
};

export const VILLES: Ville[] = [
  {
    slug: 'versailles',
    name: 'Versailles',
    dept: 'yvelines',
    cp: '78000',
    intro:
      "Insectes xylophages à Versailles : hôtels particuliers des quartiers Saint-Louis et Notre-Dame, combles anciens, planchers à la française et boiseries d’époque.",
    answer:
      "À Versailles, le bois est souvent <strong>structurel et décoratif à la fois</strong> : charpentes de comble, planchers à la française, lambris et parquets d’origine. La contrainte n’est donc pas seulement technique, elle est aussi esthétique — d’où les essais préalables et les produits incolores sur bois vus. Les <strong>combles remaniés</strong> constituent la principale limite d’accès.",
    contexte: [
      "Versailles possède un bâti ancien d’une densité rare en Île-de-France. Les quartiers Saint-Louis et Notre-Dame, construits pour loger la cour et l’administration royale, alignent des hôtels particuliers et des maisons de ville des XVIIᵉ et XVIIIᵉ siècles dont la structure repose largement sur le bois : charpentes de comble de forte section, planchers à la française à solives apparentes, escaliers, lambris et parquets d’origine.",
      "Cette configuration impose une approche différente de celle d’un pavillon courant. Le bois n’est pas seulement porteur, il est aussi visible, et souvent d’une qualité de mise en œuvre qui ne se remplace pas. Un traitement appliqué sans précaution peut tacher un lambris, faire remonter une résine sous une peinture ancienne ou marquer un parquet ciré. Nous procédons donc par essais préalables sur zone peu visible et privilégions, sur les bois vus, des produits incolores et des injections discrètes plutôt qu’une application généralisée en surface.",
      "L’autre particularité versaillaise tient aux combles. Beaucoup ont été aménagés au fil du temps, parfois plusieurs fois, ce qui a rendu une partie de la charpente inaccessible. Un doublage récent peut masquer un pied de chevron dégradé depuis longtemps. Lorsque l’accès est limité, nous le signalons explicitement dans le rapport plutôt que de conclure sur ce que nous n’avons pas pu voir.",
    ],
    habitat: [
      "Hôtels particuliers et maisons de ville des XVIIᵉ et XVIIIᵉ siècles",
      "Immeubles de rapport du XIXᵉ siècle à planchers bois",
      "Maisons de meulière et pavillons de la fin du XIXᵉ siècle (Montreuil, Porchefontaine)",
      "Copropriétés du XXᵉ siècle et constructions récentes",
    ],
    zones: [
      "Charpentes de comble et pieds de chevron en rive",
      "Planchers à la française et solives apparentes",
      "Parquets anciens, lambourdes et boiseries",
      "Escaliers bois et menuiseries d’époque",
    ],
    faq: [
      {
        q: "Une maison en secteur patrimonial peut-elle être traitée normalement ?",
        a: "Le traitement intérieur du bois ne modifie pas l’aspect extérieur du bâtiment et ne relève donc pas, en principe, d’une autorisation d’urbanisme. En revanche, si l’intervention implique la dépose ou le remplacement d’éléments visibles, ou si le bâtiment est protégé, une consultation préalable des services compétents est nécessaire. Nous vous le signalons lors du diagnostic.",
      },
      {
        q: "Peut-on traiter sans déposer les boiseries ?",
        a: "Dans la majorité des cas oui. L’injection se fait par de petits perçages réalisés dans des zones peu visibles, refermés ensuite. La dépose n’est envisagée que lorsque l’arrière d’un lambris doit impérativement être atteint, ou lorsqu’une pièce doit être remplacée.",
      },
    ],
  },
  {
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    dept: 'hauts-de-seine',
    cp: '92100',
    intro:
      "Traitement des insectes xylophages à Boulogne-Billancourt : immeubles des années 1920-1930, maisons d’architecte, copropriétés et anciens bâtiments industriels reconvertis.",
    answer:
      "À Boulogne-Billancourt, l’essentiel du bâti date des <strong>années 1920-1930</strong> : planchers mixtes béton et bois, parquets posés sur lambourdes noyées dans une forme. Ce sont ces <strong>lambourdes</strong>, en contact avec un support qui peut rester humide, qu’il faut contrôler — souvent avant le parquet lui-même.",
    contexte: [
      "Boulogne-Billancourt a été largement bâtie entre les deux guerres. La ville concentre un ensemble remarquable d’immeubles et de maisons de cette période, avec des planchers qui mêlent souvent béton et bois : solives conservées dans les parties anciennes, planchers rapportés lors des surélévations, parquets posés sur lambourdes noyées dans une forme. Ce sont précisément ces lambourdes, en contact avec un support qui peut rester humide, qui demandent un contrôle.",
      "La reconversion des anciens terrains industriels a par ailleurs produit un tissu bâti très récent, où les questions xylophages se posent différemment : bois lamellé-collé, ossatures et bardages, terrasses bois. Ces ouvrages sont généralement traités à la fabrication, mais leurs coupes et leurs zones exposées aux intempéries méritent une surveillance, notamment sur les parties extérieures.",
      "Enfin, dans les copropriétés boulonnaises, l’organisation du traitement compte autant que la technique. Comble commun, planchers entre lots, menuiseries de façade : la répartition entre parties communes et privatives détermine qui décide et qui paie. Notre rapport distingue systématiquement les deux afin que le syndic puisse instruire le dossier sans ambiguïté.",
    ],
    habitat: [
      "Immeubles Art déco et immeubles de rapport des années 1920-1930",
      "Maisons d’architecte du mouvement moderne",
      "Copropriétés d’après-guerre et des années 1960-1970",
      "Programmes récents sur les anciens terrains industriels",
    ],
    zones: [
      "Lambourdes de parquet et solives résiduelles",
      "Charpentes de comble et bois de rive d’immeubles",
      "Menuiseries extérieures, volets et garde-corps bois",
      "Terrasses, bardages et ouvrages bois extérieurs récents",
    ],
    faq: [
      {
        q: "Un immeuble des années 1930 peut-il être concerné ?",
        a: "Oui. L’âge n’est pas un critère de protection : ce qui compte, c’est la nature du bois, son humidité et son accessibilité pour les insectes. Un plancher sur solives de sapin, un comble peu ventilé ou une lambourde humidifiée par une reprise d’étanchéité suffisent à créer des conditions favorables.",
      },
      {
        q: "Traitez-vous les terrasses et bardages bois ?",
        a: "Nous intervenons sur ces ouvrages lorsqu’un insecte xylophage y est identifié, mais il faut savoir qu’en extérieur, la dégradation vient bien plus souvent de l’humidité et des champignons que des insectes. Le diagnostic commence donc par déterminer l’origine réelle du désordre.",
      },
    ],
  },
  {
    slug: 'saint-germain-en-laye',
    name: 'Saint-Germain-en-Laye',
    dept: 'yvelines',
    cp: '78100',
    intro:
      "Diagnostic et traitement des insectes xylophages à Saint-Germain-en-Laye : maisons anciennes du centre, propriétés en lisière de forêt, charpentes de comble et planchers bois.",
    answer:
      "À Saint-Germain-en-Laye, deux situations dominent : le <strong>centre ancien</strong>, où planchers sur solives et charpentes ont été partiellement enfermés par des aménagements successifs, et les <strong>propriétés en lisière de forêt</strong>, dont les dépendances non chauffées sont rarement inspectées.",
    contexte: [
      "Le centre ancien de Saint-Germain-en-Laye conserve un ensemble de maisons de ville et d’hôtels particuliers dont la structure porteuse associe maçonnerie et bois. Les planchers y sont fréquemment restés sur solives, et les combles abritent des charpentes anciennes que les aménagements successifs ont partiellement enfermées. L’accès à ces bois est souvent le premier obstacle d’un diagnostic sérieux.",
      "La ville est par ailleurs bordée par la forêt domaniale, et une part importante du bâti résidentiel se situe à sa lisière. Cette proximité n’est pas un facteur d’infestation en soi : les insectes xylophages du bâtiment ne migrent pas depuis la forêt vers les maisons de manière massive. Elle augmente simplement la probabilité qu’un adulte en vol rencontre une pièce de bois non protégée, en particulier une charpente accessible par une ouverture de comble restée ouverte en saison.",
      "Dans les propriétés anciennes, nous portons attention aux dépendances : communs, écuries reconverties, garages et abris. Ce sont des volumes peu chauffés, rarement inspectés, dont les bois n’ont souvent jamais été traités, et qui peuvent entretenir une population à proximité immédiate du bâtiment principal.",
    ],
    habitat: [
      "Maisons de ville et hôtels particuliers du centre ancien",
      "Propriétés et villas en lisière de forêt domaniale",
      "Maisons de meulière et pavillonnaire de la fin du XIXᵉ siècle",
      "Copropriétés récentes et logements collectifs",
    ],
    zones: [
      "Charpentes de comble partiellement enfermées",
      "Planchers sur solives et parquets anciens",
      "Bois des dépendances et communs",
      "Menuiseries et volets exposés",
    ],
    faq: [
      {
        q: "Vivre près de la forêt augmente-t-il le risque ?",
        a: "La proximité d’un massif ne provoque pas d’infestation par elle-même. Les insectes qui dégradent le bois de construction se développent dans le bois mis en œuvre, pas dans l’arbre sur pied. Ce que la proximité change, c’est la présence d’adultes en vol en saison : une charpente accessible et non protégée a donc statistiquement plus de chances d’être rencontrée.",
      },
      {
        q: "Faut-il inspecter les dépendances en même temps que la maison ?",
        a: "Nous le recommandons lorsqu’elles sont accolées ou proches. Une charpente de garage ou d’ancien commun attaquée constitue une source de recolonisation permanente. Traiter la maison sans traiter la dépendance revient souvent à recommencer quelques années plus tard.",
      },
    ],
  },
  {
    slug: 'saint-maur-des-fosses',
    name: 'Saint-Maur-des-Fossés',
    dept: 'val-de-marne',
    cp: '94100',
    intro:
      "Traitement des insectes xylophages à Saint-Maur-des-Fossés : villas de la boucle de la Marne, maisons de meulière, débords de toiture et ouvrages bois extérieurs.",
    answer:
      "À Saint-Maur-des-Fossés, le bois est très présent <strong>en façade</strong> : débords de toiture, chevrons apparents, balcons et marquises des villas de la boucle de la Marne. La dégradation y est le plus souvent <strong>mixte</strong> — humidité, champignon, puis insecte — et traiter sans rétablir la protection ne règle qu’une partie du problème.",
    contexte: [
      "Saint-Maur-des-Fossés s’inscrit dans une boucle de la Marne qui a déterminé son urbanisation. La ville s’est développée à partir de la fin du XIXᵉ siècle comme lieu de villégiature, et elle en a gardé un bâti caractéristique : villas de meulière, maisons à décors, débords de toiture largement dépassants, chevrons apparents, balcons et marquises. Le bois y est très présent en façade, donc très exposé.",
      "Cette exposition change la logique du diagnostic. En extérieur, une dégradation du bois relève bien plus souvent de l’humidité et des champignons que des insectes seuls. On rencontre fréquemment des situations mixtes : une finition vieillie laisse passer l’eau, le bois s’humidifie, un champignon s’installe, et la grosse vrillette trouve alors des conditions favorables. Traiter l’insecte sans rétablir la protection du bois ne règle qu’une partie du problème, et nous le disons clairement.",
      "Les secteurs les plus bas de la boucle appellent par ailleurs une attention aux planchers bas et aux vides sanitaires. Une solive d’about engagée dans un mur qui reste humide constitue un point sensible classique, difficile à observer sans démontage partiel, mais qu’un sondage bien placé permet souvent de qualifier.",
    ],
    habitat: [
      "Villas et maisons de villégiature de la fin du XIXᵉ et du début du XXᵉ siècle",
      "Maisons de meulière à débords et décors bois",
      "Pavillonnaire des années 1920 à 1960",
      "Petites copropriétés et immeubles récents",
    ],
    zones: [
      "Débords de toiture, chevrons apparents et bois de rive",
      "Balcons, marquises et lambrequins",
      "Planchers bas et solives d’about sur vide sanitaire",
      "Charpentes de comble de villas anciennes",
    ],
    faq: [
      {
        q: "Mes chevrons apparents se dégradent : est-ce forcément un insecte ?",
        a: "Pas nécessairement. Un bois extérieur qui grisaille, se fissure et s’effrite en surface subit d’abord l’action de l’eau et des champignons. Des trous de sortie nets et de la vermoulure fraîche orientent en revanche vers un insecte. Les deux peuvent coexister, et c’est souvent le cas sur ces maisons.",
      },
      {
        q: "Peut-on traiter un débord de toiture sans échafaudage ?",
        a: "Cela dépend de la hauteur et de la configuration. Sur une maison de plain-pied ou un débord accessible, une nacelle ou un échafaudage roulant suffit. Sur une villa à étages, un échafaudage est généralement nécessaire, et ce poste est intégré au devis de manière transparente.",
      },
    ],
  },
  {
    slug: 'montreuil',
    name: 'Montreuil',
    dept: 'seine-saint-denis',
    cp: '93100',
    intro:
      "Diagnostic et traitement des insectes xylophages à Montreuil : maisons de faubourg, anciens ateliers reconvertis, pavillonnaire et immeubles à planchers bois.",
    answer:
      "À Montreuil, les <strong>anciens ateliers reconvertis</strong> appellent une inspection spécifique : charpentes de grande portée dont les efforts se concentrent sur peu d’appuis, et bois d’origine jamais traités. Dans les maisons de faubourg, le sujet est plutôt celui des <strong>planchers sur solives</strong> et des bois enfermés dans des doublages successifs.",
    contexte: [
      "Montreuil présente un tissu bâti très composite, hérité de son passé maraîcher puis industriel. On y trouve des maisons de faubourg construites au coup par coup, des pavillons de l’entre-deux-guerres, des immeubles de rapport et un grand nombre d’anciens ateliers transformés en logements, bureaux ou espaces de travail. Chacun de ces types pose une question différente au bois.",
      "Les anciens ateliers méritent une mention particulière. Leurs charpentes sont souvent de grande portée, avec des assemblages et des appuis qui concentrent les efforts sur peu de points. Une dégradation localisée au droit d’un appui ou sur un about de poutre y a des conséquences structurelles plus rapides que dans une charpente courante. Ces bois sont généralement d’origine et n’ont jamais été traités.",
      "Dans les maisons de faubourg, l’enjeu est différent : planchers sur solives, cloisons à pans de bois hourdés, escaliers bois. Ces structures ont été remaniées au fil des décennies, parfois sans cohérence, et l’on rencontre des bois neufs posés au contact de bois anciens attaqués. Le diagnostic consiste alors autant à comprendre l’histoire du bâtiment qu’à identifier l’insecte.",
    ],
    habitat: [
      "Maisons de faubourg et maisons ouvrières à planchers bois",
      "Anciens ateliers et locaux industriels reconvertis",
      "Pavillonnaire de l’entre-deux-guerres",
      "Immeubles de rapport et copropriétés récentes",
    ],
    zones: [
      "Charpentes d’atelier, fermes de grande portée et sheds",
      "Abouts de poutre et zones d’appui",
      "Planchers sur solives et escaliers bois",
      "Cloisons à pans de bois et bois enfermés dans les doublages",
    ],
    faq: [
      {
        q: "Un loft en ancien atelier demande-t-il un diagnostic particulier ?",
        a: "Oui. L’inspection y cible en priorité les appuis, les abouts de poutre et les points d’infiltration de couverture, parce que ce sont les endroits où une dégradation a le plus de conséquences. La charpente étant souvent apparente, une grande partie de l’observation peut se faire sans démontage, ce qui est un avantage.",
      },
      {
        q: "Que faire si un bois attaqué a été enfermé dans un doublage ?",
        a: "Il faut pouvoir l’atteindre. Nous réalisons des ouvertures ponctuelles, limitées et refermées, aux endroits que le diagnostic désigne comme les plus significatifs. Traiter par-dessus un doublage sans atteindre le bois n’a aucun effet et donne une fausse sécurité.",
      },
    ],
  },
  {
    slug: 'provins',
    name: 'Provins',
    dept: 'seine-et-marne',
    cp: '77160',
    intro:
      "Traitement des insectes xylophages à Provins : maisons à pans de bois de la ville haute, charpentes médiévales, planchers anciens et caves voûtées.",
    answer:
      "À Provins, le bois <strong>est la structure</strong> : poteaux, sablières, décharges et remplissages des maisons à pans de bois. Les traces d’attaques anciennes y sont quasi systématiques, et l’enjeu du diagnostic est d’abord de <strong>distinguer l’ancien de l’actif</strong> avant d’engager quoi que ce soit sur un patrimoine irremplaçable.",
    contexte: [
      "Provins conserve un ensemble de maisons à pans de bois et de charpentes anciennes qui constitue un cas particulier en Île-de-France. Ici, le bois n’est pas un composant parmi d’autres : il est la structure même d’une partie du bâti. Poteaux, sablières, décharges, remplissages, planchers et charpentes forment un système dont chaque élément participe à la stabilité de l’ensemble.",
      "Cette situation impose une extrême prudence sur deux points. D’abord sur le diagnostic : dans un bois ancien, les traces d’attaques passées sont très fréquentes et ne signifient pas qu’une infestation est en cours. Conclure trop vite à une attaque active conduit à des travaux inutiles sur un patrimoine fragile. Ensuite sur la méthode : les produits, les perçages et les dépose-repose doivent être compatibles avec la conservation de pièces qui ne se remplacent pas à l’identique.",
      "Nous intervenons donc à Provins dans une logique de conservation : identifier précisément, distinguer l’ancien de l’actif, limiter l’intervention à ce qui est justifié, et coordonner le travail avec le maître d’œuvre ou l’architecte lorsque le bâtiment est protégé ou situé dans le périmètre patrimonial.",
    ],
    habitat: [
      "Maisons à pans de bois de la ville haute et du centre ancien",
      "Charpentes anciennes de forte section, en chêne",
      "Maisons de bourg et fermes des environs",
      "Pavillonnaire et constructions récentes en périphérie",
    ],
    zones: [
      "Poteaux, sablières et pièces de pan de bois",
      "Abouts de poutre engagés dans la maçonnerie",
      "Charpentes de comble et arbalétriers",
      "Planchers à la française et solives apparentes",
    ],
    faq: [
      {
        q: "Une maison à pans de bois est-elle plus exposée ?",
        a: "Elle comporte davantage de bois, et une partie de ce bois est en contact avec l’extérieur ou avec un remplissage qui peut retenir l’humidité. Cela crée des points sensibles, en particulier en pied de poteau et au droit des sablières basses. Mais un pan de bois sain, sec et correctement entretenu n’est pas condamné à être attaqué.",
      },
      {
        q: "Le bâtiment est protégé : pouvez-vous intervenir ?",
        a: "Nous réalisons le diagnostic et établissons les préconisations. Les travaux sur un immeuble inscrit ou classé, ou situé en abords, relèvent de procédures spécifiques et de l’avis des services compétents. Nous travaillons alors en coordination avec le maître d’œuvre chargé du dossier.",
      },
    ],
  },
  {
    slug: 'meaux',
    name: 'Meaux',
    dept: 'seine-et-marne',
    cp: '77100',
    intro:
      "Diagnostic et traitement des insectes xylophages à Meaux : bâti ancien du centre, maisons de ville, fermes briardes des environs et pavillonnaire.",
    answer:
      "À Meaux, le centre ancien pose la question des <strong>planchers bois et des charpentes de chêne remaniées</strong>, tandis que les fermes briardes alentour posent celle de l’ancienneté des attaques. La proximité de la Marne ajoute un point de vigilance sur les <strong>planchers bas et les solives d’about</strong>.",
    contexte: [
      "Meaux associe un centre ancien dense, organisé autour de la cité épiscopale, et une couronne pavillonnaire beaucoup plus récente. Dans le centre, les immeubles et maisons de ville reposent fréquemment sur des planchers bois et abritent des charpentes anciennes en chêne, souvent remaniées lors des aménagements de combles.",
      "Autour de la ville, le paysage bâti devient briard : fermes, longères, granges et dépendances à charpente de chêne de forte section. Ces bâtiments posent une question récurrente, celle de la distinction entre attaque ancienne et attaque active. Un chêne de deux siècles porte presque toujours des traces de piqûres ; l’enjeu du diagnostic est de déterminer si quelque chose s’y passe encore aujourd’hui.",
      "La vallée de la Marne ajoute un paramètre d’humidité pour les constructions les plus proches de l’eau. Planchers bas, solives d’about et pieds de charpente y méritent un contrôle spécifique, au même titre que le comble.",
    ],
    habitat: [
      "Immeubles et maisons de ville du centre ancien",
      "Fermes briardes, longères et granges des communes voisines",
      "Pavillonnaire des années 1960 à aujourd’hui",
      "Copropriétés et logements collectifs",
    ],
    zones: [
      "Charpentes de chêne de forte section",
      "Entraits, sablières et abouts engagés dans la maçonnerie",
      "Planchers bois et solives d’étage",
      "Bois des granges et dépendances",
    ],
    faq: [
      {
        q: "Comment savoir si l’attaque d’une vieille charpente est terminée ?",
        a: "On recherche des indices convergents : couleur des trous et de la vermoulure, réapparition de sciure fraîche après nettoyage d’une zone témoin, comportement du bois au sondage, présence d’adultes en saison. Aucun de ces indices ne suffit seul ; c’est leur convergence, et parfois un contrôle différé, qui permet de conclure.",
      },
      {
        q: "Intervenez-vous dans les communes autour de Meaux ?",
        a: "Oui, sur l’ensemble du nord de la Seine-et-Marne. Le déplacement vers les communes rurales est intégré normalement à notre organisation ; le délai vous est indiqué à la prise de rendez-vous.",
      },
    ],
  },
  {
    slug: 'fontainebleau',
    name: 'Fontainebleau',
    dept: 'seine-et-marne',
    cp: '77300',
    intro:
      "Traitement des insectes xylophages à Fontainebleau : hôtels particuliers, villas de villégiature, maisons en lisière de forêt et charpentes anciennes.",
    answer:
      "À Fontainebleau, les toitures à <strong>lucarnes, noues et arêtiers</strong> des villas de villégiature multiplient les points singuliers où une infiltration peut s’installer discrètement. Un bois ainsi humidifié devient favorable à la grosse vrillette : la question à traiter est alors la <strong>cause</strong>, autant que l’insecte.",
    contexte: [
      "Fontainebleau s’est construite autour du château et de la forêt, et son bâti en porte la marque : hôtels particuliers, maisons de maître, villas de villégiature du Second Empire et de la Belle Époque, souvent dotées de charpentes complexes, de combles à lucarnes et d’ouvrages bois décoratifs en façade.",
      "Ces toitures à multiples décrochements multiplient les points singuliers : noues, arêtiers, lucarnes, chéneaux encaissés. Ce sont autant d’endroits où une infiltration peut s’installer discrètement et humidifier durablement une pièce de charpente. Un bois ainsi humidifié devient favorable à la grosse vrillette, et la question à traiter n’est alors pas seulement l’insecte, mais la cause qui a rendu le bois vulnérable.",
      "La proximité du massif forestier explique par ailleurs la présence fréquente de dépendances, abris et ouvrages bois extérieurs dans les propriétés. Nous les intégrons au périmètre du diagnostic lorsqu’ils sont proches du bâtiment principal.",
    ],
    habitat: [
      "Hôtels particuliers et maisons de maître du centre",
      "Villas de villégiature du Second Empire et de la Belle Époque",
      "Maisons et propriétés en lisière de forêt",
      "Pavillonnaire et copropriétés récentes",
    ],
    zones: [
      "Charpentes à lucarnes, noues et arêtiers",
      "Pieds de chevron et bois de rive au droit des chéneaux",
      "Ouvrages bois décoratifs de façade",
      "Dépendances, abris et communs",
    ],
    faq: [
      {
        q: "Une toiture complexe complique-t-elle le diagnostic ?",
        a: "Elle demande plus de temps, car les points singuliers doivent être inspectés un par un. En revanche elle donne souvent des indices utiles : une trace d’humidité au droit d’une noue explique une dégradation localisée et oriente immédiatement l’examen.",
      },
      {
        q: "Traitez-vous aussi la cause de l’humidité ?",
        a: "Nous identifions et signalons la cause, mais la reprise de couverture ou de zinguerie relève d’un couvreur. Un traitement appliqué sur un bois qui continue d’être mouillé n’a pas d’effet durable : nous préférons le dire et coordonner l’ordre des interventions.",
      },
    ],
  },
  {
    slug: 'le-vesinet',
    name: 'Le Vésinet',
    dept: 'yvelines',
    cp: '78110',
    intro:
      "Diagnostic et traitement des insectes xylophages au Vésinet : villas de la ville-parc, ouvrages bois décoratifs, charpentes de comble et dépendances.",
    answer:
      "Au Vésinet, ce qui fait la valeur des villas de la ville-parc — <strong>débords, chevrons moulurés, consoles, vérandas</strong> — est aussi ce qui est le plus exposé. Les parcelles boisées entretiennent par ailleurs une hygrométrie élevée qui ralentit le séchage des façades nord.",
    contexte: [
      "Le Vésinet est une ville-parc conçue au XIXᵉ siècle, dont l’identité repose sur des villas implantées dans de grandes parcelles arborées. Ces maisons, construites pour l’essentiel entre 1860 et 1930, font un usage important du bois décoratif : débords de toiture, chevrons moulurés, épis, balcons, vérandas, pans de bois d’ornement.",
      "Ces éléments sont à la fois ce qui fait la valeur de ces maisons et ce qui est le plus exposé. Un chevron apparent, une console ou un lambrequin subissent directement la pluie et le soleil, et leurs finitions vieillissent plus vite que celles des ouvrages abrités. Lorsque la protection est entamée, l’eau pénètre, le bois s’humidifie, et le terrain devient favorable à une dégradation combinée : champignon d’abord, insecte ensuite.",
      "Les parcelles boisées ajoutent un second point d’attention. Les arbres proches maintiennent une hygrométrie plus élevée, ralentissent le séchage des façades nord et laissent tomber des feuilles dans les chéneaux, ce qui provoque des débordements répétés. Nous regardons donc l’environnement immédiat autant que le bois lui-même.",
    ],
    habitat: [
      "Villas de la ville-parc, construites entre 1860 et 1930",
      "Maisons à ossature et décors bois",
      "Dépendances, communs et vérandas anciennes",
      "Constructions récentes insérées dans le tissu existant",
    ],
    zones: [
      "Débords de toiture, chevrons moulurés et consoles",
      "Balcons, vérandas et lambrequins",
      "Charpentes de comble et pieds de ferme",
      "Bois des dépendances et abris de jardin",
    ],
    faq: [
      {
        q: "Peut-on conserver des décors bois anciens attaqués ?",
        a: "Souvent oui, si la section saine restante est suffisante. La décision se prend pièce par pièce après sondage. Certaines pièces se traitent et se conservent, d’autres doivent être refaites à l’identique par un menuisier. Nous indiquons clairement lesquelles dans le rapport.",
      },
      {
        q: "Les arbres autour de la maison favorisent-ils les insectes du bois ?",
        a: "Pas directement : les insectes qui attaquent le bois de construction ne viennent pas des arbres sur pied. En revanche, l’ombrage et l’humidité qu’ils entretiennent ralentissent le séchage du bois de façade, et c’est cette humidité qui peut rendre certains ouvrages vulnérables.",
      },
    ],
  },
  {
    slug: 'nogent-sur-marne',
    name: 'Nogent-sur-Marne',
    dept: 'val-de-marne',
    cp: '94130',
    intro:
      "Traitement des insectes xylophages à Nogent-sur-Marne : villas des bords de Marne, maisons de meulière, débords de toiture et planchers bois.",
    answer:
      "À Nogent-sur-Marne, le bois se répartit en deux familles au comportement opposé : <strong>abrité et sec</strong> à l’intérieur (charpentes, planchers sur solives), <strong>exposé</strong> en façade (débords, balcons, décors). Dans les rues proches de la Marne, les planchers bas et les vides sanitaires méritent un contrôle spécifique.",
    contexte: [
      "Nogent-sur-Marne a été, à partir de la fin du XIXᵉ siècle, l’un des lieux de villégiature des bords de Marne. La ville a conservé de cette époque des villas et des maisons de meulière caractéristiques, avec de larges débords de toiture, des chevrons apparents, des balcons et des ouvrages bois décoratifs en façade.",
      "Le bois de ces maisons se répartit en deux familles aux comportements très différents. À l’intérieur, les charpentes de comble et les planchers sur solives sont abrités et secs : lorsqu’une attaque s’y développe, elle relève généralement d’insectes du bois sec, capricorne ou petite vrillette. À l’extérieur, les débords et décors subissent l’alternance pluie-soleil : on y rencontre des dégradations mixtes, associant humidité, champignon et parfois grosse vrillette.",
      "La proximité de la rivière ajoute une attention aux niveaux bas. Dans les rues les plus proches de la Marne, planchers bas, vides sanitaires et solives d’about méritent un contrôle spécifique, car l’humidité y est structurellement plus élevée.",
    ],
    habitat: [
      "Villas de villégiature et maisons de meulière de la fin du XIXᵉ siècle",
      "Immeubles anciens et copropriétés du XXᵉ siècle",
      "Pavillonnaire de l’entre-deux-guerres",
      "Constructions récentes en cœur de ville",
    ],
    zones: [
      "Débords de toiture et chevrons apparents",
      "Charpentes de comble et planchers sur solives",
      "Planchers bas et solives d’about près de la Marne",
      "Balcons, marquises et menuiseries extérieures",
    ],
    faq: [
      {
        q: "Un vide sanitaire humide met-il la maison en danger ?",
        a: "Il crée des conditions favorables pour les insectes qui recherchent un bois humide, et surtout pour les champignons. Le premier réflexe n’est pas de traiter mais de rétablir une ventilation correcte du vide sanitaire, puis de contrôler l’état des solives basses.",
      },
      {
        q: "Peut-on inspecter un plancher bas sans tout démonter ?",
        a: "Oui dans la plupart des cas. Un accès par une trappe existante, l’observation depuis le vide sanitaire et quelques sondages bien placés donnent déjà une image fiable. Une dépose partielle n’est envisagée que si ces éléments laissent un doute sérieux.",
      },
    ],
  },
  {
    slug: 'rueil-malmaison',
    name: 'Rueil-Malmaison',
    dept: 'hauts-de-seine',
    cp: '92500',
    intro:
      "Diagnostic et traitement des insectes xylophages à Rueil-Malmaison : maisons de meulière des coteaux, bâti ancien, pavillonnaire et copropriétés.",
    answer:
      "À Rueil-Malmaison, les <strong>maisons de meulière des coteaux</strong> concentrent l’attention : leurs murs épais peuvent retenir l’humidité, et c’est à la jonction entre la sablière et la maçonnerie que les désordres s’installent. Les dépendances des propriétés arborées sont le second point à ne pas négliger.",
    contexte: [
      "Rueil-Malmaison présente un bâti étagé entre les bords de Seine et les coteaux boisés du Mont Valérien et de la Jonchère. Cette topographie a produit un habitat très varié : maisons de meulière de la fin du XIXᵉ siècle sur les coteaux, pavillonnaire d’entre-deux-guerres, grandes propriétés arborées, et copropriétés plus récentes en cœur de ville.",
      "Les maisons de meulière méritent une attention particulière. Leurs murs épais, capables de retenir l’humidité, reçoivent directement les sablières et les pieds de ferme de la charpente. Lorsque la ventilation du comble est insuffisante, c’est à cette jonction bois-maçonnerie que l’humidité s’installe, et c’est là que l’on rencontre le plus souvent des attaques de grosse vrillette ou des dégradations associées à un champignon.",
      "Sur les coteaux, les propriétés arborées posent la question des dépendances et des ouvrages bois extérieurs. Un abri, un ancien garage ou une pergola attaqués entretiennent une population à proximité immédiate du bâtiment principal, et leur prise en compte évite d’avoir à recommencer quelques années plus tard.",
    ],
    habitat: [
      "Maisons de meulière des coteaux, fin XIXᵉ et début XXᵉ siècle",
      "Pavillonnaire de l’entre-deux-guerres et d’après-guerre",
      "Grandes propriétés arborées et dépendances",
      "Copropriétés et programmes récents",
    ],
    zones: [
      "Sablières et pieds de ferme au contact de la meulière",
      "Charpentes de comble peu ventilées",
      "Planchers bas et solives d’about",
      "Dépendances, abris et ouvrages bois de jardin",
    ],
    faq: [
      {
        q: "Pourquoi la meulière est-elle souvent évoquée ?",
        a: "Ce n’est pas la pierre qui attire les insectes, c’est le comportement du mur. Un mur épais et peu ventilé peut conserver de l’humidité, et le bois qui repose dessus s’humidifie à son tour. Cette humidité, et non la meulière elle-même, crée les conditions favorables à certaines attaques.",
      },
      {
        q: "Faut-il ventiler le comble avant de traiter ?",
        a: "Si l’humidité du bois est en cause, oui. Rétablir une ventilation correcte fait partie des préconisations, et elle conditionne souvent la durabilité du résultat. Un traitement appliqué dans un comble qui reste humide protège le bois, mais ne supprime pas la cause du désordre.",
      },
    ],
  },
  {
    slug: 'argenteuil',
    name: 'Argenteuil',
    dept: 'val-doise',
    cp: '95100',
    intro:
      "Traitement des insectes xylophages à Argenteuil : maisons des coteaux, pavillonnaire de l’entre-deux-guerres, bâti ancien et copropriétés.",
    answer:
      "À Argenteuil, le <strong>pavillonnaire de l’entre-deux-guerres</strong> constitue l’essentiel du sujet : charpentes en sapin de sections modestes, non traitées à l’origine, dans des combles bas et peu ventilés. Sur les coteaux, le bâti ancien pose plutôt la question de l’<strong>ancienneté des traces</strong>.",
    contexte: [
      "Argenteuil s’étend des bords de Seine aux coteaux, et son bâti raconte cette progression : anciennes maisons de bourg et maisons de vigne sur les hauteurs, lotissements pavillonnaires denses développés entre les deux guerres, grands ensembles d’après-guerre, et copropriétés plus récentes.",
      "Le pavillonnaire de l’entre-deux-guerres constitue le gros du sujet. Ces maisons partagent des caractéristiques qui comptent pour le bois : charpentes en sapin de sections modestes, combles bas souvent utilisés en rangement, ventilation limitée, et bois qui n’ont pas été traités à la construction. Une attaque de capricorne peut y progresser des années sans signe visible depuis le logement.",
      "Sur les coteaux, le bâti ancien pose des questions différentes : charpentes de chêne, planchers à solives, dépendances et anciennes caves. L’enjeu y est souvent de distinguer les traces d’attaques anciennes, très fréquentes dans un chêne de cet âge, d’une infestation réellement active aujourd’hui.",
    ],
    habitat: [
      "Pavillonnaire dense de l’entre-deux-guerres",
      "Bâti ancien et anciennes maisons de vigne des coteaux",
      "Immeubles et copropriétés d’après-guerre",
      "Programmes récents en bord de Seine",
    ],
    zones: [
      "Charpentes de comble en sapin, peu ventilées",
      "Planchers sur solives du bâti ancien",
      "Bois enfermés dans les combles aménagés",
      "Dépendances, caves et annexes",
    ],
    faq: [
      {
        q: "Ma maison date des années 1930 : dois-je m’inquiéter ?",
        a: "Il n’y a pas lieu de s’inquiéter par principe, mais ce type de maison mérite un contrôle de comble, parce que sa charpente en sapin n’a généralement pas été traitée à la construction et que le volume est souvent peu ventilé. Une inspection permet de savoir où l’on en est, sans engager quoi que ce soit.",
      },
      {
        q: "Un comble aménagé peut-il être diagnostiqué ?",
        a: "Partiellement. L’aménagement masque une partie de la charpente, en particulier les pieds de chevron et les bois de rive. Nous inspectons ce qui est accessible, réalisons si besoin des ouvertures ponctuelles, et indiquons explicitement dans le rapport ce que nous n’avons pas pu voir.",
      },
    ],
  },
  {
    slug: 'etampes',
    name: 'Étampes',
    dept: 'essonne',
    cp: '91150',
    intro:
      "Diagnostic et traitement des insectes xylophages à Étampes : centre ancien, maisons à pans de bois, charpentes de chêne et planchers anciens.",
    answer:
      "À Étampes, le chêne ancien du centre est presque toujours marqué par des attaques passées. Le travail consiste donc à établir si une <strong>activité est en cours aujourd’hui</strong>, au besoin par un contrôle différé. Dans les secteurs proches de la Juine, les planchers bas appellent une vigilance distincte.",
    contexte: [
      "Étampes possède l’un des centres anciens les mieux conservés du sud de l’Île-de-France. Maisons de bourg, quelques pans de bois, charpentes de chêne anciennes et planchers à solives y constituent un patrimoine bois important, souvent remanié au fil des siècles.",
      "Dans ce type de bâti, le diagnostic porte d’abord sur une question de chronologie. Le chêne ancien est presque toujours marqué : galeries d’aubier, piqûres, trous de sortie anciens. Ces traces sont le témoignage d’attaques parfois très anciennes et ne justifient aucun traitement en elles-mêmes. Le travail consiste à établir si une activité est en cours aujourd’hui, ce qui suppose d’examiner la couleur des vermoulures, l’état des bords des trous, la réaction du bois au sondage, et parfois de revenir après un contrôle différé.",
      "La ville est traversée par la Juine et plusieurs bras d’eau. Dans les secteurs bas, l’humidité des planchers bas et des solives d’about constitue un point de vigilance spécifique, distinct de celui des combles.",
    ],
    habitat: [
      "Maisons de bourg et bâti ancien du centre",
      "Quelques constructions à pans de bois",
      "Corps de ferme et dépendances des environs",
      "Pavillonnaire et copropriétés plus récentes",
    ],
    zones: [
      "Charpentes de chêne anciennes et aubier résiduel",
      "Planchers à la française et solives d’about",
      "Pièces de pan de bois et pieds de poteau",
      "Planchers bas dans les secteurs proches de la Juine",
    ],
    faq: [
      {
        q: "Des trous anciens dans une poutre justifient-ils un traitement ?",
        a: "Pas à eux seuls. Des trous de sortie anciens signifient qu’une attaque a eu lieu, sans indiquer si elle est terminée ou en cours. C’est la présence de vermoulure fraîche, de bords de trous clairs et nets, ou d’une progression constatée entre deux contrôles qui oriente vers une activité actuelle.",
      },
      {
        q: "Un contrôle différé, comment cela fonctionne-t-il ?",
        a: "Nous nettoyons soigneusement une ou plusieurs zones témoins, nous les repérons, puis nous revenons après un délai adapté à la saison. La réapparition de vermoulure au même endroit est un indice fort d’activité. C’est une méthode simple, peu coûteuse et bien plus fiable qu’une conclusion hâtive.",
      },
    ],
  },
  {
    slug: 'pontoise',
    name: 'Pontoise',
    dept: 'val-doise',
    cp: '95300',
    intro:
      "Traitement des insectes xylophages à Pontoise : bâti ancien de la ville haute, maisons de ville, charpentes de chêne et planchers bois.",
    answer:
      "À Pontoise, le réseau de <strong>caves creusées dans le calcaire</strong> influence le comportement de l’humidité : un plancher bas au-dessus d’une cave mal ventilée reste humide en sous-face, ce qui change complètement le type d’attaque à envisager. Vers le Vexin, granges et dépendances complètent le périmètre.",
    contexte: [
      "Pontoise s’organise autour d’une ville haute ancienne, bâtie sur un promontoire calcaire, et d’extensions plus récentes vers la vallée et Cergy. Le centre historique regroupe des maisons de ville et des immeubles dont les planchers reposent sur solives et dont les combles abritent des charpentes de chêne parfois très anciennes.",
      "Le sous-sol calcaire a produit un réseau de caves creusées qui joue un rôle dans le comportement de l’humidité des bâtiments. Un plancher bas au-dessus d’une cave mal ventilée peut conserver une humidité élevée, ce qui modifie complètement le type d’attaque à envisager : on ne cherche plus seulement un insecte du bois sec, mais aussi les conditions d’une dégradation liée à l’eau.",
      "Dans les communes environnantes, vers le Vexin, on retrouve le bâti rural de pierre et de chêne, avec ses granges et ses dépendances. Ces volumes peu chauffés et rarement visités constituent souvent le point de départ d’une inspection utile.",
    ],
    habitat: [
      "Maisons de ville et immeubles anciens de la ville haute",
      "Bâti rural et dépendances vers le Vexin français",
      "Pavillonnaire des années 1950 à 1990",
      "Copropriétés et programmes récents de l’agglomération",
    ],
    zones: [
      "Charpentes de chêne du centre ancien",
      "Planchers bas au-dessus des caves",
      "Solives d’about engagées dans les murs",
      "Bois des granges et dépendances",
    ],
    faq: [
      {
        q: "Une cave humide peut-elle affecter le plancher du dessus ?",
        a: "Oui. Un plancher bois au-dessus d’une cave mal ventilée reste humide en sous-face, ce qui favorise les champignons et certains insectes, notamment la grosse vrillette. Améliorer la ventilation de la cave fait alors partie intégrante de la solution.",
      },
      {
        q: "Intervenez-vous dans les villages du Vexin autour de Pontoise ?",
        a: "Oui, l’ensemble du Val-d’Oise est desservi, y compris les communes rurales du Vexin français. Ces déplacements font partie de notre organisation habituelle.",
      },
    ],
  },
  {
    slug: 'vincennes',
    name: 'Vincennes',
    dept: 'val-de-marne',
    cp: '94300',
    intro:
      "Diagnostic et traitement des insectes xylophages à Vincennes : immeubles du début du XXᵉ siècle, pavillons, planchers bois et charpentes de comble.",
    answer:
      "À Vincennes, le bois est presque toujours <strong>enfermé</strong> : entre plafond et parquet, sous un doublage, ou dans un comble aménagé. Les signes apparaissent donc tard et de façon indirecte — une lame qui s’enfonce, une poussière fine qui tombe d’un plafond, un bruit de plancher qui change.",
    contexte: [
      "Vincennes est une ville dense, largement construite entre la fin du XIXᵉ siècle et les années 1930. Son bâti est dominé par des immeubles de rapport aux planchers sur solives, des maisons de ville mitoyennes et quelques pavillons insérés dans le tissu. Le bois y est presque toujours enfermé : entre plafond et parquet, sous un doublage, ou dans un comble aménagé.",
      "Cette configuration a une conséquence directe sur la manière de diagnostiquer. Les signes visibles apparaissent tard et de façon indirecte : une lame de parquet qui s’enfonce, un plafond qui laisse tomber une poussière fine, un bruit de plancher qui change. L’inspection consiste alors à recouper ces indices avec ce que la structure permet d’observer, et à pratiquer si nécessaire des ouvertures ponctuelles aux endroits les plus significatifs.",
      "La forte proportion de copropriétés implique enfin de clarifier d’emblée le statut des ouvrages concernés. Une charpente commune, un plancher entre deux lots et un parquet privatif ne relèvent pas des mêmes décisions ni du même financement : notre rapport le précise pour éviter les blocages.",
    ],
    habitat: [
      "Immeubles de rapport de la fin du XIXᵉ et du début du XXᵉ siècle",
      "Maisons de ville mitoyennes et petits pavillons",
      "Copropriétés d’après-guerre",
      "Programmes récents en cœur de ville",
    ],
    zones: [
      "Solives de plancher et lambourdes de parquet",
      "Charpentes de comble et pieds de chevron",
      "Bois enfermés dans les doublages et faux plafonds",
      "Menuiseries et volets de façade",
    ],
    faq: [
      {
        q: "Une poussière fine tombe de mon plafond : que faire ?",
        a: "Commencez par la recueillir sur une feuille et par la photographier. Une vermoulure d’insecte a une granulométrie particulière et souvent une forme caractéristique selon l’espèce. Cela ne remplace pas une observation directe des solives, mais c’est un point de départ utile pour l’échange préalable.",
      },
      {
        q: "Qui prend en charge un plancher entre deux appartements ?",
        a: "Un plancher séparant deux lots relève généralement des parties communes, sous réserve de ce que prévoit le règlement de copropriété. La décision et le financement passent alors par la copropriété. C’est l’une des raisons pour lesquelles notre rapport qualifie précisément les ouvrages concernés.",
      },
    ],
  },
  {
    slug: 'neuilly-sur-seine',
    name: 'Neuilly-sur-Seine',
    dept: 'hauts-de-seine',
    cp: '92200',
    intro:
      "Traitement des insectes xylophages à Neuilly-sur-Seine : immeubles haussmanniens et 1930, hôtels particuliers, parquets anciens et charpentes de comble.",
    answer:
      "À Neuilly-sur-Seine, la configuration la plus fréquente est l’<strong>affaissement localisé d’un parquet sans aucun trou visible</strong> : ce n’est pas la lame qui est attaquée, mais la lambourde qui la porte. En comble, les bois de rive et les pieds de chevron restent les pièces les plus exposées.",
    contexte: [
      "Le bâti de Neuilly-sur-Seine est dominé par des immeubles de rapport du XIXᵉ siècle et de l’entre-deux-guerres, ainsi que par des hôtels particuliers et des maisons de maître. Le bois y est essentiellement présent sous trois formes : solives de plancher, lambourdes et parquets, et charpentes de comble.",
      "Les parquets anciens, souvent en chêne et de grande qualité, reposent sur des lambourdes dont l’état conditionne celui du sol fini. Lorsqu’une lambourde est humidifiée, par une fuite ancienne ou par un remblai qui n’a jamais séché, elle peut être attaquée sans que le parquet lui-même le soit. On observe alors un affaissement localisé, sans trou visible en surface.",
      "Dans les combles, les bois de rive et les pieds de chevron sont les pièces les plus exposées, du fait de leur proximité avec les chéneaux et les points d’entrée d’eau. Un contrôle périodique de ces zones, même en l’absence de signe, constitue une précaution raisonnable sur ce type d’immeuble.",
    ],
    habitat: [
      "Immeubles haussmanniens et immeubles des années 1930",
      "Hôtels particuliers et maisons de maître",
      "Copropriétés d’après-guerre",
      "Programmes récents et surélévations",
    ],
    zones: [
      "Lambourdes de parquet et solives d’étage",
      "Parquets anciens et boiseries",
      "Bois de rive et pieds de chevron en comble",
      "Menuiseries de façade et volets",
    ],
    faq: [
      {
        q: "Mon parquet s’affaisse à un endroit, sans aucun trou visible : est-ce possible ?",
        a: "Oui, et c’est une situation classique. Ce n’est pas nécessairement la lame qui est attaquée, mais la lambourde qui la porte. Le diagnostic passe alors par la dépose d’une lame ou par un sondage, qui permet d’atteindre le support et de l’examiner directement.",
      },
      {
        q: "Un traitement laisse-t-il des traces sur un parquet ciré ?",
        a: "C’est un risque réel, que nous prenons au sérieux. Nous réalisons un essai préalable sur une zone peu visible, choisissons un produit compatible avec la finition existante, et privilégions l’injection par le dessous ou par les joints lorsque la configuration le permet.",
      },
    ],
  },
];

export const VILLES_BY_DEPT: Record<string, Ville[]> = VILLES.reduce((acc, v) => {
  (acc[v.dept] ||= []).push(v);
  return acc;
}, {} as Record<string, Ville[]>);

export const VILLE_BY_SLUG: Record<string, Ville> = Object.fromEntries(
  VILLES.map((v) => [v.slug, v]),
);
