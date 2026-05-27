export type NavItemKey = "home" | "about" | "projects" | "skills" | "contact";

export type NavItem = { id: string; key: NavItemKey };

export type SocialLinkKey = "github" | "linkedin" | "mail";
export type SocialLink = { key: SocialLinkKey; href: string; label: string };

export type Experience = {
  title: { fr: string; en: string };
  company: { fr: string; en: string };
  location: { fr: string; en: string };
  period: { fr: string; en: string };
  duration: { fr: string; en: string };
  projects: number;
};

export type Education = {
  title: { fr: string; en: string };
  school: { fr: string; en: string };
  period: { fr: string; en: string };
  details: { fr: string | string[]; en: string | string[] };
};

export type FloatingSkill = {
  name: string;
  logoSrc: string;
  accentClassName: string;
  positionClassName: string;
  floatAxis: "x" | "y";
  floatValues: number[];
  duration: number;
  delay: number;
};

export const CONTACT_EMAIL = "devkadjio@gmail.com";
export const CONTACT_PHONE_E164 = "+237652027456";
export const CONTACT_PHONE_DISPLAY = "+237 6 52 02 74 56";
export const WHATSAPP_PHONE = "237652027456";
export const WHATSAPP_DEFAULT_TEXT = {
  fr: "Bonjour, je vous contacte depuis votre portfolio.",
  en: "Hello, I'm contacting you from your portfolio.",
};
export const SITE_LOGO_SRC = "/icons/favicon_io/android-chrome-192x192.png";

export const NAV_ITEMS: NavItem[] = [
  { key: "home", id: "accueil" },
  { key: "about", id: "apropos" },
  { key: "projects", id: "projets" },
  { key: "skills", id: "competences" },
  { key: "contact", id: "contact" },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { key: "github", href: "https://github.com/Kadjio-sonna", label: "GitHub" },
  { key: "linkedin", href: "https://linkedin.com/in/Brundone-Kadjio", label: "LinkedIn" },
  // { key: "mail", href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
  { key: "mail", href: '#contact', label: "Email" },
] as const;

export const SKILLS = {
  backendServer: {
    fr: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security (OAuth 2.0 · JWT)",
      "Hibernate / JPA (ORM)",
      "Architecture n‑tiers & MVC",
      "Microservices (bases)",
      "Spring Cloud (bases)",
      "Bases de données (M) : SQL (MySQL, PostgreSQL) · NoSQL (MongoDB, DynamoDB)",
      "Déploiement & CI/CD (bases) : Docker · GitLab CI/CD",
    ],
    en: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security (OAuth 2.0 · JWT)",
      "Hibernate / JPA (ORM)",
      "N‑tier architecture & MVC",
      "Microservices (basics)",
      "Spring Cloud (basics)",
      "Databases: SQL (MySQL, PostgreSQL) · NoSQL (MongoDB, DynamoDB)",
      "Deployment & CI/CD (basics): Docker · GitLab CI/CD",
    ],
  },
  mobileDev: {
    fr: ["Flutter · React Native — applications multiplateformes"],
    en: ["Flutter · React Native — cross‑platform applications"],
  },
  frontendIntegration: {
    fr: ["HTML · CSS · Tailwind · Material UI · Bootstrap"],
    en: ["HTML · CSS · Tailwind · Material UI · Bootstrap"],
  },
  javascriptFrameworks: {
    fr: ["JavaScript : Angular · Vue.js · Nuxt.js · React.js · Next.js"],
    en: ["JavaScript: Angular · Vue.js · Nuxt.js · React · Next.js"],
  },
  testingTools: {
    fr: ["JUnit · Mockito · Jest"],
    en: ["JUnit · Mockito · Jest"],
  },
  toolsAi: {
    fr: [
      "IDE : IntelliJ · VS Code · Android Studio",
      "Design / prototypage : Figma",
      "Outils IA (projets avancés) : Windsurf · Trae · Antigravity",
    ],
    en: [
      "IDE: IntelliJ · VS Code · Android Studio",
      "Design / prototyping: Figma",
      "AI tools (advanced projects): Windsurf · Trae · Antigravity",
    ],
  },
  projectManagement: {
    fr: ["Agile (SCRUM) · Asana · Trello · Slack · Jira"],
    en: ["Agile (SCRUM) · Asana · Trello · Slack · Jira"],
  },
  versioning: {
    fr: ["Git · GitHub · GitLab"],
    en: ["Git · GitHub · GitLab"],
  },
  otherTech: {
    fr: ["Node.js · Python"],
    en: ["Node.js · Python"],
  },
} as const;

export const EXPERIENCES: Experience[] = [
  {
    title: { fr: "Développeur Full-Stack (Web & Mobile)", en: "Full-Stack Developer (Web & Mobile)" },
    company: { fr: "ETS HTTC", en: "ETS HTTC" },
    location: { fr: "Akwa, Douala, Cameroun (en mission pour CODEZYS, Paris, France)", en: "Akwa, Douala, Cameroon (contracted for CODEZYS, Paris, France)" },
    period: { fr: "Sept 2022 - Présent", en: "Sep 2022 - Present" },
    duration: { fr: "3+ ans", en: "3+ years" },
    projects: 4,
  },
  {
    title: { fr: "Développeur Web & Mobile", en: "Web & Mobile Developer" },
    company: { fr: "SMARTCODE Group", en: "SMARTCODE Group" },
    location: { fr: "Douala, Cameroun", en: "Douala, Cameroon" },
    period: { fr: "Nov 2021 - Mai 2022", en: "Nov 2021 - May 2022" },
    duration: { fr: "6 mois", en: "6 months" },
    projects: 3,
  },
  {
    title: { fr: "Développeur Web Full-Stack", en: "Full-Stack Web Developer" },
    company: { fr: "NOBISOFT", en: "NOBISOFT" },
    location: { fr: "Douala, Cameroun", en: "Douala, Cameroon" },
    period: { fr: "Sept 2021 - Oct 2021", en: "Sep 2021 - Oct 2021" },
    duration: { fr: "1 mois", en: "1 month" },
    projects: 1,
  },
];

export const EDUCATION: Education[] = [
  {
    title: { fr: "Concepteur de système d’information (CSI) — CS2I3 DWM", en: "Information Systems Designer — CS2I3 DWM" },
    school: {
      fr: "Programme 3IL Groupe — IUC (Institut Universitaire de la Côte), Douala, LT, Cameroun",
      en: "3IL Group Program — IUC (Institut Universitaire de la Côte), Douala, LT, Cameroon",
    },
    period: { fr: "Nov 2020 - Août 2021 • Mention Bien", en: "Nov 2020 - Aug 2021 • Honors" },
    details: {
      fr: [
        "Projets scolaires de création d'applications web et mobile",
        "Notes élevées dans les matières de programmation",
        "Langages/enseignements: Angular, Ionic, Tailwind, gestion de projet, veille technologique, gestion d’entreprise, droit informatique",
      ],
      en: [
        "Academic projects building web and mobile applications",
        "High grades in programming courses",
        "Topics/tools: Angular, Ionic, Tailwind, project management, technology watch, business management, IT law",
      ],
    },
  },
  {
    title: { fr: "Brevet de Technicien Supérieur (BTS) — Génie Logiciel", en: "Higher National Diploma (BTS) — Software Engineering" },
    school: { fr: "IUC (Institut Universitaire de la Côte), Douala, LT, Cameroun", en: "IUC (Institut Universitaire de la Côte), Douala, LT, Cameroon" },
    period: { fr: "Sept 2018 - Août 2020 • Mention Bien", en: "Sep 2018 - Aug 2020 • Honors" },
    details: {
      fr: [
        "Projets scolaires de développement de logiciels",
        "Notes élevées dans les matières de programmation",
        "Langages/enseignements: VB.NET, POO, HTML5, CSS3, PHP 7",
      ],
      en: [
        "Academic software development projects",
        "High grades in programming courses",
        "Topics/tools: VB.NET, OOP, HTML5, CSS3, PHP 7",
      ],
    },
  },
  {
    title: { fr: "Baccalauréat Scientifique (BAC D)", en: "Scientific Baccalaureate (BAC D)" },
    school: { fr: "Collège du Levant, Bonabéri, LT, Cameroun", en: "Collège du Levant, Bonabéri, LT, Cameroon" },
    period: { fr: "Sept 2015 - Juil 2016", en: "Sep 2015 - Jul 2016" },
    details: { fr: "Série D", en: "Series D" },
  },
];

export const FLOATING_SKILLS: FloatingSkill[] = [
  {
    name: "React",
    logoSrc: "https://cdn.simpleicons.org/react/61DAFB",
    accentClassName: "ring-1 ring-cyan-400/25 shadow-cyan-500/10",
    positionClassName: "-top-6 left-2",
    floatAxis: "y",
    floatValues: [0, -10, 0],
    duration: 3.2,
    delay: 0,
  },
  {
    name: "Angular",
    logoSrc: "https://cdn.simpleicons.org/angular/DD0031",
    accentClassName: "ring-1 ring-rose-400/25 shadow-rose-500/10",
    positionClassName: "top-24 -right-6",
    floatAxis: "y",
    floatValues: [0, -9, 0],
    duration: 3.4,
    delay: 0.15,
  },
  {
    name: "Spring Boot",
    logoSrc: "https://cdn.simpleicons.org/springboot/6DB33F",
    accentClassName: "ring-1 ring-amber-400/25 shadow-amber-500/10",
    positionClassName: "-top-8 right-0",
    floatAxis: "y",
    floatValues: [0, -12, 0],
    duration: 3.6,
    delay: 0.4,
  },
  {
    name: "Flutter",
    logoSrc: "https://cdn.simpleicons.org/flutter/54C5F8",
    accentClassName: "ring-1 ring-sky-400/25 shadow-sky-500/10",
    positionClassName: "top-1/3 -left-10",
    floatAxis: "x",
    floatValues: [0, 10, 0],
    duration: 4.2,
    delay: 0.6,
  },
  {
    name: "Node.js",
    logoSrc: "https://cdn.simpleicons.org/nodedotjs/22C55E",
    accentClassName: "ring-1 ring-emerald-400/25 shadow-emerald-500/10",
    positionClassName: "top-1/2 -right-10",
    floatAxis: "x",
    floatValues: [0, -10, 0],
    duration: 4,
    delay: 0.2,
  },
  {
    name: "Python",
    logoSrc: "https://cdn.simpleicons.org/python/FDE047",
    accentClassName: "ring-1 ring-yellow-300/25 shadow-yellow-400/10",
    positionClassName: "bottom-10 -left-6",
    floatAxis: "y",
    floatValues: [0, 8, 0],
    duration: 3.8,
    delay: 0.8,
  },
];
