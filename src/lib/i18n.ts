export type Locale = "fr" | "en";

export type Messages = {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    available: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    intro: string;
    ctaContact: string;
    ctaCv: string;
    followMe: string;
    experienceBadge: string;
    profileCardTitle: string;
    profileCardSubtitle: string;
    floatingSkillLabel: string;
  };
  about: {
    title: string;
    journeyTitle: string;
    journeyP1: string;
    journeyP2: string;
    expTitle: string;
    years: string;
    projects: string;
    yearsLabel: string;
    projectsLabel: string;
  };
  projects: {
    title: string;
    featured: string;
    viewProject: string;
  };
  skills: {
    title: string;
    backendServer: string;
    mobileDev: string;
    frontendIntegration: string;
    javascriptFrameworks: string;
    testingTools: string;
    toolsAi: string;
    projectManagement: string;
    versioning: string;
    otherTech: string;
    educationTitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    sendMessage: string;
    contactQuickTitle: string;
    contactFormTitle: string;
    formNameLabel: string;
    formEmailLabel: string;
    formSubjectLabel: string;
    formMessageLabel: string;
    formSubmit: string;
    formSubmitting: string;
    formHint: string;
    formSuccess: string;
    formError: string;
    whatsapp: string;
    whatsappCta: string;
    validation: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
  };
  footer: {
    line1: string;
    line2: string;
  };
  a11y: {
    profilePhotoAlt: string;
    backToTop: string;
  };
  projectDetail: {
    backToProjects: string;
    summary: string;
    overview: string;
    keyFeatures: string;
    category: string;
    categoryValue: string;
    stack: string;
    link: string;
  };
  controls: {
    theme: string;
    language: string;
  };
};

export const DEFAULT_LOCALE: Locale = "fr";
export const LOCALES: readonly Locale[] = ["fr", "en"] as const;

const MESSAGES_BY_LOCALE: Record<Locale, Messages> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      available: "Disponible pour de nouveaux projets",
      titleLine1: "Brundone Junior",
      titleLine2: "Kadjio Sonna",
      subtitle: "Développeur Full-Stack Web & Mobile",
      intro:
        "Passionné par la création d'applications innovantes avec plus de 4 ans d'expérience. Je transforme vos idées en solutions digitales performantes.",
      ctaContact: "Me Contacter",
      ctaCv: "Demander mon CV",
      followMe: "Suivez-moi",
      experienceBadge: "4+ ANS D'EXPÉRIENCE",
      profileCardTitle: "Développeur Full‑Stack Web & Mobile",
      profileCardSubtitle: "Prêt à relever de nouveaux défis",
      floatingSkillLabel: "Technologie",
    },
    about: {
      title: "À Propos de Moi",
      journeyTitle: "Parcours & approche",
      journeyP1:
        "Je conçois et développe des produits numériques de bout en bout, du cadrage fonctionnel à la mise en production. Je suis particulièrement spécialisé en Java (Spring Boot), React, Angular et Flutter. Mon expérience couvre des contextes startup et entreprise, avec des projets orientés API, sécurité, données et interfaces utilisateur.",
      journeyP2:
        "J’accorde une importance particulière à la qualité logicielle : architecture claire, tests, documentation, observabilité et performance. J’aime travailler en équipe (Agile/Scrum) et livrer des fonctionnalités fiables et maintenables.",
      expTitle: "Expérience Professionnelle",
      years: "4+",
      projects: "Projets réalisés",
      yearsLabel: "Années d'expérience",
      projectsLabel: "Projets réalisés",
    },
    projects: {
      title: "Projets Réalisés",
      featured: "Projet vedette",
      viewProject: "Voir le projet",
    },
    skills: {
      title: "Compétences Techniques",
      backendServer: "Backend / Serveur",
      mobileDev: "Développement Mobile",
      frontendIntegration: "Intégration / Frontend",
      javascriptFrameworks: "JavaScript",
      testingTools: "Outils de test",
      toolsAi: "Outils & IA",
      projectManagement: "Gestion de projets / Méthodologies",
      versioning: "Versioning / Contrôle de code",
      otherTech: "Autres technologies",
      educationTitle: "Formation",
    },
    contact: {
      title: "Prêt à collaborer ?",
      subtitle: "Disponible pour des projets freelance ou opportunités en CDI",
      email: "Email",
      phone: "Téléphone",
      sendMessage: "Envoyer un message",
      contactQuickTitle: "Contact rapide",
      contactFormTitle: "Envoyer un message",
      formNameLabel: "Nom",
      formEmailLabel: "Email",
      formSubjectLabel: "Sujet",
      formMessageLabel: "Message",
      formSubmit: "Envoyer",
      formSubmitting: "Envoi…",
      formHint: "Remplissez ce formulaire et je vous répondrai rapidement.",
      formSuccess: "Message envoyé. Je reviens vers vous rapidement.",
      formError: "Échec de l’envoi. Réessayez ou utilisez l’email.",
      whatsapp: "WhatsApp",
      whatsappCta: "Écrire sur WhatsApp",
      validation: {
        name: "Entrez un nom (2 caractères min.)",
        email: "Entrez un email valide",
        subject: "Entrez un sujet (3 caractères min.)",
        message: "Entrez un message (10 caractères min.)",
      },
    },
    footer: {
      line1: "© 2024 Brundone Junior Kadjio Sonna. Développeur Full-Stack passionné.",
      line2: "Perfectionniste • Esprit d'equipe • Créatif • Adaptable",
    },
    a11y: {
      profilePhotoAlt: "Photo de profil",
      backToTop: "Revenir en haut",
    },
    projectDetail: {
      backToProjects: "Retour aux projets",
      summary: "Résumé",
      overview: "Vue d’ensemble",
      keyFeatures: "Fonctionnalités clés",
      category: "Catégorie",
      categoryValue: "Projet réalisé",
      stack: "Stack",
      link: "Lien",
    },
    controls: {
      theme: "Thème",
      language: "Langue",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      available: "Available for new projects",
      titleLine1: "Brundone Junior",
      titleLine2: "Kadjio Sonna",
      subtitle: "Full-Stack Web & Mobile Developer",
      intro:
        "Passionate about building innovative applications with 4+ years of experience. I turn your ideas into high-performing digital solutions.",
      ctaContact: "Contact Me",
      ctaCv: "Request my CV",
      followMe: "Follow me",
      experienceBadge: "4+ YEARS OF EXPERIENCE",
      profileCardTitle: "Full‑Stack Web & Mobile Developer",
      profileCardSubtitle: "Ready for new challenges",
      floatingSkillLabel: "Technology",
    },
    about: {
      title: "About Me",
      journeyTitle: "Journey & approach",
      journeyP1:
        "I build end‑to‑end digital products—from requirements and UX to production. I’m especially specialized in Java (Spring Boot), React, Angular and Flutter. My experience spans startup and enterprise environments, with projects involving APIs, security, data, and user‑facing interfaces.",
      journeyP2:
        "I care deeply about engineering quality: clear architecture, testing, documentation, observability, and performance. I enjoy collaborating in Agile teams and shipping reliable, maintainable features.",
      expTitle: "Work Experience",
      years: "4+",
      projects: "Projects delivered",
      yearsLabel: "Years of experience",
      projectsLabel: "Projects delivered",
    },
    projects: {
      title: "Projects",
      featured: "Featured project",
      viewProject: "View project",
    },
    skills: {
      title: "Technical Skills",
      backendServer: "Backend / Server",
      mobileDev: "Mobile Development",
      frontendIntegration: "Frontend Integration",
      javascriptFrameworks: "JavaScript",
      testingTools: "Testing Tools",
      toolsAi: "Tools & AI",
      projectManagement: "Project Management / Methodologies",
      versioning: "Versioning / Source Control",
      otherTech: "Other Technologies",
      educationTitle: "Education",
    },
    contact: {
      title: "Ready to collaborate?",
      subtitle: "Available for freelance projects or full-time opportunities",
      email: "Email",
      phone: "Phone",
      sendMessage: "Send a message",
      contactQuickTitle: "Quick contact",
      contactFormTitle: "Send a message",
      formNameLabel: "Name",
      formEmailLabel: "Email",
      formSubjectLabel: "Subject",
      formMessageLabel: "Message",
      formSubmit: "Send",
      formSubmitting: "Sending…",
      formHint: "Fill out this form and I’ll get back to you shortly.",
      formSuccess: "Message sent. I’ll get back to you shortly.",
      formError: "Sending failed. Try again or use email.",
      whatsapp: "WhatsApp",
      whatsappCta: "Message on WhatsApp",
      validation: {
        name: "Enter a name (min. 2 chars)",
        email: "Enter a valid email",
        subject: "Enter a subject (min. 3 chars)",
        message: "Enter a message (min. 10 chars)",
      },
    },
    footer: {
      line1: "© 2024 Brundone Junior Kadjio Sonna. Passionate Full-Stack Developer.",
      line2: "Detail-oriented • Team mindset • Creative • Adaptable",
    },
    a11y: {
      profilePhotoAlt: "Profile photo",
      backToTop: "Back to top",
    },
    projectDetail: {
      backToProjects: "Back to projects",
      summary: "Summary",
      overview: "Overview",
      keyFeatures: "Key features",
      category: "Category",
      categoryValue: "Delivered project",
      stack: "Stack",
      link: "Link",
    },
    controls: {
      theme: "Theme",
      language: "Language",
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return MESSAGES_BY_LOCALE[locale] ?? MESSAGES_BY_LOCALE[DEFAULT_LOCALE];
}
