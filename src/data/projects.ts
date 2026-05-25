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
      fr: "Plateforme sans commission réunissant entreprises, ESN, consultants et experts à l’heure pour leurs missions",
      en: "Commission-free platform connecting companies, consulting firms, consultants and hourly experts for missions",
    },
    tech: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "Hibernate/JPA",
      "Python (FastAPI)",
      "ReactJS",
      "Redux",
      "Vite",
      "MongoDB",
      "AWS (DocumentDB, CloudWatch, SNS, SQS)",
      "Docker",
      "CI/CD",
      "Swagger/OpenAPI",
      "UML",
    ],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://iyvo.fr/" }],
    context: {
      fr: "Plateforme marketplace orientée missions (entreprises, ESN, experts). Participation aux cérémonies Agile (daily, sprint planning, rétrospective), conception via UML, développement d’APIs REST et mise en production sur AWS (conteneurisation, supervision, logs). Mission réalisée via ETS HTTC.",
      en: "Marketplace platform for missions (companies, consulting firms, experts). Participated in Agile ceremonies (daily, sprint planning, retrospective), UML design, REST API development and production deployment on AWS (containerization, monitoring, logs). Mission delivered via ETS HTTC.",
    },
    features: {
      fr: [
        "Cérémonies Agile : daily, sprint planning, rétrospective",
        "APIs REST : utilisateurs (entreprises, experts, consultants)",
        "APIs REST : missions, contrats et factures",
        "Conception UML (modélisation des domaines)",
        "Persistance via Hibernate/JPA (mapping entités + relations)",
        "Architecture orientée services (auth, utilisateurs, missions)",
        "Sécurité backend : authentification/autorisation (Spring Security)",
        "Gestion des environnements (dev/staging/production)",
        "Intégration frontend React (consommation des APIs)",
        "Déploiement AWS : conteneurisation, supervision et logs",
        "Maintenance corrective et évolutive en production",
      ],
      en: [
        "Agile ceremonies: daily, sprint planning, retrospective",
        "REST APIs: users (companies, experts, consultants)",
        "REST APIs: missions, contracts, and invoices",
        "UML design (domain modeling)",
        "Persistence with Hibernate/JPA (entity mapping + relationships)",
        "Service-oriented architecture (auth, users, missions)",
        "Backend security: authentication/authorization (Spring Security)",
        "Environment management (dev/staging/production)",
        "React frontend integration (API consumption)",
        "AWS deployment: containerization, monitoring, and logs",
        "Corrective and evolutive maintenance in production",
      ],
    },
  },
  {
    slug: "diary-lingo",
    title: "Diary Lingo",
    company: { fr: "CODEZYS", en: "CODEZYS" },
    role: { fr: "Full-Stack Developer", en: "Full-Stack Developer" },
    description: {
      fr: "Application web permettant aux utilisateurs de traduire leurs contenus avec l’aide des enseignants",
      en: "Web application allowing users to translate content with teachers’ assistance",
    },
    tech: [
      "Java 17",
      "Spring Boot 3",
      "ReactJS (Redux)",
      "Vite",
      "MongoDB",
      "AWS (DocumentDB, CloudWatch)",
      "JUnit5",
      "Mockito",
      "Swagger/OpenAPI",
      "Figma",
      "Trello",
      "Slack",
      "Git",
      "GitLab CI/CD",
      "VS Code",
      "IntelliJ",
      "Windsurf",
      "Trae",
      "Antigravity",
    ],
    context: {
      fr: "Développement backend (diaries, utilisateurs, configurations) et conception d’APIs REST documentées. Intégration du frontend React (consommation des APIs), implémentation des pages (authentification, profil, diary, reviews) et déploiement en ligne pendant la phase de développement. Mission réalisée via ETS HTTC.",
      en: "Backend development (diaries, users, configurations) and documented REST API design. React frontend integration (API consumption), implementation of pages (authentication, profile, diary, reviews), and online deployment during development. Mission delivered via ETS HTTC.",
    },
    features: {
      fr: [
        "Développement backend : diaries, utilisateurs et configurations",
        "Conception d’APIs REST documentées",
        "Intégration frontend React : consommation d’API",
        "Pages : authentification, profil, diary, reviews",
        "Intégration des maquettes et consommation des APIs",
        "Déploiement en ligne pendant le développement",
      ],
      en: [
        "Backend development: diaries, users, and configurations",
        "Documented REST API design",
        "React frontend integration: API consumption",
        "Pages: authentication, profile, diary, reviews",
        "UI integration and API consumption",
        "Online deployment during development",
      ],
    },
  },
  {
    slug: "start-in-cloud",
    title: "Start in Cloud",
    company: { fr: "CODEZYS", en: "CODEZYS" },
    role: { fr: "Développeur Full‑Stack", en: "Full‑Stack Developer" },
    description: {
      fr: "Application web permettant aux utilisateurs de migrer leurs infrastructures et applications vers le cloud",
      en: "Web application enabling users to migrate their infrastructures and applications to the cloud",
    },
    tech: [
      "Java 17",
      "Spring Boot 3",
      "ReactJS",
      "Vite",
      "MongoDB",
      "AWS (DocumentDB, CloudWatch)",
      "Docker",
      "SonarQube",
      "GitLab CI/CD",
      "JUnit5",
      "Mockito",
      "Swagger/OpenAPI",
      "Figma",
      "Trello",
      "Slack",
      "Git",
      "VS Code",
      "IntelliJ",
      "Windsurf",
    ],
    context: {
      fr: "Participation au développement backend, exposition de services REST (profils, membres, entreprises), consommation des APIs côté frontend React, déploiement cloud et maintenance applicative.",
      en: "Contributed to backend development, exposed REST services (profiles, members, companies), consumed APIs in the React frontend, cloud deployment and application maintenance.",
    },
    features: {
      fr: [
        "Développement backend (Spring Boot)",
        "Services REST : profils, membres et entreprises",
        "Consommation des APIs côté frontend React",
        "Déploiement cloud et maintenance applicative",
      ],
      en: [
        "Backend development (Spring Boot)",
        "REST services: profiles, members, and companies",
        "API consumption in the React frontend",
        "Cloud deployment and application maintenance",
      ],
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
    tech: ["Flutter (Provider)", "Python (FastAPI)", "Figma", "API REST", "Slack", "Git", "GitLab", "MongoDB", "VS Code", "Android studio", "Swagger", "Windsurf"],
    links: [
      { label: { fr: "Google Play", en: "Google Play" }, href: "https://play.google.com/store/search?q=theshops&c=apps" },
      // { label: { fr: "App Store", en: "App Store" }, href: "https://apps.apple.com/fr/search?term=theshops" },
      { label: { fr: "App Store", en: "App Store" }, href: "https://apps.apple.com/gh/app/theshops/id6761338039" },
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
      fr: "Application web mettant en relation les talents avec les entreprises au Canada pour faciliter l’emploi",
      en: "Web application connecting talents with companies in Canada to facilitate hiring",
    },
    tech: [
      "Java 11",
      "Spring Boot 2",
      "Node.js (Express)",
      "Nuxt.js",
      "Bootstrap",
      "MongoDB",
      "Git",
      "GitLab CI/CD",
      "Asana",
      "Swagger/OpenAPI",
      "JUnit",
      "Mockito",
      "VS Code",
      "IntelliJ",
    ],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://ciblestafi.groupe-cible.ca/" }],
    context: {
      fr: "Développement et maintenance d’APIs REST backend, implémentation des fonctionnalités métier liées au recrutement, correction d’anomalies et optimisation des performances. Collaboration Agile avec l’équipe projet, intégration des maquettes et consommation de l’API, maintenance corrective de l’application.",
      en: "Developed and maintained backend REST APIs, implemented recruitment business features, fixed issues and improved performance. Worked in Agile collaboration with the team, integrated UI mockups and consumed the API, and handled corrective maintenance.",
    },
    features: {
      fr: [
        "Développement et maintenance d’APIs REST backend",
        "Fonctionnalités métier liées au recrutement",
        "Correction d’anomalies et optimisation des performances",
        "Collaboration Agile avec l’équipe projet",
        "Intégration des maquettes et consommation de l’API",
        "Maintenance corrective de l’application",
      ],
      en: [
        "Backend REST APIs development and maintenance",
        "Recruitment business features implementation",
        "Bug fixing and performance optimization",
        "Agile collaboration with the project team",
        "UI mockups integration and API consumption",
        "Corrective application maintenance",
      ],
    },
  },
  {
    slug: "universcity",
    title: "UniversCity",
    company: { fr: "SMARTCODE Group", en: "SMARTCODE Group" },
    role: { fr: "Développeur Web", en: "Web Developer" },
    description: {
      fr: "Plateforme en ligne mettant en relation universités et étudiants pour faciliter le recrutement et le suivi des dossiers",
      en: "Online platform connecting universities and students for recruitment and application tracking",
    },
    tech: [
      "Java 11",
      "Spring Boot 2",
      "Nuxt.js",
      "Bootstrap",
      "MongoDB",
      "Git",
      "GitHub",
      "GitLab CI/CD",
      "Jira",
      "Asana",
      "Swagger/OpenAPI",
      "JUnit",
      "Mockito",
      "VS Code",
      "IntelliJ",
    ],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://universcitiz.com/" }],
    context: {
      fr: "Développement et maintenance d’APIs REST backend, consommation d’APIs backend Java, maintenance évolutive des applications frontend. Travail en méthodologie SCRUM avec Jira et Asana.",
      en: "Developed and maintained backend REST APIs, consumed Java backend APIs, and delivered evolutive maintenance on frontend applications. Worked with SCRUM methodology using Jira and Asana.",
    },
    features: {
      fr: [
        "Développement et maintenance d’APIs REST backend",
        "Consommation d’APIs backend Java",
        "Maintenance évolutive des applications frontend",
        "Méthodologie SCRUM avec Jira et Asana",
      ],
      en: [
        "Backend REST APIs development and maintenance",
        "Java backend API consumption",
        "Evolutive maintenance of frontend applications",
        "SCRUM methodology with Jira and Asana",
      ],
    },
  },
  {
    slug: "allonounou",
    title: "Allonounou",
    company: { fr: "NOBISOFT", en: "NOBISOFT" },
    role: { fr: "Full-Stack Developer", en: "Full-Stack Developer" },
    description: {
      fr: "Plateforme mettant en relation des familles recherchant une aide à domicile avec des personnes souhaitant travailler dans les services à la personne",
      en: "Platform connecting families looking for home help with people seeking jobs in personal services",
    },
    tech: [
      "Vue.js",
      "Firebase Authentication",
      "Firestore",
      "Cloud Storage",
      "Cloud Functions",
      "Figma",
      "Git",
      "GitHub",
      "Trello",
      "VS Code",
    ],
    links: [{ label: { fr: "Voir la plateforme", en: "View website" }, href: "https://allonounou.cm/" }],
    context: {
      fr: "Intégration et correction des maquettes (authentification, factures), implémentation des fonctionnalités principales (gestion des jobs et des profils) et collaboration avec l’équipe pour assurer qualité et cohérence.",
      en: "Integrated and fixed UI mockups (authentication, invoices), implemented core features (jobs and profiles management), and collaborated with the team to ensure quality and consistency.",
    },
    features: {
      fr: [
        "Intégration et correction des maquettes (authentification, factures)",
        "Gestion des jobs et des profils",
        "Collaboration équipe : qualité et cohérence",
      ],
      en: [
        "UI mockups integration and fixes (authentication, invoices)",
        "Jobs and profiles management",
        "Team collaboration for quality and consistency",
      ],
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
