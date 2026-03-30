export interface Project {
  name: string;
  slug: string;
  year: string;
  url: string;
  gradient: string;
  tagline: string;
  description: string;
  role: string;
  duration: string;
  stack: string[];
  features: string[];
  status?: "in-progress";
  image?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  screens: {
    type: "iphone" | "macbook";
    label: string;
    gradient: string;
    image?: string;
  }[];
}

export const projects: Project[] = [
  {
    name: "Travelyzer",
    slug: "travelyzer",
    year: "2025 — 2026",
    url: "https://gotravelyzer.com",
    appStoreUrl: "https://apps.apple.com/fr/app/travelyzer/id6753188242",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.travelyzer.app&hl=fr",
    gradient: "from-[#C084FC] to-[#F0ABFC]",
    image: "/images/logo_travelyzer.png",
    tagline: "La plateforme de voyage AI-native avec reseau social integre.",
    description:
      "Travelyzer est une plateforme complete qui reinvente la planification de voyage. L'utilisateur decrit son voyage ideal en langage naturel, et l'IA genere un itineraire complet, personnalise et modifiable. Un globe 3D interactif permet d'explorer les destinations, un feed social inspire avec les voyages de la communaute, et une carte 'Around Me' revele les lieux autour de soi. Chaque pays et ville dispose d'une fiche detaillee avec incontournables, budget, meteo et conseils pratiques.",
    role: "Createur & Lead Developer",
    duration: "2025 — Present",
    stack: ["React Native", "Next.js", "TypeScript", "Supabase", "OpenAI API", "MapBox"],
    features: [
      "AI Planner : generation d'itineraires personnalises en langage naturel avec globe 3D interactif",
      "Feed social : partage de voyages, likes et recommendations entre voyageurs",
      "Explorer : decouverte de destinations par continent, pays et ville avec fiches detaillees",
      "Around Me : carte interactive des lieux d'interet autour de la position de l'utilisateur",
      "Fiches pays & villes : budget, meteo, incontournables, conseils pratiques et photos",
      "Profil voyageur : historique des trips, destinations favorites et statistiques",
      "Dashboard web : gestion complete des itineraires et communaute depuis le navigateur",
    ],
    screens: [
      { type: "iphone", label: "AI Planner", gradient: "from-[#C084FC] to-[#F0ABFC]", image: "/images/travelyzer_screens/mobile/AI_Mobile.PNG" },
      { type: "iphone", label: "Explorer", gradient: "from-[#A78BFA] to-[#C084FC]", image: "/images/travelyzer_screens/mobile/Explore_mobile.PNG" },
      { type: "iphone", label: "Feed", gradient: "from-[#C084FC] to-[#F0ABFC]", image: "/images/travelyzer_screens/mobile/feed_mobile.PNG" },
      { type: "iphone", label: "Around Me", gradient: "from-[#F0ABFC] to-[#A78BFA]", image: "/images/travelyzer_screens/mobile/around_me_mobile.PNG" },
      { type: "iphone", label: "Profil", gradient: "from-[#A78BFA] to-[#F0ABFC]", image: "/images/travelyzer_screens/mobile/Profile_mobile.PNG" },
      { type: "iphone", label: "Pays", gradient: "from-[#C084FC] to-[#A78BFA]", image: "/images/travelyzer_screens/mobile/country_sheet_mobile.PNG" },
      { type: "iphone", label: "Ville", gradient: "from-[#F0ABFC] to-[#C084FC]", image: "/images/travelyzer_screens/mobile/City_sheet_mobile.PNG" },
      { type: "macbook", label: "AI Planner", gradient: "from-[#C084FC] to-[#F0ABFC]", image: "/images/travelyzer_screens/ai_planner/home.png" },
      { type: "macbook", label: "Itineraire IA", gradient: "from-[#A78BFA] to-[#C084FC]", image: "/images/travelyzer_screens/ai_planner/overview.png" },
      { type: "macbook", label: "Dashboard", gradient: "from-[#F0ABFC] to-[#A78BFA]", image: "/images/travelyzer_screens/dashboard/dasjboard_global.png" },
      { type: "macbook", label: "Pays", gradient: "from-[#C084FC] to-[#A78BFA]", image: "/images/travelyzer_screens/dashboard/country_.png" },
      { type: "macbook", label: "Generations IA", gradient: "from-[#A78BFA] to-[#F0ABFC]", image: "/images/travelyzer_screens/dashboard/manage_generations.png" },
      { type: "macbook", label: "Moderation", gradient: "from-[#C084FC] to-[#F0ABFC]", image: "/images/travelyzer_screens/dashboard/manage_moderation.png" },
    ],
  },
  {
    name: "Socare",
    slug: "socare",
    year: "2023",
    url: "https://app.socare.fr",
    gradient: "from-[#A78BFA] to-[#C084FC]",
    image: "/images/logo_socare.webp",
    tagline: "Plateforme de tele-expertise medicale pour professionnels de sante.",
    description:
      "Socare connecte les professionnels de sante pour des consultations de tele-expertise securisees et conformes aux normes HDS. L'application permet aux medecins de soumettre des cas cliniques, d'obtenir des avis d'experts en temps reel, et de suivre l'evolution des dossiers patients dans une interface pensee pour le milieu hospitalier.",
    role: "Full Stack Developer",
    duration: "2023 — 2025",
    stack: ["React Native", "Nest.js", "MongoDB", "Socket.io", "TypeScript"],
    features: [
      "Messagerie securisee entre professionnels de sante",
      "Soumission et suivi de cas cliniques avec pieces jointes",
      "Notifications en temps reel pour les nouvelles expertises",
      "Gestion des roles et permissions par etablissement",
      "Conformite HDS et chiffrement bout en bout",
    ],
    screens: [
      { type: "iphone", label: "Cas clinique", gradient: "from-[#A78BFA] to-[#C084FC]" },
      { type: "iphone", label: "Messagerie", gradient: "from-[#C084FC] to-[#A78BFA]" },
      { type: "macbook", label: "Dashboard", gradient: "from-[#A78BFA] to-[#F0ABFC]" },
      { type: "iphone", label: "Notifications", gradient: "from-[#F0ABFC] to-[#A78BFA]" },
    ],
  },
  {
    name: "Cotezilla",
    slug: "cotezilla",
    year: "2025",
    url: "#",
    gradient: "from-[#34D399] to-[#6EE7B7]",
    image: "/images/logo_cotezilla.png",
    tagline: "Dashboard d'analyse et detection de value bets pour le sport.",
    description:
      "Cotezilla est un outil d'intelligence pour les paris sportifs. Il combine analyse quantitative, donnees en temps reel et detection automatique de value bets sur plusieurs sports. Du scan des matchs du soir au backtest de strategies, chaque fonctionnalite est pensee pour une prise de decision data-driven avec une gestion de bankroll rigoureuse.",
    role: "Createur & Lead Developer",
    duration: "2025 — Present",
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS", "Shadcn UI"],
    features: [
      "Dashboard temps reel avec KPIs de performance (ROI, win rate, bankroll)",
      "Detection automatique de value bets multi-sports",
      "Scan IA des matchs du soir avec analyse web en temps reel",
      "Backtest de strategies sur donnees historiques",
      "Systeme de scoring par sport (football, NBA, tennis, rugby, NHL)",
    ],
    screens: [
      { type: "macbook", label: "Dashboard", gradient: "from-[#34D399] to-[#6EE7B7]" },
      { type: "macbook", label: "Value Bets", gradient: "from-[#6EE7B7] to-[#34D399]" },
      { type: "macbook", label: "Scan", gradient: "from-[#34D399] to-[#A7F3D0]" },
      { type: "macbook", label: "Backtest", gradient: "from-[#A7F3D0] to-[#34D399]" },
    ],
  },
  {
    name: "H2Air",
    slug: "h2air",
    year: "2025",
    url: "#",
    gradient: "from-[#F0ABFC] to-[#A78BFA]",
    image: "/images/H2Air.png",
    tagline: "Application de suivi et monitoring pour l'industrie de l'hydrogene.",
    description:
      "H2Air est une application de monitoring pensee pour les acteurs de la filiere hydrogene. Elle permet de visualiser en temps reel la production, le stockage et la distribution d'hydrogene vert, avec des tableaux de bord clairs et des alertes intelligentes. L'interface epuree traduit des donnees complexes en insights actionnables.",
    role: "Lead Developer",
    duration: "2025 — Present",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "GraphQL", "D3.js"],
    features: [
      "Dashboard temps reel avec visualisation de production H2",
      "Systeme d'alertes intelligent base sur des seuils configurables",
      "Cartographie des sites de production et distribution",
      "Rapports automatises de performance energetique",
      "Interface responsive optimisee pour tablettes terrain",
    ],
    screens: [
      { type: "macbook", label: "Dashboard", gradient: "from-[#F0ABFC] to-[#A78BFA]" },
      { type: "iphone", label: "Alertes", gradient: "from-[#A78BFA] to-[#F0ABFC]" },
      { type: "macbook", label: "Rapports", gradient: "from-[#C084FC] to-[#F0ABFC]" },
      { type: "iphone", label: "Carte", gradient: "from-[#F0ABFC] to-[#C084FC]" },
    ],
  },
  {
    name: "Maz Musique",
    slug: "maz-musique",
    year: "2025",
    url: "#",
    gradient: "from-[#F59E0B] to-[#FBBF24]",
    tagline: "Site vitrine pour un artiste / studio de musique.",
    description:
      "Site vitrine moderne pour Maz Musique, concu pour mettre en valeur l'univers artistique, les productions et les services proposes. Un design immersif au service de l'identite musicale.",
    role: "Developpeur Freelance",
    duration: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Design immersif refletant l'identite musicale",
      "Presentation des services et productions",
      "Optimisation SEO et performance",
    ],
    status: "in-progress",
    screens: [
      { type: "macbook", label: "Accueil", gradient: "from-[#F59E0B] to-[#FBBF24]" },
      { type: "iphone", label: "Mobile", gradient: "from-[#FBBF24] to-[#F59E0B]" },
    ],
  },
  {
    name: "Fullboost Guillaume",
    slug: "fullboost-guillaume",
    year: "2025",
    url: "#",
    gradient: "from-[#EF4444] to-[#F97316]",
    tagline: "Site vitrine pour un coach sportif / preparateur physique.",
    description:
      "Site vitrine pour Fullboost Guillaume, concu pour presenter les services de coaching sportif et preparation physique. Une interface energique et professionnelle qui reflete l'intensite du coaching propose.",
    role: "Developpeur Freelance",
    duration: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Presentation des programmes et services de coaching",
      "Design dynamique et sportif",
      "Optimisation SEO et performance",
    ],
    status: "in-progress",
    screens: [
      { type: "macbook", label: "Accueil", gradient: "from-[#EF4444] to-[#F97316]" },
      { type: "iphone", label: "Mobile", gradient: "from-[#F97316] to-[#EF4444]" },
    ],
  },
];

export interface Company {
  initials: string;
  slug: string;
  name: string;
  role: string;
  period: string;
  tags: string[];
  accentColor: string;
  logo?: string;
  description: string;
  missions: string[];
  achievements: string[];
  context: string;
}

export const companies: Company[] = [
  {
    initials: "SN",
    slug: "sonup",
    name: "Sonup",
    role: "Full Stack Developer",
    period: "Aou 2023 — Sep 2025",
    tags: ["React Native", "Next.js", "Tamagui"],
    accentColor: "#6D28D9",
    logo: "/images/Sonup.png",
    context: "Startup musicale qui connecte les artistes emergents avec leur audience via une plateforme mobile et web.",
    description:
      "Chez Sonup, j'ai ete le developpeur principal en charge de l'application mobile et du site web, partageant la meme codebase grace a React Native et Next.js avec Tamagui. J'ai travaille en etroite collaboration avec le CTO et l'equipe produit pour delivrer des fonctionnalites ambitieuses dans des cycles courts.",
    missions: [
      "Developpement de l'application mobile iOS/Android avec React Native",
      "Creation du site web avec Next.js partageant la meme codebase",
      "Mise en place du design system avec Tamagui pour le cross-platform",
      "Integration d'APIs tierces (paiement, streaming, analytics)",
      "Gestion du deploiement CI/CD et de l'infrastructure",
      "Participation aux reviews de code et mentorat junior",
    ],
    achievements: [
      "Codebase unifiee mobile/web avec 85% de code partage",
      "Reduction du temps de build de 60% avec l'optimisation Tamagui",
      "Mise en production de 12+ fonctionnalites majeures en 2 ans",
      "Score Lighthouse de 95+ sur le site web",
      "Temps de crash-free rate > 99.5% sur mobile",
    ],
  },
  {
    initials: "vT",
    slug: "viatransit",
    name: "viaTransit",
    role: "Full Stack Developer",
    period: "Nov 2022 — Mar 2023",
    tags: ["Next.js", "Strapi", "Node.js"],
    accentColor: "#0D9488",
    logo: "/images/viatransit.png",
    context: "Startup de mobilite urbaine fournissant des donnees de transport en temps reel aux collectivites et usagers.",
    description:
      "Chez viaTransit, j'ai contribue au developpement de la plateforme web et du back-office de gestion des donnees de transport. J'ai travaille sur l'interface utilisateur en Next.js et sur le CMS Strapi pour permettre aux equipes metier de gerer le contenu de maniere autonome.",
    missions: [
      "Developpement front-end de la plateforme avec Next.js",
      "Configuration et personnalisation du CMS Strapi",
      "Creation d'APIs Node.js pour l'aggregation de donnees transport",
      "Integration de cartes interactives avec donnees temps reel",
      "Optimisation des performances et du SEO",
    ],
    achievements: [
      "Livraison de la V2 de la plateforme dans les delais",
      "Interface d'administration complete permettant l'autonomie des equipes",
      "Amelioration du temps de chargement de 40%",
      "Mise en place de tests automatises sur les endpoints critiques",
    ],
  },
  {
    initials: "TN",
    slug: "tn-agency",
    name: "TN Agency",
    role: "Createur & Fondateur",
    period: "Sep 2023 — Present",
    tags: ["WordPress", "Webflow", "React"],
    accentColor: "#B45309",
    context: "Studio freelance de developpement web et mobile, au service de startups et PME.",
    description:
      "TN Agency est mon studio freelance a travers lequel j'accompagne des startups et des PME dans la conception et le developpement de leurs produits digitaux. Du site vitrine au SaaS complet, je gere chaque projet de A a Z : cadrage, design, developpement et mise en production.",
    missions: [
      "Cadrage technique et fonctionnel avec les clients",
      "Design UI/UX et prototypage sur Figma",
      "Developpement de sites WordPress et Webflow sur-mesure",
      "Creation d'applications React / Next.js pour des besoins specifiques",
      "Maintenance, hebergement et suivi post-livraison",
    ],
    achievements: [
      "15+ projets livres pour des clients varies",
      "Taux de satisfaction client de 100%",
      "Clients fideles avec missions recurrentes",
      "Sites optimises SEO avec des resultats mesurables en trafic organique",
    ],
  },
  {
    initials: "BL",
    slug: "boulanger",
    name: "Boulanger",
    role: "Conseiller Multimedia",
    period: "Nov 2021 — Jan 2022",
    tags: ["Vente", "Tech"],
    accentColor: "#DC2626",
    logo: "/images/boulanger.jpg",
    context: "Enseigne nationale de distribution specialisee en produits multimedia et electromenager.",
    description:
      "Chez Boulanger, j'ai occupe le poste de conseiller multimedia au rayon informatique et telephonie. Cette experience m'a permis de developper mes competences relationnelles et ma capacite a vulgariser des sujets techniques pour un public non-initie.",
    missions: [
      "Conseil et vente de produits multimedia (PC, smartphones, tablettes)",
      "Accompagnement des clients dans le choix de solutions adaptees",
      "Mise en rayon et gestion des stocks",
      "Formation des clients sur les produits achetes",
    ],
    achievements: [
      "Objectifs de vente atteints chaque mois",
      "Retours clients positifs sur la qualite du conseil",
      "Competences en communication et pedagogie technique renforcees",
    ],
  },
  {
    initials: "FCS",
    slug: "fc-sete",
    name: "FC Sete",
    role: "Assistant Commercial",
    period: "Mar 2020 — Jul 2020",
    tags: ["Sport", "Commercial"],
    accentColor: "#1D4ED8",
    logo: "/images/logo_fc_sete.jpg",
    context: "Club de football professionnel base a Sete, sur le littoral mediterraneen.",
    description:
      "Au sein du FC Sete, j'ai participe au service commercial du club. Cette experience m'a permis de developper mes competences en relation client, prospection et gestion evenementielle dans le milieu sportif.",
    missions: [
      "Gestion et suivi des partenariats commerciaux du club",
      "Prospection de nouveaux partenaires et sponsors",
      "Preparation de supports de communication et presentations",
      "Accueil et accompagnement des partenaires les jours de match",
    ],
    achievements: [
      "Contribution au developpement du reseau de partenaires",
      "Creation de supports commerciaux pour l'equipe",
      "Competences en relation client et prospection renforcees",
    ],
  },
  {
    initials: "TFC",
    slug: "toulouse-fc",
    name: "Toulouse FC",
    role: "Assistant Commercial",
    period: "2019 — 2020",
    tags: ["Sport", "Events", "Commercial"],
    accentColor: "#7B2D8E",
    logo: "/images/TFC.jpg",
    context: "Club de football professionnel de Ligue 1, base a Toulouse.",
    description:
      "Au sein du service commercial du Toulouse Football Club, j'ai contribue a la gestion des partenariats et a l'organisation d'evenements. J'ai decouvert le fonctionnement d'une structure sportive professionnelle et developpe mes competences en relation client et en gestion evenementielle.",
    missions: [
      "Gestion et suivi des partenariats commerciaux du club",
      "Organisation logistique d'evenements corporate au Stadium",
      "Prospection de nouveaux partenaires et sponsors",
      "Preparation de dossiers et presentations commerciales",
      "Accueil et accompagnement des partenaires les jours de match",
    ],
    achievements: [
      "Contribution a la signature de nouveaux partenariats",
      "Organisation reussie d'evenements hospitality pour 200+ invites",
      "Creation de supports commerciaux utilises par l'equipe apres mon depart",
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  level?: string;
  logo?: string;
}

export const education: Education[] = [
  {
    degree: "Expert en developpement logiciel",
    school: "Openclassrooms",
    location: "Remote",
    period: "Sep 2024 — Sep 2025",
    level: "Titre RNCP Niveau 7",
    logo: "/images/openclassrooms.png",
  },
  {
    degree: "Bachelor Concepteur Developpeur d'Applications",
    school: "CESI",
    location: "Montpellier",
    period: "Oct 2023 — Sep 2024",
    logo: "/images/Logo_cesi_2022.png",
  },
  {
    degree: "Titre Developpeur Web et Web-mobile",
    school: "AFPA",
    location: "St Jean de Vedas",
    period: "Avr 2022 — Jui 2023",
    logo: "/images/125664_t6.jpg",
  },
  {
    degree: "Bachelor Sport Event & Management",
    school: "ISEFAC",
    location: "Montpellier",
    period: "Sep 2018 — Jui 2023",
    logo: "/images/Logo-ISEFAC-Bachelor.jpg",
  },
];

export const testimonials = [
  {
    initials: "JD",
    name: "Jean Dupont",
    role: "CTO · Sonup",
    text: "Theo a su prendre le projet en main de A a Z. Son sens du detail dans les interfaces et sa capacite a livrer vite, sans sacrifier la qualite, ont ete determinants pour notre app.",
    gradient: "from-[#C084FC] to-[#F0ABFC]",
  },
  {
    initials: "ML",
    name: "Marie Laurent",
    role: "Fondatrice · Studio ML",
    text: "Rare de trouver un developpeur qui comprend aussi bien le design. Theo pense produit, pense utilisateur — le resultat est toujours propre, bien architecture et beau a voir.",
    gradient: "from-[#A78BFA] to-[#C084FC]",
  },
];

export const socialLinks = [
  { label: "GITHUB", url: "https://github.com/TheoNaulet" },
  { label: "LINKEDIN", url: "https://linkedin.com/in/theo-naulet" },
];

export const navLinks = [
  { label: "Projets", href: "#works" },
  { label: "A propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];
