"use client";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, getProjectText } from "../data/projects";
import { useI18n } from "../components/I18nProvider";
import { useTheme } from "../components/ThemeProvider";
import { SiteNavbar } from "../components/SiteNavbar";
import { SiteFooter } from "../components/SiteFooter";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  EDUCATION,
  EXPERIENCES,
  FLOATING_SKILLS,
  SKILLS,
  SOCIAL_LINKS,
  WHATSAPP_DEFAULT_TEXT,
  WHATSAPP_PHONE,
} from "../lib/home.constants";
import { mapContactApiErrors, type ContactFormErrors, type ContactFormValues, validateContactForm } from "../lib/contactForm";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
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
  Loader2,
  CircleCheck,
  TriangleAlert,
  MessageCircle,
} from "lucide-react";


function FloatingSkills({ shouldReduceMotion, label }: { shouldReduceMotion: boolean; label: string }) {
  return (
    // Conteneur absolu pour positionner les badges autour de la carte (décoratif).
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {FLOATING_SKILLS.map((skill, index) => (
        <motion.div
          key={`${skill.name}-${index}`}
          className={[
            "absolute z-30",
            "rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-strong))] px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl",
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
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))]">
              <img src={skill.logoSrc} alt="" className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-[rgb(var(--text))]">{skill.name}</div>
              <div className="text-xs text-[rgb(var(--text-muted))]">{label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const { locale, messages } = useI18n();
  const { theme } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [contactValues, setContactValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactErrors, setContactErrors] = useState<ContactFormErrors>({});
  const [contactStatus, setContactStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
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
      setShowBackToTop(y > 700);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
  };

  const onContactChange = (field: keyof ContactFormValues) => {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setContactValues((prev) => ({ ...prev, [field]: value }));
      setContactErrors((prev) => ({ ...prev, [field]: undefined }));
      setContactStatus("idle");
    };
  };

  const submitContactForm = async (e: FormEvent) => {
    e.preventDefault();
    const errors = validateContactForm(contactValues, messages);
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      setContactStatus("idle");
      return;
    }

    try {
      setContactStatus("submitting");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(contactValues),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { errors?: Record<string, string> } | null;
        setContactErrors(mapContactApiErrors(body?.errors, messages));
        setContactStatus("error");
        return;
      }

      setContactValues({ name: "", email: "", subject: "", message: "" });
      setContactErrors({});
      setContactStatus("success");
    } catch {
      setContactStatus("error");
    }
  };

  const ambientBackground =
    theme === "dark"
      ? "radial-gradient(1200px circle at 20% 10%, rgba(37,99,235,0.18), transparent 60%), radial-gradient(900px circle at 90% 20%, rgba(56,189,248,0.12), transparent 55%), radial-gradient(900px circle at 50% 120%, rgba(59,130,246,0.12), transparent 55%)"
      : "radial-gradient(1200px circle at 18% 10%, rgba(16,185,129,0.10), transparent 60%), radial-gradient(900px circle at 90% 20%, rgba(220,38,38,0.08), transparent 55%), radial-gradient(900px circle at 50% 120%, rgba(250,204,21,0.10), transparent 55%)";

  return (
    <div className="min-h-screen bg-[rgb(var(--page-bg))] text-[rgb(var(--text))] overflow-x-hidden relative">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: ambientBackground,
        }}
      />

      <motion.div
        className="fixed inset-x-0 top-0 z-60 h-1 origin-left bg-linear-to-r from-green-600 via-red-600 to-yellow-400"
        style={{ scaleX: scrollProgress }}
        aria-hidden="true"
      />

      <SiteNavbar variant="home" />

      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-24 lg:pt-32"
      >
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="text-left"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--panel-bg)/var(--panel-soft))] border border-[rgb(var(--border)/var(--border-soft))] text-blue-600 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-medium">{messages.hero.available}</span>
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-6 text-[rgb(var(--text))] leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
            >
              {messages.hero.titleLine1} <br />
              <span className="text-blue-600">{messages.hero.titleLine2}</span>
            </motion.h1>

            <motion.p
              className="text-xl text-blue-600 mb-6 font-light"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
            >
              {messages.hero.subtitle}
            </motion.p>

            <motion.p
              className="text-base text-[rgb(var(--text-muted))] max-w-xl mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.5 }}
            >
              {messages.hero.intro}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.6 }}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/25 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                <Send size={18} />
                {messages.hero.ctaContact}
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-[rgb(var(--panel-bg)/var(--panel-soft))] hover:bg-[rgb(var(--panel-bg)/var(--panel))] text-[rgb(var(--text))] rounded-full font-semibold flex items-center gap-2 transition-all border border-[rgb(var(--border)/var(--border-soft))] text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                <Download size={18} />
                {messages.hero.ctaCv}
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-6 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.8 }}
            >
              <span className="text-[rgb(var(--text-faint))] text-sm uppercase tracking-wider font-semibold">
                {messages.hero.followMe}
              </span>
              <div className="h-px w-12 bg-[rgb(var(--border)/0.7)]"></div>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.key === "github" ? Github : social.key === "linkedin" ? Linkedin : Mail;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target={social.key !== "mail" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] text-[rgb(var(--text))] transition hover:bg-[rgb(var(--panel-bg)/var(--panel))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--page-bg))]"
                    >
                      <Icon size={20} aria-hidden="true" />
                    </a>
                  );
                })}
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
              className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-3 opacity-20 blur-xl"
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

            <div className="relative w-full max-w-sm aspect-[4/5] bg-[rgb(var(--panel-bg))] rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-[rgb(var(--panel-bg)/0.92)] backdrop-blur-sm border-t border-[rgb(var(--border)/var(--border-soft))]">
                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-700 rounded-full text-xs font-bold mb-2 border border-blue-500/30">
                  {messages.hero.experienceBadge}
                </div>
                <a
                  href="#competences"
                  className="group/arrow flex items-center gap-3 cursor-pointer hover:bg-[rgb(var(--panel-bg)/0.65)] -mx-2 px-2 py-1 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("competences");
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center group-hover/arrow:bg-blue-500 transition-all duration-300">
                    <ArrowRight size={16} className="text-blue-500 group-hover/arrow:text-white transition-colors group-hover/arrow:translate-x-0.5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[rgb(var(--text))] mb-0.5 group-hover/arrow:text-blue-600 transition-colors">
                      {messages.hero.profileCardTitle}
                    </h3>
                    <p className="text-[rgb(var(--text-muted))] text-xs">{messages.hero.profileCardSubtitle}</p>
                  </div>
                </a>
              </div>

              <Image
                src="/images/profil.jpg"
                alt={messages.a11y.profilePhotoAlt}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 420px, 384px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Badges de compétences flottants autour de la photo (effet visuel). */}
            <FloatingSkills shouldReduceMotion={!!shouldReduceMotion} label={messages.hero.floatingSkillLabel} />
          </motion.div>

        </div>
      </section>

      <motion.section
        id="apropos"
        className="py-32 px-6 bg-[rgb(var(--panel-bg)/var(--section))]"
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
            <User className="text-blue-500" size={40} />
            {messages.about.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">{messages.about.journeyTitle}</h3>
              <p className="text-[rgb(var(--text-subtle))] leading-relaxed mb-6">{messages.about.journeyP1}</p>
              <p className="text-[rgb(var(--text-subtle))] leading-relaxed mb-8">{messages.about.journeyP2}</p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[rgb(var(--panel-bg)/var(--panel))] p-4 rounded-lg border border-[rgb(var(--border)/var(--border-soft))]">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{messages.about.years}</div>
                  <div className="text-sm text-[rgb(var(--text-muted))]">{messages.about.yearsLabel}</div>
                </div>
                <div className="bg-[rgb(var(--panel-bg)/var(--panel))] p-4 rounded-lg border border-[rgb(var(--border)/var(--border-soft))]">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{PROJECTS.length}</div>
                  <div className="text-sm text-[rgb(var(--text-muted))]">{messages.about.projectsLabel}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">{messages.about.expTitle}</h3>
              <div className="space-y-6">
                {EXPERIENCES.map((exp, index) => (
                  <motion.div
                    key={`${exp.company.fr}-${exp.period.fr}`}
                    className="bg-[rgb(var(--panel-bg)/var(--panel))] p-6 rounded-lg border border-[rgb(var(--border)/var(--border-soft))] hover:border-blue-500 transition-all duration-300"
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
                        <h4 className="text-lg font-semibold text-blue-600">{exp.title[locale]}</h4>
                        <p className="text-[rgb(var(--text-muted))] flex items-center gap-2">
                          <Building2 size={16} />
                          {exp.company[locale]}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-600 font-medium">{exp.period[locale]}</p>
                        <p className="text-[rgb(var(--text-faint))] text-sm">{exp.duration[locale]}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
                      <MapPin size={14} />
                      {exp.location[locale]}
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
            <Briefcase className="text-blue-500" size={40} />
            {messages.projects.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.slug}
                className="bg-[rgb(var(--panel-bg)/var(--panel))] rounded-xl p-8 border border-[rgb(var(--border)/var(--border-soft))] hover:border-blue-500 transition-all duration-300 group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.1)"
                }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-blue-600 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {(project.links ?? [])
                      // .slice(0, 1)
                      .slice(0, 2)
                      .map((l) => (
                        <motion.a
                          key={`${project.slug}-${l.href}`}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} - ${getProjectText(l.label, locale)}`}
                          className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] px-3 py-2 text-xs font-semibold text-[rgb(var(--text))] transition hover:bg-[rgb(var(--panel-bg)/var(--panel))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--page-bg))]"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{getProjectText(l.label, locale)}</span>
                          <ExternalLink size={16} aria-hidden="true" />
                        </motion.a>
                      ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[rgb(var(--text-muted))] flex items-center gap-2 mb-2">
                    <Building2 size={16} />
                    {getProjectText(project.company, locale)}
                  </p>
                  <p className="text-blue-600 text-sm mb-4">{getProjectText(project.role, locale)}</p>
                </div>

                <p className="text-[rgb(var(--text-subtle))] mb-6 leading-relaxed">
                  {getProjectText(project.description, locale)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs bg-blue-500/10 px-3 py-1 rounded-full text-blue-700 border border-blue-500/20"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.2)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs bg-[rgb(var(--panel-bg)/0.75)] px-2 py-1 rounded-full text-[rgb(var(--text-muted))] border border-[rgb(var(--border)/0.35)]">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
                    <Star size={14} className="text-blue-500" />
                    <span>{messages.projects.featured}</span>
                  </div>
                  <Link
                    href={`/projets/${project.slug}`}
                    aria-label={`${messages.projects.viewProject} - ${project.title}`}
                    className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium transition hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--page-bg))] rounded-md"
                  >
                    <motion.span whileHover={{ x: 5 }} className="inline-flex items-center gap-2">
                      <span>{messages.projects.viewProject}</span>
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
        className="py-32 px-6 bg-[rgb(var(--panel-bg)/var(--section))]"
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
            <Award className="text-blue-500" size={40} />
            {messages.skills.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(Object.keys(SKILLS) as Array<keyof typeof SKILLS>).map((category, index) => (
              <motion.div
                key={category}
                className="bg-[rgb(var(--panel-bg)/var(--panel))] p-8 rounded-xl border border-[rgb(var(--border)/var(--border-soft))]"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(37, 99, 235, 0.5)"
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {category === "backend" && <Cpu className="text-blue-500" size={24} />}
                  {category === "frontend" && <Globe className="text-blue-500" size={24} />}
                  {category === "mobile" && <Phone className="text-blue-500" size={24} />}
                  {category === "database" && <Database className="text-blue-500" size={24} />}
                  {category === "tools" && <Wrench className="text-blue-500" size={24} />}

                  <h3 className="text-xl font-semibold text-blue-600 capitalize">
                    {category === "backend"
                      ? messages.skills.backend
                      : category === "frontend"
                        ? messages.skills.frontend
                        : category === "mobile"
                          ? messages.skills.mobile
                          : category === "database"
                            ? messages.skills.database
                            : messages.skills.tools}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {SKILLS[category][locale].map((skill) => (
                    <motion.span
                      key={skill}
                      className="text-sm bg-blue-500/10 px-3 py-1 rounded-full text-blue-700 border border-blue-500/20"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(37, 99, 235, 0.3)",
                        borderColor: "rgba(37, 99, 235, 0.5)"
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
              <GraduationCap className="text-blue-500" size={32} />
              {messages.skills.educationTitle}
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.title.fr}
                  className="bg-[rgb(var(--panel-bg)/var(--panel))] p-8 rounded-xl border border-[rgb(var(--border)/var(--border-soft))]"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-xl font-semibold text-blue-600 mb-3">{edu.title[locale]}</h4>
                  <p className="text-[rgb(var(--text-muted))] mb-2 flex items-center gap-2">
                    <Building2 size={16} />
                    {edu.school[locale]}
                  </p>
                  <p className="text-sm text-[rgb(var(--text-faint))] mb-4 flex items-center gap-2">
                    <Clock size={14} />
                    {edu.period[locale]}
                  </p>
                  {Array.isArray(edu.details[locale]) ? (
                    <ul className="grid gap-2 text-sm text-[rgb(var(--text-subtle))]">
                      {(edu.details[locale] as string[]).map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/80" />
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[rgb(var(--text-subtle))] text-sm leading-relaxed">
                      {edu.details[locale] as string}
                    </p>
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
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-8 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {messages.contact.title}
          </motion.h2>

          <motion.p
            className="text-xl text-[rgb(var(--text-muted))] mb-16 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {messages.contact.subtitle}
          </motion.p>

          <div className="grid gap-6">
            {/*
            <motion.div
              className="rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel))] p-10"
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 text-left">
                <div className="text-sm font-semibold text-[rgb(var(--text))]">{messages.contact.contactQuickTitle}</div>
                <div className="mt-1 text-sm text-[rgb(var(--text-muted))]">{messages.contact.subtitle}</div>
              </div>

              <div className="grid gap-6">
                <motion.div className="flex items-center gap-4" whileHover={{ scale: 1.02 }}>
                  <div className="p-3 bg-blue-600/15 rounded-full border border-blue-500/25">
                    <Mail className="text-blue-600" size={22} />
                  </div>
                  <div className="text-left">
                    <p className="text-[rgb(var(--text-muted))] text-sm">{messages.contact.email}</p>
                    <a
                      href="mailto:devkadjio@gmail.com"
                      className="text-[rgb(var(--text))] hover:text-blue-600 transition-colors font-medium"
                    >
                      devkadjio@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4" whileHover={{ scale: 1.02 }}>
                  <div className="p-3 bg-blue-600/15 rounded-full border border-blue-500/25">
                    <Phone className="text-blue-600" size={22} />
                  </div>
                  <div className="text-left">
                    <p className="text-[rgb(var(--text-muted))] text-sm">{messages.contact.phone}</p>
                    <a
                      href="tel:+237652027456"
                      className="text-[rgb(var(--text))] hover:text-blue-600 transition-colors font-medium"
                    >
                      +237 6 52 02 74 56
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="mt-10 flex justify-start">
                <motion.a
                  href="mailto:devkadjio@gmail.com"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={18} />
                  {messages.contact.sendMessage}
                </motion.a>
              </div>
            </motion.div>
            */}

            <motion.div
              className="rounded-2xl border border-[rgb(var(--border)/0.45)] bg-[rgb(var(--panel-bg)/0.55)] p-10"
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 text-left">
                <div className="text-sm font-semibold text-[rgb(var(--text))]">{messages.contact.contactFormTitle}</div>
                <div className="mt-1 text-sm text-[rgb(var(--text-muted))]">{messages.contact.formHint}</div>
              </div>

              <div className="mb-8 grid gap-3 sm:grid-cols-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-strong))] px-4 py-3 text-left transition hover:bg-[rgb(var(--panel-bg))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-600">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-[rgb(var(--text-muted))]">{messages.contact.email}</span>
                    <span className="block truncate text-sm font-semibold text-[rgb(var(--text))] group-hover:text-blue-600">
                      {CONTACT_EMAIL}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${CONTACT_PHONE_E164}`}
                  className="group flex items-center gap-3 rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-strong))] px-4 py-3 text-left transition hover:bg-[rgb(var(--panel-bg))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-600">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-[rgb(var(--text-muted))]">{messages.contact.phone}</span>
                    <span className="block truncate text-sm font-semibold text-[rgb(var(--text))] group-hover:text-blue-600">
                      {CONTACT_PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT[locale])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-strong))] px-4 py-3 text-left transition hover:bg-[rgb(var(--panel-bg))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600">
                    <MessageCircle size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-[rgb(var(--text-muted))]">{messages.contact.whatsapp}</span>
                    <span className="block truncate text-sm font-semibold text-[rgb(var(--text))] group-hover:text-emerald-600">
                      {messages.contact.whatsappCta}
                    </span>
                  </span>
                </a>
              </div>

              <form className="grid gap-5" onSubmit={submitContactForm} noValidate>
                <div className="grid gap-2 text-left">
                  <label className="text-sm font-medium text-[rgb(var(--text))]" htmlFor="contact-name">
                    {messages.contact.formNameLabel}
                  </label>
                  <input
                    id="contact-name"
                    value={contactValues.name}
                    onChange={onContactChange("name")}
                    autoComplete="name"
                    className="h-11 rounded-xl border border-[rgb(var(--border)/0.55)] bg-[rgb(var(--panel-bg))] px-4 text-sm text-[rgb(var(--text))] outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    aria-invalid={!!contactErrors.name}
                  />
                  {contactErrors.name && <div className="text-sm text-rose-500">{contactErrors.name}</div>}
                </div>

                <div className="grid gap-2 text-left">
                  <label className="text-sm font-medium text-[rgb(var(--text))]" htmlFor="contact-email">
                    {messages.contact.formEmailLabel}
                  </label>
                  <input
                    id="contact-email"
                    value={contactValues.email}
                    onChange={onContactChange("email")}
                    autoComplete="email"
                    className="h-11 rounded-xl border border-[rgb(var(--border)/0.55)] bg-[rgb(var(--panel-bg))] px-4 text-sm text-[rgb(var(--text))] outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    aria-invalid={!!contactErrors.email}
                    inputMode="email"
                  />
                  {contactErrors.email && <div className="text-sm text-rose-500">{contactErrors.email}</div>}
                </div>

                <div className="grid gap-2 text-left">
                  <label className="text-sm font-medium text-[rgb(var(--text))]" htmlFor="contact-subject">
                    {messages.contact.formSubjectLabel}
                  </label>
                  <input
                    id="contact-subject"
                    value={contactValues.subject}
                    onChange={onContactChange("subject")}
                    className="h-11 rounded-xl border border-[rgb(var(--border)/0.55)] bg-[rgb(var(--panel-bg))] px-4 text-sm text-[rgb(var(--text))] outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    aria-invalid={!!contactErrors.subject}
                  />
                  {contactErrors.subject && <div className="text-sm text-rose-500">{contactErrors.subject}</div>}
                </div>

                <div className="grid gap-2 text-left">
                  <label className="text-sm font-medium text-[rgb(var(--text))]" htmlFor="contact-message">
                    {messages.contact.formMessageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    value={contactValues.message}
                    onChange={onContactChange("message")}
                    rows={5}
                    className="rounded-xl border border-[rgb(var(--border)/0.55)] bg-[rgb(var(--panel-bg))] px-4 py-3 text-sm text-[rgb(var(--text))] outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    aria-invalid={!!contactErrors.message}
                  />
                  {contactErrors.message && <div className="text-sm text-rose-500">{contactErrors.message}</div>}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="min-h-[1.5rem] text-left text-sm">
                    {contactStatus === "success" && (
                      <div className="inline-flex items-center gap-2 text-emerald-500">
                        <CircleCheck size={16} aria-hidden="true" />
                        <span>{messages.contact.formSuccess}</span>
                      </div>
                    )}
                    {contactStatus === "error" && (
                      <div className="inline-flex items-center gap-2 text-rose-500">
                        <TriangleAlert size={16} aria-hidden="true" />
                        <span>{messages.contact.formError}</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={contactStatus === "submitting"}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition disabled:opacity-70"
                  >
                    {contactStatus === "submitting" && <Loader2 size={16} className="animate-spin" aria-hidden="true" />}
                    {contactStatus !== "submitting" && <Send size={16} aria-hidden="true" />}
                    <span>
                      {contactStatus === "submitting" ? messages.contact.formSubmitting : messages.contact.formSubmit}
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SiteFooter />

      <motion.button
        type="button"
        aria-label={messages.a11y.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" })}
        className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] text-[rgb(var(--text))] shadow-lg shadow-black/15 backdrop-blur-xl transition hover:bg-[rgb(var(--panel-bg)/var(--panel))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--page-bg))]"
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
