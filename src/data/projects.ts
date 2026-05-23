import type { Locale } from "../lib/i18n";

export type Localized<T> = { fr: T; en: T };

export type ProjectLink = { label: Localized<string>; href: string };

export type Project = {
  slug: string;
  title: string;
  company: Localized<string>;
  role: Localized<string>;
  description: Localized<string>;
  tech: string[];
  links?: ProjectLink[];
  context?: Localized<string>;
  features?: Localized<string[]>;
};

export const PROJECTS: Project[] = [
  {
    slug: "iyvo",
    title: "IYVO",
    company: { fr: "CODEZYS", en: "CODEZYS" },
    role: { fr: "Lead Developer", en: "Lead Developer" },
    description: {
      fr: "Plateforme sans commission réunissant entreprises, ESN et experts pour les missions",
      en: "Commission-free platform connecting companies, consulting firms, and experts for missions",
    },
    tech: ["ReactJS", "Redux", "Node.js", "MongoDB", "AWS", "Python", "FastAPI", "Laravel"],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://iyvo.fr/" }],
    context: {
      fr: "Conception et développement d’une plateforme orientée marketplace, avec une API robuste, un front réactif et une architecture prête à scaler. Mission réalisée via ETS HTTC.",
      en: "Design and development of a marketplace-oriented platform with a robust API, a responsive UI, and a scalable architecture. Mission delivered via ETS HTTC.",
    },
    features: {
      fr: [
        "Gestion des profils et des missions",
        "Moteur de recherche et filtres",
        "Workflow de candidature et suivi",
        "Tableaux de bord et métriques",
      ],
      en: [
        "Profiles and missions management",
        "Search engine and filters",
        "Application workflow and tracking",
        "Dashboards and metrics",
      ],
    },
  },
  {
    slug: "diary-lingo",
    title: "Diary Lingo",
    company: { fr: "CODEZYS", en: "CODEZYS" },
    role: { fr: "Full-Stack Developer", en: "Full-Stack Developer" },
    description: {
      fr: "Application web de traduction avec assistance pédagogique",
      en: "Translation web app with learning assistance",
    },
    tech: ["ReactJS", "Redux", "Node.js", "Express", "MongoDB", "AWS DocumentDB"],
    context: {
      fr: "Produit orienté apprentissage : traductions, accompagnement, et expérience fluide côté utilisateur. Mission réalisée via ETS HTTC.",
      en: "Learning-oriented product: translations, guidance, and a smooth user experience. Mission delivered via ETS HTTC.",
    },
    features: {
      fr: ["Traduction assistée", "Interface pédagogique", "Gestion des comptes", "Historique et favoris"],
      en: ["Assisted translation", "Learning UI", "Account management", "History and favorites"],
    },
  },
  {
    slug: "studa",
    title: "Studa",
    company: { fr: "CODEZYS", en: "CODEZYS" },
    role: { fr: "Full-Stack Developer", en: "Full-Stack Developer" },
    description: {
      fr: "Application web et mobile d'évaluation scolaire par matière",
      en: "Web and mobile app for subject-based school assessments",
    },
    tech: ["ReactJS", "Redux", "Flutter", "Node.js", "GitLab CI/CD"],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://studa.io/" }],
    context: {
      fr: "Application multi-plateforme pour centraliser les évaluations, améliorer la traçabilité et simplifier le suivi des performances. Mission réalisée via ETS HTTC.",
      en: "Multi-platform app to centralize assessments, improve traceability, and simplify performance tracking. Mission delivered via ETS HTTC.",
    },
    features: {
      fr: ["Évaluations par matière", "Tableaux de bord", "Gestion des profils", "Synchronisation web & mobile"],
      en: ["Subject-based assessments", "Dashboards", "Profile management", "Web & mobile sync"],
    },
  },
  {
    slug: "theshops",
    title: "TheShops",
    company: { fr: "Projet Mobile", en: "Mobile Project" },
    role: { fr: "Full-Stack Developer", en: "Full-Stack Developer" },
    description: { fr: "Application e-commerce disponible sur Android & iOS", en: "E-commerce app available on Android & iOS" },
    tech: ["Flutter (Provider)", "Python (FastAPI)", "Mobile", "API REST"],
    links: [
      { label: { fr: "Google Play", en: "Google Play" }, href: "https://play.google.com/store/search?q=theshops&c=apps" },
      { label: { fr: "App Store", en: "App Store" }, href: "https://apps.apple.com/fr/search?term=theshops" },
    ],
    context: {
      fr: "Application mobile e-commerce avec catalogue, parcours d’achat et backend API sécurisé pour piloter les opérations.",
      en: "Mobile e-commerce app with catalog, checkout flow, and a secured API backend to run operations.",
    },
    features: {
      fr: ["Catalogue & recherche", "Panier & commandes", "Comptes utilisateurs", "API REST FastAPI"],
      en: ["Catalog & search", "Cart & orders", "User accounts", "FastAPI REST API"],
    },
  },
  {
    slug: "ticket-flow",
    title: "TicketFlow",
    company: { fr: "GitHub", en: "GitHub" },
    role: { fr: "Backend / Microservices", en: "Backend / Microservices" },
    description: {
      fr: "Mini-système de helpdesk en architecture microservices (tickets, notifications, pièces jointes).",
      en: "Mini helpdesk system built with a microservices architecture (tickets, notifications, attachments).",
    },
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Cloud (Gateway, Config Server, Eureka)",
      "PostgreSQL",
      "Keycloak (OAuth2/JWT)",
      "Kafka",
      "Docker Compose",
      "Maven",
    ],
    links: [{ label: { fr: "GitHub", en: "GitHub" }, href: "https://github.com/dev-kadjio/ticket-flow" }],
    context: {
      fr: "Architecture microservices résiliente avec discovery, configuration centralisée, sécurité JWT et communication asynchrone.",
      en: "Resilient microservices architecture with service discovery, centralized config, JWT security, and async communication.",
    },
    features: {
      fr: [
        "API Gateway (routing, policies)",
        "Discovery (Eureka) et Config Server",
        "Sécurité OAuth2/JWT (Keycloak)",
        "Services découplés + Kafka pour l’event-driven",
        "PostgreSQL par domaine",
      ],
      en: [
        "API Gateway (routing, policies)",
        "Service discovery (Eureka) & Config Server",
        "OAuth2/JWT security (Keycloak)",
        "Decoupled services + Kafka (event-driven)",
        "PostgreSQL per domain",
      ],
    },
  },
  {
    slug: "stafi-placement",
    title: "Stafi Placement",
    company: { fr: "SMARTCODE Group", en: "SMARTCODE Group" },
    role: { fr: "Full-Stack Developer", en: "Full-Stack Developer" },
    description: {
      fr: "Plateforme de mise en relation talents-entreprises au Canada",
      en: "Talent-to-company matching platform in Canada",
    },
    tech: ["Node.js", "EJS", "GitLab"],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://ciblestafi.groupe-cible.ca/" }],
    context: {
      fr: "Plateforme de mise en relation avec parcours simple, rapide et orienté conversion.",
      en: "Matching platform with a simple, fast, conversion-focused journey.",
    },
    features: {
      fr: ["Publication d’offres", "Candidatures", "Back-office", "Déploiement GitLab"],
      en: ["Job posting", "Applications", "Back office", "GitLab deployments"],
    },
  },
  {
    slug: "universcity",
    title: "UniversCity",
    company: { fr: "SMARTCODE Group", en: "SMARTCODE Group" },
    role: { fr: "Frontend Developer", en: "Frontend Developer" },
    description: {
      fr: "Plateforme de recrutement universitaire et suivi des dossiers",
      en: "University recruitment platform and application tracking",
    },
    tech: ["Nuxt.js", "GitHub", "SCRUM"],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://universcitiz.com/" }],
    context: {
      fr: "Expérience candidat optimisée avec parcours clair et suivi de statut.",
      en: "Optimized candidate experience with a clear journey and status tracking.",
    },
    features: {
      fr: ["Formulaires multi-étapes", "Suivi de dossier", "Espace admin", "Responsive UI"],
      en: ["Multi-step forms", "Application tracking", "Admin area", "Responsive UI"],
    },
  },
  {
    slug: "allonounou",
    title: "Allonounou",
    company: { fr: "NOBISOFT", en: "NOBISOFT" },
    role: { fr: "Full-Stack Developer", en: "Full-Stack Developer" },
    description: {
      fr: "Plateforme de mise en relation pour services à domicile",
      en: "Home services matching platform",
    },
    tech: ["Vue.js", "Firebase", "Firestore", "Cloud Functions"],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://allonounou.cm/" }],
    context: {
      fr: "Mise en relation rapide entre demandeurs et prestataires, avec temps réel et notifications.",
      en: "Fast matching between customers and providers with real-time features and notifications.",
    },
    features: {
      fr: ["Matching", "Chat/temps réel", "Gestion profils", "Back-office Firebase"],
      en: ["Matching", "Real-time chat", "Profile management", "Firebase back office"],
    },
  },
  {
    slug: "prions-sans-cesse",
    title: "Prions Sans Cesse",
    company: { fr: "NOBISOFT", en: "NOBISOFT" },
    role: { fr: "Développeur Web (Full-Stack)", en: "Web Developer (Full-Stack)" },
    description: {
      fr: "Application Web et Mobile permettant aux utilisateurs de se réunir pour prier",
      en: "Web and mobile app that helps users gather and pray together",
    },
    tech: ["Nuxt.js", "Bootstrap", "Flutter", "API REST", "Git", "GitHub", "SCRUM", "Jira", "Asana"],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://prionssanscesse.com/" }],
    context: {
      fr: "Intégration des maquettes, mise en place des modules d’authentification et gestion des plans/programmes de prière, avec consommation d’API et maintenance corrective.",
      en: "UI integration, authentication modules, and prayer plans/programs management, with API consumption and corrective maintenance.",
    },
    features: {
      fr: [
        "Authentification et gestion de compte",
        "Plans et programmes de prière",
        "Requêtes et stratégies de prière",
        "Consommation API et maintenance corrective",
        "Méthode SCRUM avec Jira",
      ],
      en: [
        "Authentication and account management",
        "Prayer plans and programs",
        "Prayer requests and strategies",
        "API consumption and corrective maintenance",
        "SCRUM method with Jira",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectText<T>(value: Localized<T>, locale: Locale): T {
  return value[locale] ?? value.fr;
}
