"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Facebook,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  User,
  Building2,
  Globe,
  Cpu,
  Database,
  Wrench,
  Star,
  Clock,
  ArrowRight,
  Download,
  Send,
  ChevronUp,
} from "lucide-react";

type NavItem = { id: string; name: string };
type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  projects: number;
};
type Education = {
  title: string;
  school: string;
  period: string;
  details: string | string[];
};

const NAV_ITEMS: NavItem[] = [
  { name: "Accueil", id: "accueil" },
  { name: "À propos", id: "apropos" },
  { name: "Projets", id: "projets" },
  { name: "Compétences", id: "competences" },
  { name: "Contact", id: "contact" },
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/Kadjio-sonna", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/Brundone-Kadjio", label: "LinkedIn" },
  { icon: Mail, href: "mailto:devkadjio@gmail.com", label: "Email" },
  // { icon: Youtube, href: "https://youtube.com/@kadjiologuetube9403", label: "YouTube" },
  // { icon: Facebook, href: "https://facebook.com/Brundone-Officíel-New", label: "Facebook" },
] as const;

const SKILLS = {
  backend: [
    "Node.js (Express, EJS)",
    "Python (FastAPI)",
    "Java (Spring Boot, Spring Cloud)",
    "API REST & Microservices",
    "Sécurité (OAuth2/JWT, Keycloak)",
    "Messaging (Kafka)",
  ],
  frontend: ["React.js (Redux)", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Tailwind CSS"],
  mobile: ["Flutter (Provider)", "Ionic", "React Native"],
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

const EXPERIENCES: Experience[] = [
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

const EDUCATION: Education[] = [
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

type FloatingSkill = {
  name: "Java (Spring boot)" | "React" | "Flutter" | "Node.js" | "Python";
  logoSrc: string;
  accentClassName: string;
  positionClassName: string;
  floatAxis: "x" | "y";
  floatValues: number[];
  duration: number;
  delay: number;
};

// Badges de compétences qui flottent autour de la photo (effet visuel "premium").
// Les logos sont chargés via Simple Icons (SVG). Si vous souhaitez 0 dépendance réseau,
// on pourra les mettre dans /public et remplacer ces URLs.
const FLOATING_SKILLS: FloatingSkill[] = [
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
    logoSrc: "https://cdn.simpleicons.org/openjdk/FFFFFF",
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

function FloatingSkills({ shouldReduceMotion }: { shouldReduceMotion: boolean }) {
  return (
    // Conteneur absolu pour positionner les badges autour de la carte (décoratif).
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {FLOATING_SKILLS.map((skill, index) => (
        <motion.div
          key={`${skill.name}-${index}`}
          className={[
            "absolute z-30",
            "rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-xl",
            skill.accentClassName,
            "hidden sm:block",
            skill.positionClassName,
          ].join(" ")}
          animate={
            shouldReduceMotion
              ? undefined
              : skill.floatAxis === "y"
                ? { y: skill.floatValues }
                : { x: skill.floatValues }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : skill.duration,
            repeat: shouldReduceMotion ? 0 : Infinity,
            delay: shouldReduceMotion ? 0 : skill.delay,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
              <img src={skill.logoSrc} alt="" className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-100">{skill.name}</div>
              <div className="text-xs text-slate-400">Stack</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 140 : 320,
    damping: shouldReduceMotion ? 34 : 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 16);
      setShowBackToTop(y > 700);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (best?.target?.id) setActiveSection(best.target.id);
      },
      { root: null, rootMargin: "-45% 0px -50% 0px", threshold: [0.05, 0.2, 0.4, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(1200px circle at 20% 10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(900px circle at 90% 20%, rgba(56,189,248,0.12), transparent 55%), radial-gradient(900px circle at 50% 120%, rgba(139,92,246,0.12), transparent 55%)",
        }}
      />

      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400"
        style={{ scaleX: scrollProgress }}
        aria-hidden="true"
      />

      <motion.nav
        className="fixed top-6 inset-x-0 mx-auto w-[95%] max-w-5xl z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
      >
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500
          ${isScrolled 
            ? "bg-slate-900/80 backdrop-blur-xl border-slate-700/50 shadow-2xl shadow-indigo-500/10" 
            : "bg-slate-900/40 backdrop-blur-md border-white/5"}
        `}>
          <motion.a 
            href="#accueil"
            className="text-xl font-bold text-slate-100 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("accueil");
            }}
          >
            <span className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-indigo-500/20">BK</span>
            <span className="hidden sm:block font-bold tracking-tight">BK.dev</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1 bg-slate-950/30 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeSection === item.id 
                    ? "text-white" 
                    : "text-slate-400 hover:text-slate-200"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/25 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="px-6 py-2.5 bg-slate-100 text-slate-900 rounded-full text-sm font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            <span className="hidden sm:inline">Me Contacter</span>
            <span className="sm:hidden">Contact</span>
            <Send size={16} className="text-indigo-600" />
          </motion.a>
        </div>
      </motion.nav>

      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-24 lg:pt-32"
      >
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="text-left"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium">Disponible pour de nouveaux projets</span>
            </motion.div>

            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 text-slate-100 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
            >
              Brundone Junior <br />
              <span className="text-indigo-500">
                Kadjio Sonna
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-indigo-200 mb-6 font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
            >
              Développeur Full-Stack Web & Mobile
            </motion.p>
            
            <motion.p 
              className="text-base text-slate-400 max-w-xl mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.5 }}
            >
              Passionné par la création d&apos;applications innovantes avec plus de 4 ans d&apos;expérience. 
              Je transforme vos idées en solutions digitales performantes.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.6 }}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/25 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                <Send size={18} />
                Me Contacter
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold flex items-center gap-2 transition-all border border-slate-700 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                <Download size={18} />
                Demander mon CV
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex gap-6 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.8 }}
            >
              <span className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Suivez-moi</span>
              <div className="h-px w-12 bg-slate-700"></div>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <social.icon size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative lg:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <motion.div 
              className="absolute inset-0 bg-indigo-600 rounded-[2rem] rotate-3 opacity-20 blur-xl"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [3, 6, 3],
                      scale: [1, 1.02, 1],
                    }
              }
              transition={{ duration: shouldReduceMotion ? 0 : 5, repeat: shouldReduceMotion ? 0 : Infinity }}
            />

            <div className="relative w-full max-w-sm aspect-[4/5] bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-slate-900/90 backdrop-blur-sm border-t border-slate-700">
                <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold mb-2 border border-indigo-500/30">
                  4+ ANS D&apos;EXPÉRIENCE
                </div>
                <a 
                  href="#competences" 
                  className="group/arrow flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 -mx-2 px-2 py-1 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("competences");
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover/arrow:bg-indigo-500 transition-all duration-300">
                    <ArrowRight size={16} className="text-indigo-400 group-hover/arrow:text-white transition-colors group-hover/arrow:translate-x-0.5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5 group-hover/arrow:text-indigo-300 transition-colors">Expert React & Java & Node</h3>
                    <p className="text-slate-400 text-xs">Prêt à relever de nouveaux défis</p>
                  </div>
                </a>
              </div>

              <Image 
                src="/images/profil.jpg" 
                alt="Photo de profil" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Badges de compétences flottants autour de la photo (effet visuel). */}
            <FloatingSkills shouldReduceMotion={!!shouldReduceMotion} />
          </motion.div>
          
        </div>
      </section>

      <motion.section 
        id="apropos" 
        className="py-32 px-6 bg-slate-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <User className="text-indigo-400" size={40} />
            À Propos de Moi
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Mon Parcours</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Développeur Full-Stack passionné avec plus de 4 ans d&apos;expérience dans la création 
                d&apos;applications web et mobiles innovantes. Je transforme des idées complexes en 
                solutions élégantes et performantes.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                Spécialisé dans les technologies modernes comme React, Node.js, et Flutter, 
                je m&apos;efforce de créer des expériences utilisateur exceptionnelles tout en 
                maintenant un code propre et maintenable.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">4+</div>
                  <div className="text-sm text-slate-400">Années d&apos;expérience</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">{PROJECTS.length}</div>
                  <div className="text-sm text-slate-400">Projets réalisés</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Expérience Professionnelle</h3>
              <div className="space-y-6">
                {EXPERIENCES.map((exp, index) => (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-indigo-500 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.6,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-indigo-300">{exp.title}</h4>
                        <p className="text-slate-400 flex items-center gap-2">
                          <Building2 size={16} />
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-indigo-400 font-medium">{exp.period}</p>
                        <p className="text-slate-500 text-sm">{exp.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="projets" 
        className="py-32 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Briefcase className="text-indigo-400" size={40} />
            Projets Réalisés
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={`${project.title}-${project.company}`}
                className="bg-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-indigo-500 transition-all duration-300 group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.1)"
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-indigo-300 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {(project.links ?? []).slice(0, 1).map((l) => (
                      <motion.a
                        key={`${project.title}-${l.label}`}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} - ${l.label}`}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{l.label}</span>
                        <ExternalLink size={16} aria-hidden="true" />
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-slate-400 flex items-center gap-2 mb-2">
                    <Building2 size={16} />
                    {project.company}
                  </p>
                  <p className="text-indigo-400 text-sm mb-4">{project.role}</p>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-indigo-900/30 px-3 py-1 rounded-full text-indigo-300 border border-indigo-800/30"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded-full text-slate-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Star size={14} className="text-indigo-400" />
                    <span>Projet vedette</span>
                  </div>
                  <Link
                    href={`/projets/${project.slug}`}
                    aria-label={`Voir le projet - ${project.title}`}
                    className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium transition hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md"
                  >
                    <motion.span whileHover={{ x: 5 }} className="inline-flex items-center gap-2">
                      <span>Voir le projet</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="competences" 
        className="py-32 px-6 bg-slate-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Award className="text-indigo-400" size={40} />
            Compétences Techniques
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(SKILLS).map(([category, items], index) => (
              <motion.div
                key={category}
                className="bg-slate-800/30 p-8 rounded-xl border border-slate-700"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgba(99, 102, 241, 0.5)"
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {category === "backend" && <Cpu className="text-indigo-400" size={24} />}
                  {category === "frontend" && <Globe className="text-indigo-400" size={24} />}
                  {category === "mobile" && <Phone className="text-indigo-400" size={24} />}
                  {category === "database" && <Database className="text-indigo-400" size={24} />}
                  {category === "tools" && <Wrench className="text-indigo-400" size={24} />}
                  
                  <h3 className="text-xl font-semibold text-indigo-300 capitalize">
                    {category === "backend" ? "Backend" : 
                     category === "frontend" ? "Frontend" :
                     category === "mobile" ? "Mobile" :
                     category === "database" ? "Base de Données" : "Outils"}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="text-sm bg-indigo-900/20 px-3 py-1 rounded-full text-indigo-300 border border-indigo-800/20"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(99, 102, 241, 0.3)",
                        borderColor: "rgba(99, 102, 241, 0.5)"
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="text-indigo-400" size={32} />
              Formation
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  className="bg-slate-800/30 p-8 rounded-xl border border-slate-700"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold text-indigo-300 mb-3">
                    {edu.title}
                  </h4>
                  <p className="text-slate-400 mb-2 flex items-center gap-2">
                    <Building2 size={16} />
                    {edu.school}
                  </p>
                  <p className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                    <Clock size={14} />
                    {edu.period}
                  </p>
                  {Array.isArray(edu.details) ? (
                    <ul className="grid gap-2 text-sm text-slate-300">
                      {edu.details.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/80" />
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-300 text-sm leading-relaxed">{edu.details}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="py-32 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Prêt à collaborer ?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-400 mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Disponible pour des projets freelance ou opportunités en CDI
          </motion.p>
          
          <motion.div 
            className="bg-slate-900/50 rounded-2xl p-10 border border-slate-700"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                className="flex items-center gap-4 justify-center md:justify-start"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-indigo-600/20 rounded-full border border-indigo-500/30">
                  <Mail className="text-indigo-400" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-slate-400 text-sm">Email</p>
                  <a
                    href="mailto:devkadjio@gmail.com"
                    className="text-slate-200 hover:text-indigo-400 transition-colors font-medium"
                  >
                    devkadjio@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 justify-center md:justify-start"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-indigo-600/20 rounded-full border border-indigo-500/30">
                  <Phone className="text-indigo-400" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-slate-400 text-sm">Téléphone</p>
                  <a
                    href="tel:+237652027456"
                    className="text-slate-200 hover:text-indigo-400 transition-colors font-medium"
                  >
                    +237 6 52 02 74 56
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.a
              href="mailto:devkadjio@gmail.com"
              className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Envoyer un message
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer 
        className="bg-slate-950 py-12 px-6 border-t border-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.p 
            className="text-slate-400 mb-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2024 Brundone Junior Kadjio Sonna. Développeur Full-Stack passionné.
          </motion.p>
          
          <motion.p 
            className="text-sm text-slate-500"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Perfectionniste • Esprit d&apos;equipe • Créatif • Adaptable
          </motion.p>
        </div>
      </motion.footer>

      <motion.button
        type="button"
        aria-label="Revenir en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" })}
        className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg shadow-black/30 backdrop-blur-xl transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        initial={false}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 14,
          pointerEvents: showBackToTop ? "auto" : "none",
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
      >
        <ChevronUp size={18} aria-hidden="true" />
      </motion.button>
    </div>
  );
}
