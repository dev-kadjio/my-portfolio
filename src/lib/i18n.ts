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
    backend: string;
    frontend: string;
    mobile: string;
    database: string;
    tools: string;
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
      profileCardTitle: "Expert React & Java & Node",
      profileCardSubtitle: "Prêt à relever de nouveaux défis",
    },
    about: {
      title: "À Propos de Moi",
      journeyTitle: "Mon Parcours",
      journeyP1:
        "Développeur Full-Stack passionné avec plus de 4 ans d'expérience dans la création d'applications web et mobiles innovantes. Je transforme des idées complexes en solutions élégantes et performantes.",
      journeyP2:
        "Spécialisé dans les technologies modernes comme React, Node.js, et Flutter, je m'efforce de créer des expériences utilisateur exceptionnelles tout en maintenant un code propre et maintenable.",
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
      backend: "Backend",
      frontend: "Frontend",
      mobile: "Mobile",
      database: "Base de Données",
      tools: "Outils",
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
      profileCardTitle: "React & Java & Node Expert",
      profileCardSubtitle: "Ready for new challenges",
    },
    about: {
      title: "About Me",
      journeyTitle: "My Journey",
      journeyP1:
        "Passionate Full-Stack developer with 4+ years of experience building innovative web and mobile applications. I turn complex ideas into elegant, high-performing solutions.",
      journeyP2:
        "Specialized in modern technologies like React, Node.js, and Flutter, I focus on crafting great user experiences while keeping code clean and maintainable.",
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
      backend: "Backend",
      frontend: "Frontend",
      mobile: "Mobile",
      database: "Databases",
      tools: "Tools",
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
