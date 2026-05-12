export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  company: string;
  role: string;
  description: string;
  tech: string[];
  links?: ProjectLink[];
  context?: string;
  features?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "iyvo",
    title: "IYVO",
    company: "CODEZYS",
    role: "Lead Developer",
    description:
      "Plateforme sans commission réunissant entreprises, ESN et experts pour les missions",
    tech: ["ReactJS", "Redux", "Node.js", "MongoDB", "AWS", "Python", "FastAPI", "Laravel"],
    links: [{ label: "Voir la plateforme", href: "https://iyvo.fr/" }],
    context:
      "Conception et développement d’une plateforme orientée marketplace, avec une API robuste, un front réactif et une architecture prête à scaler.",
    features: [
      "Gestion des profils et des missions",
      "Moteur de recherche et filtres",
      "Workflow de candidature et suivi",
      "Tableaux de bord et métriques",
    ],
  },
  {
    slug: "diary-lingo",
    title: "Diary Lingo",
    company: "CODEZYS",
    role: "Full-Stack Developer",
    description: "Application web de traduction avec assistance pédagogique",
    tech: ["ReactJS", "Redux", "Node.js", "Express", "MongoDB", "AWS DocumentDB"],
    context:
      "Produit orienté apprentissage : traductions, accompagnement, et expérience fluide côté utilisateur.",
    features: ["Traduction assistée", "Interface pédagogique", "Gestion des comptes", "Historique et favoris"],
  },
  {
    slug: "studa",
    title: "Studa",
    company: "CODEZYS",
    role: "Full-Stack Developer",
    description: "Application web et mobile d'évaluation scolaire par matière",
    tech: ["ReactJS", "Redux", "Flutter", "Node.js", "GitLab CI/CD"],
    links: [{ label: "Voir la plateforme", href: "https://studa.io/" }],
    context:
      "Application multi-plateforme pour centraliser les évaluations, améliorer la traçabilité et simplifier le suivi des performances.",
    features: ["Évaluations par matière", "Tableaux de bord", "Gestion des profils", "Synchronisation web & mobile"],
  },
  {
    slug: "theshops",
    title: "TheShops",
    company: "Projet Mobile",
    role: "Full-Stack Developer",
    description: "Application e-commerce disponible sur Android & iOS",
    tech: ["Flutter (Provider)", "Python (FastAPI)", "Mobile", "API REST"],
    links: [
      { label: "TheShops sur Google Play", href: "https://play.google.com/store/search?q=theshops&c=apps" },
      { label: "TheShops sur l'App Store", href: "https://apps.apple.com/fr/search?term=theshops" },
    ],
    context:
      "Application mobile e-commerce avec catalogue, parcours d’achat et backend API sécurisé pour piloter les opérations.",
    features: ["Catalogue & recherche", "Panier & commandes", "Comptes utilisateurs", "API REST FastAPI"],
  },
  {
    slug: "ticket-flow",
    title: "TicketFlow",
    company: "GitHub",
    role: "Backend / Microservices",
    description:
      "Mini-système de helpdesk en architecture microservices (tickets, notifications, pièces jointes).",
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
    links: [{ label: "GitHub", href: "https://github.com/dev-kadjio/ticket-flow" }],
    context:
      "Architecture microservices résiliente avec discovery, configuration centralisée, sécurité JWT et communication asynchrone.",
    features: [
      "API Gateway (routing, policies)",
      "Discovery (Eureka) et Config Server",
      "Sécurité OAuth2/JWT (Keycloak)",
      "Services découplés + Kafka pour l’event-driven",
      "PostgreSQL par domaine",
    ],
  },
  {
    slug: "stafi-placement",
    title: "Stafi Placement",
    company: "SMARTCODE Group",
    role: "Full-Stack Developer",
    description: "Plateforme de mise en relation talents-entreprises au Canada",
    tech: ["Node.js", "EJS", "GitLab"],
    links: [{ label: "Voir la plateforme", href: "https://ciblestafi.groupe-cible.ca/" }],
    context: "Plateforme de mise en relation avec parcours simple, rapide et orienté conversion.",
    features: ["Publication d’offres", "Candidatures", "Back-office", "Déploiement GitLab"],
  },
  {
    slug: "universcity",
    title: "UniversCity",
    company: "SMARTCODE Group",
    role: "Frontend Developer",
    description: "Plateforme de recrutement universitaire et suivi des dossiers",
    tech: ["Nuxt.js", "GitHub", "SCRUM"],
    links: [{ label: "Voir la plateforme", href: "https://universcitiz.com/" }],
    context: "Expérience candidat optimisée avec parcours clair et suivi de statut.",
    features: ["Formulaires multi-étapes", "Suivi de dossier", "Espace admin", "Responsive UI"],
  },
  {
    slug: "allonounou",
    title: "Allonounou",
    company: "NOBISOFT",
    role: "Full-Stack Developer",
    description: "Plateforme de mise en relation pour services à domicile",
    tech: ["Vue.js", "Firebase", "Firestore", "Cloud Functions"],
    links: [{ label: "Voir la plateforme", href: "https://allonounou.cm/" }],
    context: "Mise en relation rapide entre demandeurs et prestataires, avec temps réel et notifications.",
    features: ["Matching", "Chat/temps réel", "Gestion profils", "Back-office Firebase"],
  },
  {
    slug: "prions-sans-cesse",
    title: "Prions Sans Cesse",
    company: "NOBISOFT",
    role: "Développeur Web (Full-Stack)",
    description: "Application Web et Mobile permettant aux utilisateurs de se réunir pour prier",
    tech: ["Nuxt.js", "Bootstrap", "Flutter", "API REST", "Git", "GitHub", "SCRUM", "Jira", "Asana"],
    links: [{ label: "Voir la plateforme", href: "https://prionssanscesse.com/" }],
    context:
      "Intégration des maquettes, mise en place des modules d’authentification et gestion des plans/programmes de prière, avec consommation d’API et maintenance corrective.",
    features: [
      "Authentification et gestion de compte",
      "Plans et programmes de prière",
      "Requêtes et stratégies de prière",
      "Consommation API et maintenance corrective",
      "Méthode SCRUM avec Jira",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
