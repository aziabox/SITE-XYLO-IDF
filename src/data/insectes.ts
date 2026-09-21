/**
 * Fiches des principaux insectes xylophages du bâtiment.
 *
 * Les éléments biologiques (essences attaquées, diamètre des trous de sortie,
 * aspect de la vermoulure, durée du cycle larvaire) correspondent aux
 * descriptions entomologiques communément admises. Les fourchettes sont
 * données comme des ordres de grandeur : elles orientent l'observation, elles
 * ne constituent pas une clé de détermination à distance.
 */

export type Insecte = {
  slug: string;
  name: string;
  scientific: string;
  aka?: string[];
  /** Phrase d'accroche factuelle. */
  tagline: string;
  /** Réponse directe « quoi ? », utilisable en extrait et en réponse GEO. */
  definition: string;
  adulte: string;
  larve: string;
  boisCibles: string;
  essences: string[];
  trous: string;
  trousDiam: string;
  vermoulure: string;
  cycle: string;
  emergence: string;
  humidite: string;
  bruit: string | null;
  signes: string[];
  zones: string[];
  risque: string;
  diagnostic: string[];
  traitement: string[];
  prevention: string[];
  confusions: { avec: string; difference: string }[];
  faq: { q: string; a: string }[];
  /** Pages liées, pour le maillage contextuel. */
  pageTraitement?: { href: string; label: string };
};

export const INSECTES: Insecte[] = [
  {
    slug: 'capricorne-des-maisons',
    name: 'Capricorne des maisons',
    scientific: 'Hylotrupes bajulus',
    aka: ['Capricorne des charpentes', 'Longicorne des maisons'],
    tagline: "L'insecte qui pose le plus souvent un problème de structure dans les charpentes en résineux.",
    definition:
      "Le capricorne des maisons est un coléoptère dont la larve creuse des galeries dans l'aubier des bois résineux mis en œuvre : sapin, épicéa, pin. C'est l'insecte xylophage qui provoque le plus fréquemment des désordres structurels dans les charpentes de maisons individuelles, parce que sa larve travaille plusieurs années à l'intérieur de la pièce sans que rien ne soit visible en surface.",
    adulte:
      "Coléoptère brun foncé à noir, de 8 à 25 mm, au corps aplati et aux longues antennes. Le pronotum porte deux taches claires et luisantes qui évoquent des yeux. L'adulte ne se nourrit pas de bois : il sort, se reproduit et meurt en quelques semaines.",
    larve:
      "Larve blanc crème, charnue, arquée, pouvant atteindre 25 à 30 mm en fin de développement. C'est elle qui consomme le bois, pendant toute la durée du cycle.",
    boisCibles:
      "Aubier des bois résineux uniquement. Le duramen, plus dense et moins nutritif, n'est pas consommé. Les feuillus (chêne, hêtre, châtaignier) ne sont pas concernés.",
    essences: ['Sapin', 'Épicéa', 'Pin', 'Autres résineux de construction'],
    trous:
      "Trous de sortie de forme ovale, aux bords nets, souvent peu nombreux au regard de l'étendue réelle des galeries. Leur rareté est trompeuse : une pièce peut être largement évidée avec très peu de trous visibles.",
    trousDiam: '5 à 10 mm, ovales',
    vermoulure:
      "Sciure très fine mêlée de granulés cylindriques courts, tassée dans les galeries plutôt qu'évacuée. Elle ne s'écoule pas spontanément : il faut souvent ouvrir le bois pour la trouver.",
    cycle:
      "Développement larvaire long, de 3 à 10 ans selon la température, l'humidité et la qualité nutritive du bois. Il peut se prolonger davantage dans un bois pauvre ou un local froid.",
    emergence: "Sortie des adultes principalement de juin à août.",
    humidite: "Se développe dans du bois sec. Une humidité modérée accélère le cycle mais n'est pas nécessaire.",
    bruit:
      "Un grignotement régulier, audible dans le silence à proximité immédiate de la pièce attaquée, surtout par temps chaud. Ce bruit est le fait de la larve qui ronge le bois.",
    signes: [
      "Trous de sortie ovales de 5 à 10 mm sur une pièce résineuse",
      "Surface du bois qui se boursoufle ou ondule légèrement, sans percement",
      "Son creux au choc, alors que la pièce paraît saine",
      "Enfoncement de la lame d'un tournevis dans une zone apparemment intacte",
      "Bruit de grignotement audible dans le silence, en période chaude",
      "Vermoulure fine trouvée sous une pièce après grattage ou ouverture",
    ],
    zones: [
      'Chevrons, pannes et arbalétriers de charpente',
      'Fermettes industrialisées en sapin',
      'Bois de rive et pieds de chevron',
      'Planchers et solives en résineux',
      'Bardages, lambris et ossatures',
    ],
    risque:
      "C'est l'insecte le plus préoccupant sur le plan structurel dans le bâti résineux courant. La larve consomme l'aubier en laissant une fine pellicule de surface intacte, ce qui donne à une pièce déjà très affaiblie l'apparence d'un bois sain. La perte de section peut devenir critique au droit des appuis et des assemblages.",
    diagnostic: [
      "Identifier l'essence : un trou ovale de 6 à 8 mm dans une pièce de chêne n'est pas du capricorne des maisons.",
      "Sonder au maillet et au poinçon les zones suspectes, en insistant sur les appuis, les abouts et les nœuds.",
      "Rechercher la vermoulure par ouverture ponctuelle : elle est tassée dans les galeries et ne tombe pas d'elle-même.",
      "Évaluer la section saine restante, qui détermine si la pièce peut être conservée ou doit être renforcée.",
      "Distinguer attaque ancienne et attaque active : trous aux bords clairs, vermoulure pâle, bruit en saison.",
    ],
    traitement: [
      "Mise à nu des bois : dépose des isolants, doublages ou revêtements qui empêchent d'atteindre la pièce.",
      "Bûchage des parties fortement dégradées jusqu'au bois sain, ce qui permet aussi de mesurer l'étendue réelle de l'attaque.",
      "Dépoussiérage complet, sans lequel le produit n'adhère pas et ne pénètre pas.",
      "Injection sous pression dans les pièces de forte section, par des chevilles réparties selon un maillage régulier.",
      "Pulvérisation ou badigeonnage de l'ensemble des bois, en plusieurs passes croisées.",
      "Remplacement ou renfort des pièces dont la section saine n'est plus suffisante, en liaison avec un charpentier.",
    ],
    prevention: [
      "Employer des bois traités pour leur classe d'emploi, et retraiter les coupes et usinages réalisés sur chantier.",
      "Ventiler les combles : un volume qui respire limite les conditions favorables.",
      "Éviter de stocker du bois de récupération non traité dans les combles et dépendances.",
      "Contrôler visuellement la charpente tous les deux à trois ans, en particulier après des travaux de couverture.",
    ],
    confusions: [
      {
        avec: 'Petite vrillette',
        difference:
          "Les trous de la petite vrillette sont ronds et de 1 à 3 mm, ceux du capricorne ovales et de 5 à 10 mm. La vermoulure de la vrillette est granuleuse et s'écoule, celle du capricorne reste tassée dans la galerie.",
      },
      {
        avec: 'Lyctus',
        difference:
          "Le lyctus n'attaque que l'aubier de certains feuillus, jamais les résineux. Sa vermoulure est une farine impalpable, très différente des granulés cylindriques du capricorne.",
      },
      {
        avec: 'Termites',
        difference:
          "Les termites ne produisent ni trous de sortie ni vermoulure. Ils évident le bois de l'intérieur en laissant une surface intacte et construisent des cordonnets de terre.",
      },
    ],
    faq: [
      {
        q: "Combien de trous faut-il pour s'inquiéter ?",
        a: "Le nombre de trous n'est pas un bon indicateur pour cette espèce. Une pièce peut être largement évidée avec deux ou trois trous seulement, parce que chaque trou correspond à la sortie d'un adulte, pas à l'étendue des galeries. C'est le sondage du bois, et non le comptage, qui renseigne sur la gravité.",
      },
      {
        q: "Une charpente en chêne peut-elle être attaquée par le capricorne des maisons ?",
        a: "Non, cette espèce se développe dans l'aubier des résineux. Si des trous ovales apparaissent dans une charpente de chêne, il faut chercher une autre explication : une autre espèce de longicorne, une pièce résineuse rapportée, ou une attaque ancienne remontant au bois d'origine.",
      },
      {
        q: "Les fermettes récentes sont-elles protégées ?",
        a: "Elles sont traitées en usine, mais cette protection est calibrée pour une durée limitée et se concentre en périphérie de la pièce. Les coupes faites sur chantier exposent du bois non traité. Nous intervenons régulièrement sur des charpentes industrialisées de vingt à quarante ans.",
      },
    ],
    pageTraitement: { href: '/traitement-capricorne', label: 'Traitement du capricorne' },
  },
  {
    slug: 'vrillette',
    name: 'Vrillettes',
    scientific: 'Anobium punctatum, Xestobium rufovillosum',
    aka: ['Petite vrillette', 'Grosse vrillette', 'Horloge de la mort'],
    tagline: "Deux espèces très différentes que l'on regroupe sous un même nom courant.",
    definition:
      "Le mot « vrillette » recouvre deux insectes distincts. La petite vrillette (Anobium punctatum) attaque l'aubier des feuillus comme des résineux, dans les meubles, parquets, lambris et charpentes légèrement humides. La grosse vrillette (Xestobium rufovillosum) s'attaque aux feuillus, principalement au chêne, mais seulement lorsque le bois a déjà été altéré par un champignon. Les confondre conduit à passer à côté de la vraie cause du problème : l'humidité.",
    adulte:
      "Petite vrillette : coléoptère brun de 2,5 à 5 mm, au thorax bombé formant capuchon, aux élytres marqués de fines stries ponctuées. Grosse vrillette : 5 à 9 mm, brun sombre tacheté de poils jaunâtres.",
    larve:
      "Larve blanchâtre, arquée, de 4 à 6 mm pour la petite vrillette, jusqu'à 10 mm pour la grosse. Elle creuse des galeries fines et sinueuses.",
    boisCibles:
      "Petite vrillette : aubier des feuillus et des résineux, contreplaqués, panneaux. Grosse vrillette : feuillus de forte section, surtout le chêne, préalablement altérés par une pourriture.",
    essences: ['Chêne', 'Hêtre', 'Peuplier', 'Sapin', 'Pin', 'Contreplaqués et panneaux'],
    trous:
      "Trous de sortie ronds et nets. Ils sont souvent nombreux et regroupés, ce qui distingue nettement la vrillette du capricorne.",
    trousDiam: 'Petite vrillette : 1 à 3 mm. Grosse vrillette : 3 à 4 mm.',
    vermoulure:
      "Petite vrillette : poudre granuleuse, légèrement crissante sous le doigt, contenant de petits granulés en forme de citron. Grosse vrillette : vermoulure plus grossière, avec des granulés aplatis en forme de lentille ou de disque. Dans les deux cas, elle s'écoule des trous et forme de petits tas.",
    cycle:
      "Petite vrillette : 1 à 4 ans, le plus souvent 2 à 3. Grosse vrillette : 2 à 10 ans, en fonction de l'état d'altération du bois.",
    emergence: "Sortie des adultes du printemps au début de l'été, avec un pic en mai et juin.",
    humidite:
      "Facteur déterminant. La petite vrillette demande un bois d'humidité modérée, dans un local peu ventilé. La grosse vrillette exige un bois nettement humide, presque toujours déjà attaqué par un champignon de pourriture.",
    bruit:
      "La grosse vrillette produit au printemps un bruit caractéristique de tic-tac : l'adulte frappe sa tête contre le bois pour attirer un partenaire. C'est ce comportement qui lui a valu le nom d'horloge de la mort. La petite vrillette, elle, ne produit pas de bruit perceptible.",
    signes: [
      "Petits trous ronds de 1 à 3 mm, souvent groupés, sur un meuble, un parquet ou un lambris",
      "Tas de vermoulure granuleuse au pied d'un ouvrage ou sur le sol",
      "Trous de 3 à 4 mm dans une poutre de chêne, en zone humide",
      "Tic-tac régulier entendu au printemps dans une pièce de bois",
      "Bois spongieux, sombre ou friable, signe d'une altération par un champignon",
    ],
    zones: [
      'Meubles, escaliers, boiseries et lambris',
      'Parquets et lambourdes',
      'Solives et planchers en zone humide',
      'Poutres et entraits de chêne près des murs ou sous les infiltrations',
      'Charpentes de combles mal ventilés',
    ],
    risque:
      "La petite vrillette dégrade surtout les ouvrages de faible section : elle devient structurellement préoccupante quand elle s'attaque à des lambourdes ou à des solives. La grosse vrillette, elle, est un signal d'alerte : sa présence dans une poutre de chêne indique que le bois est humide et probablement déjà altéré, ce qui constitue un problème plus grave que l'insecte lui-même.",
    diagnostic: [
      "Mesurer le diamètre des trous et observer leur répartition : groupés et ronds oriente vers une vrillette.",
      "Examiner la vermoulure à la loupe : granulés en citron pour la petite vrillette, en lentille pour la grosse.",
      "Mesurer l'humidité du bois, ce qui départage les deux espèces et oriente vers la cause réelle.",
      "Rechercher un champignon de pourriture associé, systématiquement en cas de grosse vrillette.",
      "Identifier l'origine de l'humidité : infiltration, remontée capillaire, condensation, défaut de ventilation.",
    ],
    traitement: [
      "Traiter d'abord la cause de l'humidité : sans cela, le traitement de l'insecte n'a pas d'effet durable.",
      "Assainir le support, purger les parties pourries et rétablir la ventilation.",
      "Bûchage et dépoussiérage des bois attaqués.",
      "Injection dans les pièces de forte section, pulvérisation sur les bois de faible épaisseur.",
      "Pour le mobilier et les ouvrages fins, traitement adapté à la finition, avec essai préalable sur zone peu visible.",
      "Contrôle différé pour vérifier l'arrêt effectif de l'activité.",
    ],
    prevention: [
      "Maintenir une humidité du bois basse : ventilation des caves, vides sanitaires et combles.",
      "Traiter les infiltrations, fuites et remontées capillaires dès qu'elles sont détectées.",
      "Éviter les doublages étanches directement posés sur des bois anciens.",
      "Contrôler les meubles anciens avant de les introduire dans un logement.",
    ],
    confusions: [
      {
        avec: 'Capricorne des maisons',
        difference:
          "Trous ovales de 5 à 10 mm pour le capricorne, ronds et plus petits pour les vrillettes. Le capricorne ne touche que les résineux.",
      },
      {
        avec: 'Lyctus',
        difference:
          "Le lyctus produit une vermoulure de la finesse d'une farine, sans granulés perceptibles, et n'attaque que l'aubier de feuillus riches en amidon, généralement récents.",
      },
    ],
    faq: [
      {
        q: "J'entends un tic-tac dans une poutre : est-ce grave ?",
        a: "Ce bruit évoque la grosse vrillette. Ce qui doit retenir l'attention, ce n'est pas tant l'insecte que ce qu'il signale : la grosse vrillette s'installe dans un bois humide et déjà altéré par un champignon. Il faut donc rechercher l'origine de l'humidité, qui est le vrai problème à traiter.",
      },
      {
        q: "Un meuble attaqué peut-il contaminer la charpente ?",
        a: "C'est possible mais peu fréquent. Les adultes volent et peuvent pondre ailleurs, mais ils recherchent un bois dont les caractéristiques leur conviennent. Un meuble attaqué mérite d'être traité, notamment pour ne pas perdre l'objet lui-même.",
      },
      {
        q: "Comment savoir si l'attaque est encore active ?",
        a: "Nettoyez soigneusement la zone, retirez toute la vermoulure et marquez l'emplacement. Si de la sciure fraîche réapparaît dans les semaines ou les mois suivants, en particulier au printemps, l'attaque est active. Des trous sombres et empoussiérés, sans nouvelle vermoulure, évoquent une attaque ancienne.",
      },
    ],
    pageTraitement: { href: '/traitement-vrillette', label: 'Traitement des vrillettes' },
  },
  {
    slug: 'lyctus',
    name: 'Lyctus',
    scientific: 'Lyctus brunneus, Lyctus linearis',
    aka: ['Vrillette du bois sec', 'Lyctus brun'],
    tagline: "L'insecte des bois récents : il consomme l'amidon de l'aubier de certains feuillus.",
    definition:
      "Le lyctus est un petit coléoptère dont la larve se développe dans l'aubier de feuillus à gros vaisseaux et riches en amidon : chêne, frêne, châtaignier, orme, ainsi que de nombreux bois tropicaux. Sa particularité est de s'attaquer à des bois récents. L'amidon diminue avec le temps, si bien qu'un bois de plus de dix à quinze ans cesse généralement de l'intéresser. On le rencontre donc surtout dans les parquets, lambris, contreplaqués et meubles neufs.",
    adulte:
      "Coléoptère allongé et aplati, brun rougeâtre, de 2,5 à 7 mm. Silhouette étroite, très différente de l'aspect trapu des vrillettes.",
    larve: "Larve blanche, arquée, de petite taille, qui creuse des galeries entièrement remplies d'une poudre très fine.",
    boisCibles:
      "Aubier de feuillus à gros vaisseaux et riches en amidon. Les résineux ne sont jamais attaqués. Le duramen, dépourvu d'amidon, ne l'est pas non plus.",
    essences: ['Chêne (aubier)', 'Frêne', 'Châtaignier', 'Orme', 'Bois tropicaux (méranti, ramin, limba)'],
    trous: "Trous de sortie ronds, nets, de petit diamètre, souvent alignés le long du fil du bois.",
    trousDiam: '1 à 2 mm, ronds',
    vermoulure:
      "C'est le signe le plus caractéristique : une poudre extrêmement fine, impalpable, qui coule comme de la farine et ne crisse pas entre les doigts. Elle s'échappe abondamment des trous et forme des traînées ou de petits tas très clairs.",
    cycle:
      "Cycle court, souvent inférieur à un an dans des conditions favorables, ce qui permet plusieurs générations successives et une dégradation rapide.",
    emergence: "Émergence possible une grande partie de l'année dans un local chauffé.",
    humidite: "Se développe dans du bois sec. L'humidité n'est pas un facteur déclenchant, contrairement aux vrillettes.",
    bruit: null,
    signes: [
      "Poudre très fine, semblable à de la farine, sous un parquet ou un meuble récent",
      "Petits trous ronds de 1 à 2 mm, souvent alignés",
      "Apparition rapide de nouveaux trous, parfois en quelques mois",
      "Attaque limitée aux zones d'aubier, le duramen restant intact",
      "Ouvrages récents concernés : parquet, lambris, contreplaqué, mobilier",
    ],
    zones: [
      'Parquets et lambris en feuillus récents',
      'Contreplaqués et panneaux',
      'Mobilier et agencements neufs',
      'Bois tropicaux mis en œuvre récemment',
      "Pièces de charpente en feuillus comportant de l'aubier",
    ],
    risque:
      "Le lyctus dégrade rarement la structure d'un bâtiment, parce qu'il se limite à l'aubier, qui ne représente qu'une faible part de la section d'une pièce de charpente. En revanche il peut ruiner rapidement un parquet, un lambris ou un agencement neuf, et son cycle court permet une progression beaucoup plus rapide que celle du capricorne.",
    diagnostic: [
      "Identifier l'essence et l'âge de l'ouvrage : un bois récent en feuillu oriente fortement vers le lyctus.",
      "Observer la vermoulure : sa finesse de farine est le critère le plus discriminant.",
      "Vérifier que l'attaque se limite aux zones d'aubier.",
      "Rechercher l'origine du bois : une attaque peut avoir été introduite avec un lot de parquet ou un meuble.",
      "Contrôler les autres ouvrages récents du logement, car la contamination suit souvent la livraison.",
    ],
    traitement: [
      "Déterminer l'étendue exacte de l'ouvrage concerné, ce qui évite de traiter inutilement le reste du bâtiment.",
      "Remplacement des éléments fortement dégradés, souvent plus pertinent qu'un traitement sur un parquet neuf.",
      "Traitement de l'ouvrage conservé par application ou injection selon l'épaisseur.",
      "Vérification de la provenance pour éviter une réintroduction par un nouveau lot.",
      "Contrôle à court terme, le cycle bref permettant de constater rapidement l'efficacité.",
    ],
    prevention: [
      "Privilégier des bois d'aubier purgé pour les ouvrages en feuillus.",
      "Vérifier l'état des lots de parquet, lambris et contreplaqué à la livraison.",
      "Ne pas stocker des bois feuillus récents dans des locaux non contrôlés.",
      "Inspecter le mobilier en bois exotique avant introduction dans le logement.",
    ],
    confusions: [
      {
        avec: 'Petite vrillette',
        difference:
          "Les diamètres de trous se recoupent, mais la vermoulure tranche : granuleuse et crissante pour la vrillette, impalpable comme une farine pour le lyctus.",
      },
      {
        avec: 'Capricorne des maisons',
        difference:
          "Aucune confusion possible sur l'essence : le lyctus ne touche que des feuillus, le capricorne que des résineux. Les trous diffèrent également, ronds de 1 à 2 mm contre ovales de 5 à 10 mm.",
      },
    ],
    faq: [
      {
        q: "Mon parquet neuf est attaqué : d'où cela vient-il ?",
        a: "Le plus souvent, l'attaque est déjà présente dans le bois à la livraison. Le lyctus pond dans les vaisseaux de l'aubier, et le développement se poursuit après la pose. C'est la raison pour laquelle il convient de vérifier l'ensemble du lot, et pas seulement les lames où des trous apparaissent.",
      },
      {
        q: "Faut-il remplacer ou traiter ?",
        a: "Cela dépend de l'étendue et de la nature de l'ouvrage. Sur un parquet neuf largement touché, le remplacement du lot est souvent la solution la plus saine. Sur un ouvrage ponctuel ou difficile à remplacer, le traitement se justifie pleinement.",
      },
      {
        q: "Une vieille charpente en chêne risque-t-elle le lyctus ?",
        a: "Très peu. L'amidon dont la larve a besoin disparaît progressivement, et un chêne ancien n'en contient plus assez. S'il y a une attaque active sur une charpente ancienne en chêne, il faut plutôt envisager la grosse vrillette ou une autre espèce.",
      },
    ],
  },
  {
    slug: 'termites',
    name: 'Termites',
    scientific: 'Reticulitermes spp.',
    aka: ['Termites souterrains', 'Fourmis blanches'],
    tagline: "Des insectes sociaux qui évident le bois de l'intérieur, sans trou ni sciure visible.",
    definition:
      "Les termites sont des insectes sociaux vivant en colonie, organisée en castes. En France métropolitaine, les espèces rencontrées dans les bâtiments sont essentiellement des termites souterrains du genre Reticulitermes : la colonie est établie dans le sol et les ouvriers remontent vers le bois par des galeries. Leur particularité est de consommer le bois de l'intérieur sans produire ni trou de sortie ni vermoulure : une pièce peut être presque entièrement évidée tout en paraissant intacte.",
    adulte:
      "L'ouvrier, forme la plus nombreuse, mesure 4 à 6 mm, blanchâtre et dépourvu d'yeux. Le soldat porte une tête sombre et de fortes mandibules. Les reproducteurs ailés, sombres, apparaissent lors des essaimages.",
    larve: "Les jeunes sont pris en charge par la colonie ; il n'existe pas de larve isolée creusant sa galerie comme chez les coléoptères.",
    boisCibles:
      "Bois de toute nature, feuillus comme résineux, ainsi que de nombreux matériaux cellulosiques : papier, carton, isolants, doublages. Les termites suivent les parties tendres du bois.",
    essences: ['Toutes essences', 'Matériaux cellulosiques (papier, carton, panneaux)'],
    trous:
      "Aucun trou de sortie. C'est le critère de distinction le plus net avec les coléoptères xylophages. Les termites restent à l'abri de la lumière et de l'air sec.",
    trousDiam: 'Aucun',
    vermoulure:
      "Aucune vermoulure rejetée. On observe en revanche des cordonnets de terre, tunnels de quelques millimètres construits le long des maçonneries pour relier le sol au bois en restant à l'abri.",
    cycle:
      "La colonie est pérenne et peut se maintenir pendant de nombreuses années. Elle s'étend progressivement à partir d'un ou plusieurs foyers situés dans le sol.",
    emergence:
      "Essaimage de reproducteurs ailés au printemps ou en été, souvent par temps chaud et humide. C'est parfois la première manifestation visible.",
    humidite: "Les termites souterrains ont besoin d'humidité et d'un contact avec le sol ou une source d'eau.",
    bruit: null,
    signes: [
      "Cordonnets de terre le long d'un mur, d'un soubassement ou d'une cave",
      "Bois qui paraît intact mais sonne creux et s'enfonce sous la pression",
      "Bois feuilleté à l'intérieur, suivant le fil, avec des cloisons de terre",
      "Peinture ou plinthe qui se boursoufle sans cause apparente",
      "Présence d'insectes ailés sombres au printemps, souvent près d'une fenêtre",
      "Papiers, cartons ou isolants dégradés en cave ou en sous-sol",
    ],
    zones: [
      'Pieds de mur, soubassements et caves',
      'Planchers bas et solives en contact avec la maçonnerie',
      'Huisseries et plinthes au niveau du sol',
      'Bois enterrés ou en contact avec le sol',
      'Doublages, isolants et cloisons',
    ],
    risque:
      "Le risque structurel est élevé, d'autant plus que la dégradation reste invisible longtemps. Une colonie peut affecter plusieurs pièces de structure avant que le moindre signe apparaisse en surface. La progression se poursuit tant que la colonie n'est pas traitée, et elle peut s'étendre d'un bâtiment à l'autre.",
    diagnostic: [
      "Rechercher les cordonnets de terre, qui constituent l'indice le plus caractéristique.",
      "Sonder les bois au contact du sol, en cave et en pied de mur, là où la colonie remonte.",
      "Examiner l'intérieur des pièces dégradées : un bois feuilleté avec des cloisons de terre est très évocateur.",
      "Étendre l'examen aux abords : souches, bois stockés au sol, clôtures, arbres morts.",
      "Vérifier auprès de la mairie ou de la préfecture si la commune est comprise dans un arrêté de délimitation.",
    ],
    traitement: [
      "Traitement de sol périmétrique, formant une barrière continue entre la colonie et le bâtiment.",
      "Traitement des bois de structure atteints, après bûchage des parties dégradées.",
      "Systèmes de surveillance et d'élimination par appâts, adaptés lorsque la barrière chimique n'est pas réalisable.",
      "Suppression des sources de contact bois-sol et des réserves de cellulose aux abords.",
      "Traitement de l'humidité, qui conditionne la présence de la colonie.",
      "Suivi dans le temps, indispensable pour vérifier que la colonie ne s'est pas reconstituée.",
    ],
    prevention: [
      "Éviter tout contact direct entre bois et sol : plinthes, huisseries, structures, bois de chauffage.",
      "Ne pas stocker de bois, de cartons ou de papiers à même le sol en cave ou en sous-sol.",
      "Maintenir vides sanitaires et caves ventilés et secs.",
      "Surveiller les abords : souches, vieux poteaux, clôtures en contact avec la terre.",
      "Contrôler périodiquement les pieds de mur et les soubassements.",
    ],
    confusions: [
      {
        avec: 'Fourmis ailées',
        difference:
          "Les termites ailés ont quatre ailes de même longueur, une taille non marquée et des antennes droites en chapelet. Les fourmis ailées ont des ailes inégales, une taille nettement étranglée et des antennes coudées.",
      },
      {
        avec: 'Capricorne et vrillettes',
        difference:
          "Les coléoptères laissent des trous de sortie et de la vermoulure. Les termites ne laissent ni l'un ni l'autre, mais construisent des cordonnets de terre.",
      },
    ],
    faq: [
      {
        q: "Comment savoir si ma commune est concernée par un arrêté termites ?",
        a: "La délimitation des zones contaminées ou susceptibles de l'être relève d'arrêtés préfectoraux, qui évoluent dans le temps. L'information se vérifie auprès de la mairie ou de la préfecture du département concerné. Nous ne pouvons pas nous substituer à cette vérification, et nous n'affirmons jamais à votre place qu'une adresse est ou n'est pas en zone délimitée.",
      },
      {
        q: "Que faut-il faire si l'on découvre des termites ?",
        a: "Dans les zones délimitées par arrêté préfectoral, l'occupant ou le propriétaire est tenu de déclarer la présence de termites en mairie. Indépendamment de cette obligation, il est important de ne pas déranger la zone avant l'intervention : disperser les insectes rend le repérage des cheminements plus difficile.",
      },
      {
        q: "Un traitement anti-termites est-il définitif ?",
        a: "Non, et il faut s'en méfier si on vous l'affirme. Une colonie est un organisme durable, installée dans le sol et parfois étendue au-delà de la parcelle. Un traitement bien conduit interrompt l'attaque et protège le bâtiment, mais il doit s'accompagner d'un suivi permettant de vérifier qu'aucune reprise ne se produit.",
      },
    ],
    pageTraitement: { href: '/traitement-termites', label: 'Traitement des termites' },
  },
];

export const INSECTE_BY_SLUG: Record<string, Insecte> = Object.fromEntries(
  INSECTES.map((i) => [i.slug, i]),
);

/** Tableau comparatif de la page d'accueil et de la page « insectes xylophages ». */
export const COMPARATIF: {
  insecte: string;
  href: string;
  bois: string;
  signes: string;
  zones: string;
}[] = [
  {
    insecte: 'Capricorne des maisons',
    href: '/capricorne-des-maisons',
    bois: "Aubier des résineux : sapin, épicéa, pin",
    signes: "Trous ovales de 5 à 10 mm, peu nombreux ; surface qui ondule ; son creux au choc ; grignotement audible en été",
    zones: 'Charpentes, fermettes, chevrons, planchers résineux',
  },
  {
    insecte: 'Petite vrillette',
    href: '/vrillette',
    bois: 'Aubier des feuillus et résineux, panneaux, contreplaqués',
    signes: "Trous ronds de 1 à 3 mm souvent groupés ; vermoulure granuleuse qui s'écoule",
    zones: 'Meubles, parquets, lambris, escaliers, solives',
  },
  {
    insecte: 'Grosse vrillette',
    href: '/vrillette',
    bois: 'Feuillus, surtout le chêne, préalablement altérés par un champignon',
    signes: "Trous ronds de 3 à 4 mm ; granulés en lentille ; tic-tac au printemps ; bois humide",
    zones: 'Poutres et entraits de chêne, planchers en zone humide',
  },
  {
    insecte: 'Lyctus',
    href: '/lyctus',
    bois: "Aubier de feuillus récents riches en amidon : chêne, frêne, châtaignier, bois tropicaux",
    signes: "Trous ronds de 1 à 2 mm ; vermoulure d'une finesse de farine",
    zones: 'Parquets, lambris, contreplaqués, mobilier récent',
  },
  {
    insecte: 'Termites',
    href: '/termites',
    bois: 'Toutes essences et matériaux cellulosiques',
    signes: "Aucun trou ni vermoulure ; cordonnets de terre ; bois feuilleté et creux ; essaimage au printemps",
    zones: 'Pieds de mur, caves, planchers bas, huisseries, doublages',
  },
];
