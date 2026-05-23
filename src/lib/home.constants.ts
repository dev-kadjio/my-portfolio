export type NavItemKey = "home" | "about" | "projects" | "skills" | "contact";

export type NavItem = { id: string; key: NavItemKey };

export type SocialLinkKey = "github" | "linkedin" | "mail";
export type SocialLink = { key: SocialLinkKey; href: string; label: string };

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  projects: number;
};

export type Education = {
  title: string;
  school: string;
  period: string;
  details: string | string[];
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
export const WHATSAPP_DEFAULT_TEXT = "Bonjour, je vous contacte depuis votre portfolio.";

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
  backend: [
    "Java (Spring Boot, Spring Cloud)",
    "Node.js (Express, EJS)",
    "Python (FastAPI)",
    "API REST & Microservices",
    "Sécurité : OAuth2/JWT, RBAC (Role-Based Access Control), ABAC (Attribute-Based Access Control)",
    "Messaging (Kafka)",
  ],
  frontend: ["React.js (Redux)", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Tailwind CSS"],
  mobile: ["Flutter (BLoC, Provider)", "React Native"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Firestore", "DynamoDB", "DocumentDB"],
  tools: [
    "Docker & Docker Compose",
    "GitHub / GitLab",
    "CI/CD (GitLab CI)",
    "AWS (S3, ECS, SQS)",
    "Firebase (Cloud Functions)",
    "Maven",
    "Figma",
    "SCRUM/Agile",
    "Jira / Trello",
  ],
} as const;

export const EXPERIENCES: Experience[] = [
  {
    title: "Développeur Full-Stack (Web et Mobile)",
    company: "CODEZYS",
    location: "Paris, France (Télétravail)",
    period: "Sept 2022 - Présent",
    duration: "3+ ans",
    projects: 4,
  },
  {
    title: "Développeur Web & Mobile",
    company: "SMARTCODE Group",
    location: "Douala, Cameroun",
    period: "Nov 2021 - Mai 2022",
    duration: "6 mois",
    projects: 3,
  },
  {
    title: "Développeur Web Full-Stack",
    company: "NOBISOFT",
    location: "Douala, Cameroun",
    period: "Sept 2021 - Oct 2021",
    duration: "1 mois",
    projects: 1,
  },
];

export const EDUCATION: Education[] = [
  {
    title: "Concepteur de système d’information (CSI) — CS2I3 DWM",
    school: "Programme 3IL Groupe — IUC (Institut Universitaire de la Côte), Douala, LT, Cameroun",
    period: "Nov 2020 - Août 2021 • Mention Bien",
    details: [
      "Projets scolaires de création d'applications web et mobile",
      "Notes élevées dans les matières de programmation",
      "Langages/enseignements: Angular, Ionic, Tailwind, gestion de projet, veille technologique, gestion d’entreprise, droit informatique",
    ],
  },
  {
    title: "Brevet de Technicien Supérieur (BTS) — Génie Logiciel",
    school: "IUC (Institut Universitaire de la Côte), Douala, LT, Cameroun",
    period: "Sept 2018 - Août 2020 • Mention Bien",
    details: [
      "Projets scolaires de développement de logiciels",
      "Notes élevées dans les matières de programmation",
      "Langages/enseignements: VB.NET, POO, HTML5, CSS3, PHP 7",
    ],
  },
  {
    title: "Baccalauréat Scientifique (BAC D)",
    school: "Collège du Levant, Bonabéri, LT, Cameroun",
    period: "Sept 2015 - Juil 2016",
    details: "Série D",
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
    name: "Java (Spring boot)",
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

