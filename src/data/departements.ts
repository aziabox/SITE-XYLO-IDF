/**
 * Départements d'Île-de-France réellement desservis.
 *
 * Les contenus ci-dessous décrivent des réalités architecturales et urbaines
 * vérifiables (types d'habitat, périodes de construction, communes). Aucune
 * statistique d'infestation n'y figure : il n'existe pas de donnée publique
 * fiable à l'échelle communale, et la réglementation termites repose sur des
 * arrêtés préfectoraux qui doivent être consultés au cas par cas.
 */

export type Departement = {
  slug: string;
  code: string;
  name: string;
  /** Formulation locative : « à Paris », « en Seine-et-Marne », « dans les Yvelines ». */
  inName: string;
  /** Formulation possessive : « de Paris », « des Yvelines », « du Val-de-Marne ». */
  ofName: string;
  prefecture: string;
  intro: string;
  habitat: string[];
  batiSensible: string[];
  contexte: string;
  boisTypiques: string;
  faq: { q: string; a: string }[];
};

export const DEPARTEMENTS: Departement[] = [
  {
    slug: 'paris',
    code: '75',
    name: 'Paris',
    inName: 'à Paris',
    ofName: 'de Paris',
    prefecture: 'Paris',
    intro:
      "Diagnostic et traitement des insectes xylophages dans les immeubles parisiens : charpentes de comble, planchers bois, solives, lambourdes de parquet et menuiseries anciennes.",
    habitat: [
      "Immeubles haussmanniens et post-haussmanniens à planchers bois sur solives",
      "Immeubles de faubourg antérieurs au XIXᵉ siècle, souvent remaniés",
      "Maisons à pans de bois subsistant dans les quartiers anciens (Marais, Montagne Sainte-Geneviève)",
      "Combles aménagés sous charpente traditionnelle",
      "Ateliers d'artistes et constructions légères de cour",
    ],
    batiSensible: [
      "Solives et planchers bois entre étages",
      "Lambourdes de parquet en contact avec la dalle",
      "Charpentes de comble et pieds de chevron en rive",
      "Menuiseries, parquets et boiseries anciennes",
    ],
    contexte:
      "Le bâti parisien présente une particularité : le bois y est le plus souvent invisible. Les solives sont prises entre un plafond plâtre et un parquet, les lambourdes reposent sur une forme de sable ou un remblai, et les charpentes sont masquées par les aménagements de comble. Les signes d'attaque se manifestent donc tardivement, souvent par un parquet qui fléchit, un bruit de plancher qui change, ou de la vermoulure qui tombe d'un plafond. L'humidité ponctuelle liée aux réseaux, aux salles d'eau ou aux terrasses mal étanchées crée par ailleurs des conditions favorables à certains insectes, notamment la grosse vrillette. En copropriété, la distinction entre parties communes (charpente, planchers structurels) et parties privatives conditionne la façon d'intervenir : nous remettons un rapport exploitable en assemblée générale.",
    boisTypiques: "Chêne et sapin pour les solives et les charpentes, chêne et pin pour les parquets et lambourdes.",
    faq: [
      {
        q: "Peut-on traiter une charpente d'immeuble sans l'accord de la copropriété ?",
        a: "La charpente et les planchers structurels relèvent généralement des parties communes. Un traitement qui les concerne est donc décidé par la copropriété, sur la base d'un rapport de diagnostic. Nous remettons un document destiné au syndic et exploitable en assemblée générale. Les boiseries et parquets purement privatifs peuvent, eux, être traités à l'initiative du propriétaire.",
      },
      {
        q: "Un parquet qui grince signifie-t-il qu'il est attaqué ?",
        a: "Non. Un grincement traduit le plus souvent un jeu mécanique entre lames, ou un léger dévers des lambourdes. Un parquet attaqué présente plutôt un fléchissement localisé, des trous de sortie sur le chant des lames, ou une lame qui cède sous l'appui. Seule une observation directe, avec au besoin dépose d'une lame, permet de trancher.",
      },
      {
        q: "Paris est-il concerné par la réglementation termites ?",
        a: "La présence de termites fait l'objet d'arrêtés préfectoraux qui délimitent les zones concernées, commune par commune ou arrondissement par arrondissement. Ces arrêtés évoluent. Avant une vente, l'information se vérifie auprès de la mairie ou de la préfecture, qui tiennent à jour la liste en vigueur. Nous ne nous substituons pas à cette vérification et ne pouvons pas affirmer à votre place qu'une adresse est, ou n'est pas, en zone délimitée.",
      },
    ],
  },
  {
    slug: 'seine-et-marne',
    code: '77',
    name: 'Seine-et-Marne',
    inName: 'en Seine-et-Marne',
    ofName: 'de Seine-et-Marne',
    prefecture: 'Melun',
    intro:
      "Traitement des insectes xylophages en Seine-et-Marne : charpentes de fermes briardes, longères, maisons de bourg, granges et pavillons.",
    habitat: [
      "Fermes et longères briardes à charpente de chêne, souvent de forte section",
      "Maisons de bourg anciennes, parfois à pans de bois (Provins, Moret, Crécy-la-Chapelle)",
      "Granges, dépendances et bâtiments agricoles reconvertis en habitation",
      "Pavillons et lotissements récents à charpente industrialisée (fermettes)",
      "Maisons de meulière et villas de villégiature le long des vallées",
    ],
    batiSensible: [
      "Entraits et sablières en contact avec la maçonnerie",
      "Pieds de chevron et pannes de rive en sous-face de couverture",
      "Planchers à la française des bâtiments anciens",
      "Fermettes en sapin traitées en surface uniquement",
    ],
    contexte:
      "La Seine-et-Marne est le plus vaste département d'Île-de-France, et le plus hétérogène sur le plan du bâti. On y trouve côte à côte des charpentes de chêne de plusieurs siècles, dans les fermes briardes et les centres anciens, et des fermettes industrialisées posées depuis les années 1970 dans les lotissements. Ces deux familles de bois ne réagissent pas de la même manière. Le chêne ancien, dense et pauvre en aubier, est peu attractif pour les lyctus mais peut héberger des capricornes dans ses parties tendres, et des grosses vrillettes là où une fuite a humidifié la pièce. Les fermettes en sapin, plus tendres, sont au contraire un terrain favorable au capricorne des maisons lorsque la protection d'origine s'est estompée. Les dépendances et granges, peu chauffées et rarement inspectées, sont souvent les premières à montrer des signes.",
    boisTypiques: "Chêne de pays pour le bâti ancien, sapin et épicéa pour les charpentes industrialisées.",
    faq: [
      {
        q: "Une grange transformée en habitation doit-elle être traitée avant travaux ?",
        a: "C'est le moment le plus favorable : la charpente est accessible, les bois sont visibles sur toutes leurs faces, et un traitement appliqué avant isolation et doublage touche l'intégralité des pièces. Une fois les rampants isolés et les plafonds posés, une partie du bois devient inaccessible, et le coût comme la complexité augmentent nettement.",
      },
      {
        q: "Les fermettes récentes sont-elles vraiment concernées ?",
        a: "Oui. Le bois de fermette est traité en usine, mais cette protection est calibrée pour une durée limitée et se concentre en périphérie de la pièce. Les coupes réalisées sur chantier mettent à nu du bois non traité. Nous intervenons régulièrement sur des charpentes industrialisées de vingt à quarante ans présentant des trous de sortie de capricorne.",
      },
      {
        q: "Intervenez-vous dans tout le département ?",
        a: "Oui, sur l'ensemble de la Seine-et-Marne, de la frange est de l'agglomération parisienne jusqu'à la Brie et au Provinois. Les délais de déplacement varient selon l'éloignement ; ils vous sont annoncés lors de la prise de rendez-vous.",
      },
    ],
  },
  {
    slug: 'yvelines',
    code: '78',
    name: 'Yvelines',
    inName: 'dans les Yvelines',
    ofName: 'des Yvelines',
    prefecture: 'Versailles',
    intro:
      "Diagnostic et traitement des insectes xylophages dans les Yvelines : hôtels particuliers, maisons de meulière, propriétés anciennes et charpentes de comble.",
    habitat: [
      "Hôtels particuliers et maisons de ville des XVIIᵉ et XVIIIᵉ siècles (Versailles, Saint-Germain-en-Laye)",
      "Maisons de meulière de la fin du XIXᵉ et du début du XXᵉ siècle",
      "Propriétés et villas en lisière de forêt (Marly, Rambouillet, Saint-Germain)",
      "Pavillonnaire d'après-guerre et lotissements récents",
      "Communs, orangeries et dépendances de propriétés anciennes",
    ],
    batiSensible: [
      "Charpentes de comble de forte section, souvent en chêne",
      "Planchers à la française et parquets anciens",
      "Boiseries, lambris et menuiseries d'époque",
      "Pieds de ferme encastrés dans les murs de meulière",
    ],
    contexte:
      "Les Yvelines réunissent deux situations très différentes. D'un côté, un patrimoine bâti ancien de grande valeur, où le bois est à la fois structurel et décoratif : charpentes de comble, planchers à la française, lambris, parquets anciens. Toute intervention y demande de la retenue, car un traitement mal conduit peut abîmer une finition irremplaçable. De l'autre, un tissu pavillonnaire dense, constitué notamment de maisons de meulière dont les combles sont souvent peu ventilés et les pieds de charpente en contact direct avec une maçonnerie qui retient l'humidité. Dans ce contexte, la grosse vrillette trouve les conditions qu'elle recherche : un bois légèrement humide, parfois déjà colonisé par un champignon. La proximité des massifs forestiers ne crée pas d'infestation en soi, mais elle augmente la probabilité qu'un insecte adulte trouve, en vol, une pièce de bois accessible.",
    boisTypiques: "Chêne pour les charpentes et planchers anciens, sapin et pin pour les combles du XXᵉ siècle.",
    faq: [
      {
        q: "Un traitement peut-il abîmer des boiseries anciennes ?",
        a: "Le risque existe, et c'est précisément ce qui conditionne le choix de la méthode. Sur des bois vus, cirés, peints ou plaqués, nous privilégions des produits incolores compatibles avec la finition, des essais préalables sur une zone peu visible, et lorsque c'est nécessaire une injection discrète plutôt qu'un traitement de surface généralisé. Sur un élément de grande valeur, la bonne réponse consiste parfois à faire intervenir un restaurateur en complément.",
      },
      {
        q: "Faut-il traiter un comble non aménagé ?",
        a: "Un comble non aménagé est justement le volume où une attaque peut progresser longtemps sans être remarquée. L'inspection y est simple et rapide. Le traitement, lui, ne se décide que si des signes le justifient : nous ne recommandons pas de traiter un bois sain et sec par principe.",
      },
      {
        q: "Intervenez-vous sur des bâtiments protégés ?",
        a: "Sur un bâtiment inscrit ou classé, ou situé aux abords d'un monument historique, les travaux relèvent de procédures particulières et de l'avis des services compétents. Nous réalisons le diagnostic et établissons les préconisations, en coordination avec le maître d'œuvre ou l'architecte du patrimoine chargé du dossier.",
      },
    ],
  },
  {
    slug: 'essonne',
    code: '91',
    name: 'Essonne',
    inName: 'en Essonne',
    ofName: "de l'Essonne",
    prefecture: 'Évry-Courcouronnes',
    intro:
      "Traitement des insectes xylophages en Essonne : maisons de meulière, bâti ancien des vallées, corps de ferme du Hurepoix et pavillonnaire.",
    habitat: [
      "Maisons de meulière des vallées de l'Orge, de l'Yvette et de la Juine",
      "Corps de ferme et bâtiments agricoles du Hurepoix et de la Beauce",
      "Centres anciens (Étampes, Dourdan, Milly-la-Forêt) à charpentes de chêne",
      "Pavillonnaire de l'entre-deux-guerres et des années 1960-1980",
      "Constructions légères et extensions à ossature bois",
    ],
    batiSensible: [
      "Charpentes de comble des maisons de meulière",
      "Planchers bois de rez-de-chaussée sur vide sanitaire",
      "Solives d'about engagées dans les murs",
      "Bois des dépendances, ateliers et abris accolés",
    ],
    contexte:
      "L'Essonne est un département de vallées. L'Orge, l'Yvette, la Juine et leurs affluents ont structuré l'urbanisation, et beaucoup de maisons sont construites à flanc de coteau ou en fond de vallée, sur des terrains où la nappe remonte. Cette configuration a une conséquence concrète sur le bois : les planchers bas, les solives d'about et les pieds de charpente y sont davantage exposés à une humidité permanente ou saisonnière. Or l'humidité est le facteur qui distingue une attaque de capricorne, possible dans un bois sec, d'une attaque de grosse vrillette, qui suppose un bois humide et souvent déjà altéré par un champignon. Dans les corps de ferme du plateau, la problématique est différente : de grands volumes peu chauffés, des charpentes de forte section et des bois restés bruts, où une attaque ancienne peut coexister avec une attaque active sans que l'œil les distingue immédiatement.",
    boisTypiques: "Chêne dans le bâti ancien et les fermes, sapin dans les combles et charpentes du XXᵉ siècle.",
    faq: [
      {
        q: "Une maison en fond de vallée est-elle plus exposée ?",
        a: "Elle est surtout plus exposée à l'humidité du bois, qui est un facteur favorable pour certains insectes, la grosse vrillette en particulier. Cela ne signifie pas qu'une attaque est en cours, mais cela justifie de contrôler les planchers bas, les solives d'about et les pieds de charpente plutôt que de se limiter au comble.",
      },
      {
        q: "Traitez-vous les dépendances et abris de jardin ?",
        a: "Oui lorsque c'est pertinent. Une dépendance accolée ou proche peut héberger une population d'insectes et constituer une source de recolonisation pour le bâtiment principal. Nous l'intégrons alors au périmètre du diagnostic.",
      },
      {
        q: "Comment se passe l'intervention si le comble est encombré ?",
        a: "Le bois doit être accessible pour être correctement traité. Nous vous indiquons après le diagnostic ce qui doit être dégagé, et nous pouvons déplacer ponctuellement ce qui peut l'être. Un comble entièrement rempli ne permet ni une inspection fiable ni un traitement complet.",
      },
    ],
  },
  {
    slug: 'hauts-de-seine',
    code: '92',
    name: 'Hauts-de-Seine',
    inName: 'dans les Hauts-de-Seine',
    ofName: 'des Hauts-de-Seine',
    prefecture: 'Nanterre',
    intro:
      "Diagnostic et traitement des insectes xylophages dans les Hauts-de-Seine : immeubles anciens, maisons de meulière, copropriétés et charpentes de comble.",
    habitat: [
      "Immeubles de rapport du XIXᵉ siècle à planchers bois",
      "Immeubles Art déco et des années 1930 (Boulogne-Billancourt, Levallois-Perret)",
      "Maisons de meulière des coteaux (Meudon, Clamart, Sceaux, Bourg-la-Reine)",
      "Hôtels particuliers et villas (Neuilly-sur-Seine, Saint-Cloud)",
      "Copropriétés des années 1960-1970 à planchers béton et menuiseries bois",
    ],
    batiSensible: [
      "Charpentes de comble des immeubles anciens",
      "Solives et lambourdes de parquet",
      "Menuiseries extérieures bois et volets",
      "Bois des combles de maisons de meulière",
    ],
    contexte:
      "Les Hauts-de-Seine présentent une densité bâtie élevée et une forte proportion de copropriétés, ce qui change la manière d'aborder une attaque du bois. La question n'est pas seulement technique, elle est aussi organisationnelle : un comble d'immeuble ou une charpente commune impliquent un syndic, une assemblée générale, parfois plusieurs devis à comparer. Nous adaptons donc le rapport de diagnostic à ce circuit de décision, en distinguant clairement ce qui est constaté, ce qui est supposé et ce qui est préconisé. Sur le plan du bâti, deux ensembles ressortent : les combles des immeubles anciens, où les bois de rive et les pieds de chevron souffrent d'infiltrations de couverture, et les maisons de meulière des coteaux, dont les charpentes sont souvent saines mais dont les planchers bas et les menuiseries méritent un contrôle.",
    boisTypiques: "Sapin et chêne pour les charpentes, chêne pour les parquets et lambourdes, pin et chêne pour les menuiseries.",
    faq: [
      {
        q: "Qui décide d'un traitement dans une copropriété ?",
        a: "Lorsque le bois concerné relève des parties communes, la décision appartient à l'assemblée générale, sur proposition du syndic et du conseil syndical. Notre rôle est de fournir un constat clair, des préconisations et un devis détaillé qui permettent de porter le sujet à l'ordre du jour. Pour un bois privatif, le propriétaire décide seul.",
      },
      {
        q: "Les menuiseries extérieures peuvent-elles être attaquées ?",
        a: "Oui, et elles sont souvent négligées. Les dormants, les volets et les bas de fenêtre subissent des variations d'humidité importantes. On y rencontre des attaques localisées, parfois associées à un début de pourriture. Le traitement y est ponctuel et va souvent de pair avec la reprise de la finition.",
      },
      {
        q: "Faut-il quitter son logement pendant le traitement ?",
        a: "Cela dépend du produit employé, du volume traité et de la ventilation des locaux. Les consignes de réintégration figurent sur la fiche de données de sécurité du produit utilisé et vous sont communiquées avant l'intervention, au moment du devis, et non après coup.",
      },
    ],
  },
  {
    slug: 'seine-saint-denis',
    code: '93',
    name: 'Seine-Saint-Denis',
    inName: 'en Seine-Saint-Denis',
    ofName: 'de Seine-Saint-Denis',
    prefecture: 'Bobigny',
    intro:
      "Traitement des insectes xylophages en Seine-Saint-Denis : pavillons de l'entre-deux-guerres, immeubles de faubourg, ateliers reconvertis et copropriétés.",
    habitat: [
      "Lotissements pavillonnaires des années 1920-1930, très présents dans le département",
      "Immeubles de faubourg et maisons ouvrières à planchers bois",
      "Ateliers et locaux industriels reconvertis en logements ou bureaux (Montreuil, Pantin)",
      "Maisons de meulière et villas (Le Raincy, Villemomble, Gagny)",
      "Anciennes fermes de plaine, en frange est du département",
    ],
    batiSensible: [
      "Charpentes des pavillons de l'entre-deux-guerres",
      "Planchers bois sur solives des immeubles de faubourg",
      "Charpentes et sheds d'anciens ateliers",
      "Bois de combles peu ou pas ventilés",
    ],
    contexte:
      "La Seine-Saint-Denis se caractérise par une forte proportion de maisons construites entre les deux guerres, dans des lotissements ouvriers puis pavillonnaires. Ces constructions partagent des traits communs : charpentes en sapin de sections modestes, combles bas souvent transformés en rangement, ventilation limitée, bois rarement traités à l'origine. Ce sont des conditions dans lesquelles une attaque de capricorne peut progresser pendant des années sans que rien ne soit visible depuis le logement, jusqu'au jour où de la vermoulure apparaît au sol, ou où un chevron cède sous l'appui. L'autre particularité du département tient à la reconversion d'anciens bâtiments d'activité : charpentes de grande portée, sheds, planchers techniques. Ces structures demandent une inspection spécifique, car leur bois est souvent d'origine et n'a jamais fait l'objet d'un traitement.",
    boisTypiques: "Sapin et pin pour les charpentes pavillonnaires, chêne pour les planchers et le bâti ancien.",
    faq: [
      {
        q: "Un comble utilisé comme rangement peut-il être inspecté ?",
        a: "Il doit l'être, mais il faut pouvoir accéder au bois. Un comble rempli de cartons empêche de lire les chevrons, les pannes et les entraits, qui sont précisément les pièces à observer. Nous vous indiquons avant le rendez-vous ce qu'il est utile de dégager pour que la visite soit exploitable.",
      },
      {
        q: "Un ancien atelier présente-t-il des risques particuliers ?",
        a: "Les charpentes d'atelier sont souvent de grande portée, avec des assemblages et des appuis qui concentrent les efforts. Une dégradation localisée au droit d'un appui y a plus de conséquences que dans une charpente courante. L'inspection porte donc en priorité sur les zones d'appui, les abouts de poutre et les points d'infiltration de couverture.",
      },
      {
        q: "Intervenez-vous dans les logements en location ?",
        a: "Oui. Le diagnostic peut être demandé par le propriétaire bailleur comme par le syndic. Le locataire doit être informé et présent, ou représenté, lors de la visite. La décision de traitement revient au propriétaire, puisqu'il s'agit d'une intervention sur la structure du logement.",
      },
    ],
  },
  {
    slug: 'val-de-marne',
    code: '94',
    name: 'Val-de-Marne',
    inName: 'dans le Val-de-Marne',
    ofName: 'du Val-de-Marne',
    prefecture: 'Créteil',
    intro:
      "Diagnostic et traitement des insectes xylophages dans le Val-de-Marne : villas des bords de Marne, maisons de meulière, pavillonnaire et copropriétés.",
    habitat: [
      "Villas et maisons de villégiature des bords de Marne (Nogent, Joinville, Champigny, Saint-Maur)",
      "Maisons de meulière à décors et débords de toiture en bois",
      "Pavillonnaire dense des années 1920 à 1960",
      "Immeubles anciens des communes limitrophes de Paris",
      "Copropriétés et ensembles des années 1960-1970",
    ],
    batiSensible: [
      "Débords de toiture, chevrons apparents et bois de rive",
      "Planchers bas et solives sur vide sanitaire près de la Marne",
      "Charpentes de comble des villas anciennes",
      "Vérandas, marquises et ouvrages bois extérieurs",
    ],
    contexte:
      "Le Val-de-Marne conserve un bâti particulier, lié à l'histoire des bords de Marne : des villas de villégiature construites entre la fin du XIXᵉ siècle et les années 1930, souvent très riches en bois apparent. Débords de toiture, chevrons moulurés, balcons, marquises, lambrequins : ces éléments font l'identité de ces maisons, et ce sont aussi les plus exposés. Le bois extérieur subit l'alternance de pluie et de soleil, ses finitions vieillissent, et des fissures apparaissent dans lesquelles l'humidité s'installe. On y rencontre donc plus souvent qu'ailleurs des situations mixtes, associant une dégradation par l'humidité et une attaque d'insectes. La proximité de la Marne renforce par ailleurs l'exposition des planchers bas et des vides sanitaires dans les secteurs les plus bas. Le traitement de ces ouvrages demande de tenir compte de la valeur architecturale des éléments concernés.",
    boisTypiques: "Sapin et pin pour les charpentes et débords, chêne pour les planchers et les pièces de structure.",
    faq: [
      {
        q: "Les débords de toiture en bois doivent-ils être traités différemment ?",
        a: "Oui, parce qu'ils sont exposés aux intempéries. Un traitement seul ne suffit pas si l'eau continue d'atteindre le bois : il faut d'abord rétablir la protection, par une finition adaptée ou une reprise de la couverture, faute de quoi la dégradation reprendra. Nous le signalons systématiquement lorsque c'est le cas.",
      },
      {
        q: "Une véranda ou une marquise ancienne peut-elle être conservée ?",
        a: "Souvent oui, si la structure conserve une section saine suffisante. La décision se prend pièce par pièce, après sondage. Certaines pièces se traitent et se conservent, d'autres doivent être remplacées à l'identique. Nous distinguons clairement les deux dans le rapport.",
      },
      {
        q: "Intervenez-vous sur les maisons au bord de l'eau ?",
        a: "Oui. Dans ces secteurs, nous portons une attention particulière aux planchers bas, aux vides sanitaires et aux solives d'about, qui sont les zones où l'humidité du bois est la plus élevée et où une attaque de grosse vrillette est la plus plausible.",
      },
    ],
  },
  {
    slug: 'val-doise',
    code: '95',
    name: "Val-d'Oise",
    inName: "dans le Val-d'Oise",
    ofName: "du Val-d'Oise",
    prefecture: 'Cergy-Pontoise',
    intro:
      "Traitement des insectes xylophages dans le Val-d'Oise : maisons de village du Vexin, fermes, charpentes anciennes et pavillonnaire.",
    habitat: [
      "Maisons de village et fermes du Vexin français, en pierre calcaire et charpente de chêne",
      "Bâti ancien de la vallée de Montmorency et des coteaux",
      "Granges, celliers et dépendances agricoles",
      "Pavillonnaire des années 1950 à 1990 et lotissements récents",
      "Maisons de villégiature (L'Isle-Adam, Auvers-sur-Oise, Montmorency)",
    ],
    batiSensible: [
      "Entraits et sablières posés sur murs de pierre",
      "Charpentes de grange et de dépendance",
      "Planchers à la française des maisons de village",
      "Bois de combles non isolés et peu ventilés",
    ],
    contexte:
      "Le Val-d'Oise associe un nord rural, marqué par le Vexin français et ses villages de pierre calcaire, et un sud beaucoup plus urbain le long de la vallée de Montmorency et de l'axe de Cergy. Dans le Vexin, les charpentes de chêne reposent directement sur des murs épais qui peuvent conserver de l'humidité, en particulier sur les façades nord et dans les bâtiments peu chauffés. La sablière et l'about d'entrait, au contact de cette maçonnerie, sont les pièces qu'il faut regarder en premier. Les granges et celliers, rarement inspectés, hébergent souvent des attaques anciennes dont il faut déterminer si elles sont encore actives avant d'engager quoi que ce soit. Dans le sud du département, le bâti pavillonnaire pose les questions plus classiques du comble en sapin et de la ventilation insuffisante.",
    boisTypiques: "Chêne de pays dans le Vexin et le bâti ancien, sapin et épicéa dans les charpentes récentes.",
    faq: [
      {
        q: "Comment savoir si l'attaque d'une vieille grange est encore active ?",
        a: "On s'appuie sur plusieurs indices convergents : la couleur des trous de sortie et de la vermoulure, la réapparition de vermoulure fraîche après nettoyage d'une zone témoin, l'aspect du bois au sondage, et parfois l'observation d'insectes adultes en saison. Un doute persistant se lève par un contrôle différé de quelques semaines à quelques mois, pas par une affirmation immédiate.",
      },
      {
        q: "Une charpente de chêne ancien peut-elle être attaquée ?",
        a: "Oui, mais pas par tous les insectes. Le duramen du chêne, dense et peu nutritif, est peu attractif. En revanche l'aubier, plus tendre, peut être attaqué, et une pièce humidifiée par une infiltration devient favorable à la grosse vrillette. C'est pourquoi l'âge ou l'essence ne suffisent jamais à conclure qu'une charpente est à l'abri.",
      },
      {
        q: "Intervenez-vous dans les villages du Vexin ?",
        a: "Oui, sur l'ensemble du département, y compris les communes rurales du Vexin français. Certaines de ces communes se trouvent dans le périmètre du parc naturel régional, ce qui peut impliquer des contraintes particulières sur les travaux extérieurs ; cela ne concerne pas le traitement intérieur du bois.",
      },
    ],
  },
];

export const DEPT_BY_SLUG: Record<string, Departement> = Object.fromEntries(
  DEPARTEMENTS.map((d) => [d.slug, d]),
);
