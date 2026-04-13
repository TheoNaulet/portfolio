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
  titleGradient?: string;
  showcase?: {
    headline: string;
    highlight: string;
    sub: string;
    highlightColor: string;
  };
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
    titleGradient: "linear-gradient(135deg, #84cc16, #a3e635, #65a30d)",
    image: "/images/logo_travelyzer.png",
    showcase: {
      headline: "Le voyage,",
      highlight: "réinventé.",
      sub: "Décrivez votre destination. L'IA crée votre itinéraire. La communauté vous inspire. Tout est là.",
      highlightColor: "from-[#84cc16] via-[#a3e635] to-[#65a30d]",
    },
    tagline: "La plateforme de voyage AI-native avec réseau social intégré.",
    description:
      "Travelyzer est une plateforme complète qui réinvente la planification de voyage. L'utilisateur décrit son voyage idéal en langage naturel, et l'IA génère un itinéraire complet, personnalisé et modifiable. Un globe 3D interactif permet d'explorer les destinations, un feed social inspire avec les voyages de la communauté, et une carte 'Around Me' révèle les lieux autour de soi. Chaque pays et ville dispose d'une fiche détaillée avec incontournables, budget, météo et conseils pratiques.",
    role: "Créateur & Lead Developer",
    duration: "2025 — Present",
    stack: ["React Native", "Next.js", "TypeScript", "Supabase", "OpenAI API", "MapBox"],
    features: [
      "AI Planner : génération d'itinéraires personnalisés en langage naturel avec globe 3D interactif",
      "Feed social : partage de voyages, likes et recommandations entre voyageurs",
      "Explorer : découverte de destinations par continent, pays et ville avec fiches détaillées",
      "Around Me : carte interactive des lieux d'intérêt autour de la position de l'utilisateur",
      "Fiches pays & villes : budget, météo, incontournables, conseils pratiques et photos",
      "Profil voyageur : historique des trips, destinations favorites et statistiques",
      "Dashboard web : gestion complète des itinéraires et communauté depuis le navigateur",
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
      { type: "macbook", label: "Itinéraire IA", gradient: "from-[#A78BFA] to-[#C084FC]", image: "/images/travelyzer_screens/ai_planner/overview.png" },
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
    titleGradient: "linear-gradient(135deg, #3b82f6, #60a5fa, #2563eb)",
    image: "/images/logo_socare.webp",
    showcase: {
      headline: "La santé,",
      highlight: "connectée.",
      sub: "Télé-expertise entre professionnels. Avis d'experts en temps réel. Suivi patient simplifié.",
      highlightColor: "from-[#3b82f6] via-[#60a5fa] to-[#2563eb]",
    },
    tagline: "Plateforme de télé-expertise médicale pour professionnels de santé.",
    description:
      "Socare connecte les professionnels de santé pour des consultations de télé-expertise sécurisées et conformes aux normes HDS. L'application permet aux médecins de soumettre des cas cliniques, d'obtenir des avis d'experts en temps réel, et de suivre l'évolution des dossiers patients dans une interface pensée pour le milieu hospitalier.",
    role: "Full Stack Developer",
    duration: "2023 — 2025",
    stack: ["React Native", "Nest.js", "MongoDB", "Socket.io", "TypeScript"],
    features: [
      "Messagerie sécurisée entre professionnels de santé",
      "Soumission et suivi de cas cliniques avec pièces jointes",
      "Notifications en temps réel pour les nouvelles expertises",
      "Gestion des rôles et permissions par établissement",
      "Conformité HDS et chiffrement bout en bout",
    ],
    screens: [
      { type: "iphone", label: "Accueil", gradient: "from-[#A78BFA] to-[#C084FC]", image: "/images/sceen_socare.webp" },
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
    titleGradient: "linear-gradient(135deg, #facc15, #fde047, #eab308)",
    image: "/images/logo_cotezilla.png",
    showcase: {
      headline: "Les cotes,",
      highlight: "décryptées.",
      sub: "Détection automatique de value bets. Analyse IA. Bankroll maîtrisée.",
      highlightColor: "from-[#facc15] via-[#fde047] to-[#eab308]",
    },
    tagline: "Dashboard d'analyse et détection de value bets pour le sport.",
    description:
      "Cotezilla est un outil d'intelligence pour les paris sportifs. Il combine analyse quantitative, données en temps réel et détection automatique de value bets sur plusieurs sports. Du scan des matchs du soir au backtest de stratégies, chaque fonctionnalité est pensée pour une prise de décision data-driven avec une gestion de bankroll rigoureuse.",
    role: "Créateur & Lead Developer",
    duration: "2025 — Present",
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS", "Shadcn UI"],
    features: [
      "Dashboard temps réel avec KPIs de performance (ROI, win rate, bankroll)",
      "Détection automatique de value bets multi-sports",
      "Scan IA des matchs du soir avec analyse web en temps réel",
      "Backtest de stratégies sur données historiques",
      "Système de scoring par sport (football, NBA, tennis, rugby, NHL)",
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
    titleGradient: "linear-gradient(135deg, #00e5b4, #34d399, #00b894)",
    image: "/images/H2Air.png",
    showcase: {
      headline: "L'hydrogène,",
      highlight: "simplifié.",
      sub: "Trouvez une station. Suivez votre recharge. Roulez propre.",
      highlightColor: "from-[#00e5b4] via-[#34d399] to-[#00b894]",
    },
    tagline: "Application de suivi et monitoring pour l'industrie de l'hydrogène.",
    description:
      "H2Air est une application de monitoring pensée pour les acteurs de la filière hydrogène. Elle permet de visualiser en temps réel la production, le stockage et la distribution d'hydrogène vert, avec des tableaux de bord clairs et des alertes intelligentes. L'interface épurée traduit des données complexes en insights actionnables.",
    role: "Lead Developer",
    duration: "2025 — Present",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "GraphQL", "D3.js"],
    features: [
      "Dashboard temps réel avec visualisation de production H2",
      "Système d'alertes intelligent basé sur des seuils configurables",
      "Cartographie des sites de production et distribution",
      "Rapports automatisés de performance énergétique",
      "Interface responsive optimisée pour tablettes terrain",
    ],
    screens: [
      { type: "iphone", label: "Around Me", gradient: "from-[#00e5b4] to-[#34d399]", image: "/images/h2air/around_me.PNG" },
      { type: "iphone", label: "Itinéraire", gradient: "from-[#34d399] to-[#00e5b4]", image: "/images/h2air/itinerary.PNG" },
      { type: "iphone", label: "Communauté", gradient: "from-[#00e5b4] to-[#00b894]", image: "/images/h2air/community.PNG" },
      { type: "iphone", label: "Green Impact", gradient: "from-[#00b894] to-[#34d399]", image: "/images/h2air/green_impact.PNG" },
      { type: "iphone", label: "Profil", gradient: "from-[#34d399] to-[#00e5b4]", image: "/images/h2air/profile.PNG" },
      { type: "iphone", label: "Recherche", gradient: "from-[#00e5b4] to-[#00b894]", image: "/images/h2air/search_itinerary.PNG" },
      { type: "iphone", label: "Station", gradient: "from-[#00b894] to-[#34d399]", image: "/images/h2air/sheet_station.PNG" },
      { type: "iphone", label: "Véhicule", gradient: "from-[#34d399] to-[#00b894]", image: "/images/h2air/vehicle_choice.PNG" },
    ],
  },
  {
    name: "Lenymaz",
    slug: "maz-musique",
    year: "2026",
    url: "https://lenymaz.com",
    gradient: "from-[#F59E0B] to-[#FBBF24]",
    titleGradient: "linear-gradient(135deg, #f59e0b, #fbbf24, #d97706)",
    tagline: "Site vitrine pour l'artiste Leny MAZ, produit par Amassa Productions.",
    description:
      "Site vitrine pour l'artiste Leny MAZ (Pop Méditerranée), produit par Amassa Productions. Design immersif mettant en valeur l'univers musical, les formules de prestation, les vidéos et les références. Formulaire de contact intégré via Web3Forms, pages SEO dynamiques par ville et type d'événement, et optimisation performance.",
    role: "Développeur Freelance",
    duration: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Web3Forms", "Vercel"],
    showcase: {
      headline: "Pop",
      highlight: "Méditerranée.",
      sub: "Un site vitrine immersif pour l'artiste Leny MAZ — musique live, formules sur mesure et ambiance solaire.",
      highlightColor: "from-[#f59e0b] to-[#d97706]",
    },
    features: [
      "Design immersif reflétant l'identité Pop Méditerranée de l'artiste",
      "Système de formules de prestation avec recommandation par type d'événement",
      "Pages SEO dynamiques générées par ville et type d'événement",
      "Formulaire de contact intégré via Web3Forms",
      "Section vidéos et références clients",
      "Responsive mobile-first avec hero adaptatif",
    ],
    screens: [
      { type: "macbook", label: "Accueil", gradient: "from-[#F59E0B] to-[#FBBF24]", image: "/images/lenymaz/hero.png" },
      { type: "macbook", label: "Formules", gradient: "from-[#d97706] to-[#F59E0B]", image: "/images/lenymaz/formules.png" },
      { type: "macbook", label: "Collection", gradient: "from-[#F59E0B] to-[#d97706]", image: "/images/lenymaz/collection.png" },
      { type: "iphone", label: "Mobile", gradient: "from-[#FBBF24] to-[#F59E0B]", image: "/images/lenymaz/mobile-hero.png" },
    ],
  },
  {
    name: "Kasha",
    slug: "kasha",
    year: "2026",
    url: "https://theonaulet.github.io/kasha-dashboard",
    gradient: "from-[#7C3AED] to-[#00C48C]",
    titleGradient: "linear-gradient(135deg, #7C3AED, #00C48C, #1A0A2E)",
    image: "/images/kasha/kasha-logo.png",
    tagline: "Plateforme cashback nouvelle génération — app grand public, dashboard commerçant et landing page.",
    description:
      "Kasha est une plateforme cashback nouvelle génération. Côté consommateur, l'app mobile est connectée directement à la carte bancaire : pas d'activation, chaque achat chez un partenaire génère du cashback automatiquement. Côté commerçant, un dashboard permet de mieux connaître sa clientèle (démographie, rétention, panier moyen), de créer des campagnes cashback avec ROI intégré et de fidéliser. Une landing page présente la plateforme aux deux audiences.",
    role: "Créateur & Lead Developer",
    duration: "2026",
    stack: ["React Native", "Expo", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Recharts", "Zustand"],
    showcase: {
      headline: "Cashback",
      highlight: "automatique.",
      sub: "Connecté à ta CB. Pas d'activation. Tu achètes, tu gagnes. Le commerçant connaît ses clients.",
      highlightColor: "from-[#7C3AED] to-[#00C48C]",
    },
    features: [
      "App mobile : cashback automatique connecté à la CB, sans activation",
      "Découverte de commerçants partenaires avec géolocalisation et boosts temporaires",
      "Wallet intégré avec retraits SEPA, bons d'achat et niveaux de fidélité",
      "Dashboard commerçant : analytics client, démographie, rétention, risque de churn",
      "Création de campagnes cashback (standard, boost, acquisition) avec calculateur de ROI",
      "Landing page conversion-oriented pour commerçants et utilisateurs",
    ],
    screens: [
      { type: "macbook", label: "Dashboard", gradient: "from-[#7C3AED] to-[#6C3AED]", image: "/images/kasha/dashboard1.png" },
      { type: "macbook", label: "Clients", gradient: "from-[#6C3AED] to-[#7C3AED]", image: "/images/kasha/dashboard2.png" },
      { type: "macbook", label: "Analytics", gradient: "from-[#7C3AED] to-[#5C3AED]", image: "/images/kasha/dashboard3.png" },
      { type: "macbook", label: "Campagnes", gradient: "from-[#5C3AED] to-[#7C3AED]", image: "/images/kasha/dashboard4.png" },
      { type: "macbook", label: "Landing Hero", gradient: "from-[#00C48C] to-[#7C3AED]", image: "/images/kasha/landing1.png" },
      { type: "macbook", label: "Comment ça marche", gradient: "from-[#7C3AED] to-[#00C48C]", image: "/images/kasha/landing2.png" },
      { type: "macbook", label: "Fonctionnalités", gradient: "from-[#00C48C] to-[#6C3AED]", image: "/images/kasha/landing3.png" },
      { type: "macbook", label: "Features App", gradient: "from-[#6C3AED] to-[#00C48C]", image: "/images/kasha/landing4.png" },
      { type: "iphone", label: "Accueil", gradient: "from-[#7C3AED] to-[#00C48C]", image: "/images/kasha/IMG_4494.PNG" },
      { type: "iphone", label: "Marchand", gradient: "from-[#00C48C] to-[#7C3AED]", image: "/images/kasha/IMG_4495.PNG" },
      { type: "iphone", label: "Wallet", gradient: "from-[#7C3AED] to-[#6C3AED]", image: "/images/kasha/IMG_4496.PNG" },
      { type: "iphone", label: "Profil", gradient: "from-[#6C3AED] to-[#7C3AED]", image: "/images/kasha/IMG_4497.PNG" },
      { type: "iphone", label: "Explorer", gradient: "from-[#7C3AED] to-[#00C48C]", image: "/images/kasha/IMG_4498.PNG" },
      { type: "iphone", label: "Carte", gradient: "from-[#00C48C] to-[#6C3AED]", image: "/images/kasha/IMG_4499.PNG" },
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
    role: "Developpeur Full Stack — Alternance",
    period: "Aou 2023 — Sep 2025",
    tags: ["React Native", "Next.js", "Tamagui", "TypeScript"],
    accentColor: "#6D28D9",
    logo: "/images/Sonup.png",
    context: "Sonup crée des solutions de dépistage de problèmes auditifs. En 2 ans d'alternance, j'ai travaillé sur leur produit phare : Socare, une plateforme de téléexpertise entre professionnels de santé.",
    description:
      "Mon principal projet chez Sonup a été Socare — une plateforme de téléexpertise médicale disponible en webapp et en applications natives (iOS & Android). Grâce à Tamagui, on gérait le web et le natif depuis une seule codebase. J'ai eu un rôle polyvalent : développement front et back, maquettage d'interfaces, missions de chef de projet, et encadrement de stagiaires.",
    missions: [
      "Développement de la plateforme Socare (webapp + apps natives iOS/Android)",
      "Architecture cross-platform avec Tamagui pour une codebase unique web/mobile",
      "Maquettage et design d'interfaces utilisateur",
      "Missions de chef de projet : planification, suivi, coordination",
      "Encadrement et mentorat de stagiaires",
      "Intégration d'APIs tierces et développement backend",
    ],
    achievements: [
      "Socare disponible sur l'App Store et Google Play",
      "Codebase unifiée web/mobile grâce à Tamagui",
      "2 ans d'alternance avec montée en responsabilités progressive",
      "Gestion de stagiaires et prise de rôle chef de projet",
    ],
  },
  {
    initials: "vT",
    slug: "viatransit",
    name: "viaTransit",
    role: "Developpeur — Stage",
    period: "Nov 2022 — Mar 2023",
    tags: ["Next.js", "Strapi", "Node.js", "Mapbox"],
    accentColor: "#0D9488",
    logo: "/images/viatransit.png",
    context: "Startup de mobilite urbaine fournissant des donnees de transport en temps reel aux collectivites et usagers. J'y ai effectue mon stage en tant que developpeur.",
    description:
      "Chez viaTransit, j'ai réalisé un script d'automatisation via Mapbox permettant la récupération de données de pistes cyclables pour l'application mobile. J'ai aussi travaillé sur la version précédente du site vitrine avec Strapi et Next.js.",
    missions: [
      "Développement d'un script d'automatisation Mapbox pour la récupération de données de pistes cyclables",
      "Travail sur le site vitrine viaTransit avec Next.js et Strapi",
      "Intégration de données géographiques dans l'application mobile",
    ],
    achievements: [
      "Script d'automatisation Mapbox fonctionnel integre a l'application",
      "Contribution au site vitrine viatransit.fr",
    ],
  },
  {
    initials: "TN",
    slug: "tn-agency",
    name: "TN Agency",
    role: "Créateur & Fondateur",
    period: "Sep 2023 — Present",
    tags: ["WordPress", "Webflow", "React"],
    accentColor: "#B45309",
    context: "Studio freelance de développement web et mobile, au service de startups et PME.",
    description:
      "TN Agency est mon studio freelance à travers lequel j'accompagne des startups et des PME dans la conception et le développement de leurs produits digitaux. Du site vitrine au SaaS complet, je gère chaque projet de A à Z : cadrage, design, développement et mise en production.",
    missions: [
      "Cadrage technique et fonctionnel avec les clients",
      "Design UI/UX et prototypage sur Figma",
      "Développement de sites WordPress et Webflow sur-mesure",
      "Création d'applications React / Next.js pour des besoins spécifiques",
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
      "Contribution au développement du réseau de partenaires",
      "Création de supports commerciaux pour l'équipe",
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
      "Création de supports commerciaux utilisés par l'équipe après mon départ",
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
    degree: "Expert en développement logiciel",
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
