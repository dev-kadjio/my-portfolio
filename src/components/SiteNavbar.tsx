"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Moon, Send, Sun } from "lucide-react";
import { useI18n } from "./I18nProvider";
import { useTheme } from "./ThemeProvider";
import { LanguageToggle } from "./LanguageToggle";
import { NAV_ITEMS, SITE_LOGO_SRC } from "../lib/home.constants";

type Variant = "home" | "page";

export function SiteNavbar({ variant }: { variant: Variant }) {
  const { locale, messages, setLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0]?.id ?? "accueil");
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (variant !== "home") return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const visibilityById = new Map<string, number>(sections.map((s) => [s.id, 0]));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          visibilityById.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let bestId: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visibilityById.entries()) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId) setActiveSection(bestId);
      },
      { root: null, rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.4, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds, variant]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
  };

  const navHref = (id: string) => (variant === "home" ? `#${id}` : `/#${id}`);

  return (
    <motion.nav
      className="fixed top-6 inset-x-0 mx-auto w-[95%] max-w-5xl z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
    >
      <div
        className={[
          "flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500",
          isScrolled
            ? "bg-[rgb(var(--panel-bg)/var(--panel-strong))] backdrop-blur-xl border-[rgb(var(--border)/var(--border-strong))] shadow-2xl shadow-black/10"
            : "bg-[rgb(var(--panel-bg)/var(--panel))] backdrop-blur-md border-[rgb(var(--border)/var(--border-soft))]",
        ].join(" ")}
      >
        {variant === "home" ? (
          <motion.a
            href="#accueil"
            className="text-xl font-bold text-[rgb(var(--text))] flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("accueil");
            }}
          >
            {/* <span className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/20">BK</span> */}
            <span className="relative h-10 w-10 overflow-hidden rounded-xl shadow-lg shadow-black/10">
              <Image src={SITE_LOGO_SRC} alt="BK.dev" fill sizes="40px" className="object-contain" priority />
            </span>
            <span className="hidden sm:block font-bold tracking-tight">BK.dev</span>
          </motion.a>
        ) : (
          <Link href="/" className="text-xl font-bold text-[rgb(var(--text))] flex items-center gap-2">
            {/* <span className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/20">BK</span> */}
            <span className="relative h-10 w-10 overflow-hidden rounded-xl shadow-lg shadow-black/10">
              <Image src={SITE_LOGO_SRC} alt="BK.dev" fill sizes="40px" className="object-contain" priority />
            </span>
            <span className="hidden sm:block font-bold tracking-tight">BK.dev</span>
          </Link>
        )}

        <div className="hidden md:flex items-center gap-1 bg-[rgb(var(--page-bg)/0.45)] p-1.5 rounded-full border border-[rgb(var(--border)/var(--border-soft))] backdrop-blur-sm">
          {NAV_ITEMS.slice(0, 4).map((item) => (
            <motion.a
              key={item.id}
              href={navHref(item.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                variant === "home" && activeSection === item.id
                  ? "text-[rgb(var(--text))]"
                  : "text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))]"
              }`}
              onClick={(e) => {
                if (variant !== "home") return;
                e.preventDefault();
                scrollToSection(item.id);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {variant === "home" && activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/25 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {messages.nav[item.key]}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle locale={locale} onChange={setLocale} ariaLabel={messages.controls.language} />

          <motion.button
            type="button"
            aria-label={messages.controls.theme}
            className="grid h-10 w-10 place-items-center rounded-full border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] text-[rgb(var(--text))] transition hover:bg-[rgb(var(--panel-bg)/var(--panel))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--page-bg))]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </motion.button>

          {variant === "home" ? (
            <motion.a
              href="#contact"
              className="px-6 py-2.5 bg-[rgb(var(--text))] text-[rgb(var(--page-bg))] rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              <span className="hidden sm:inline">{messages.hero.ctaContact}</span>
              <span className="sm:hidden">{messages.nav.contact}</span>
              <Send size={16} className="text-blue-500" />
            </motion.a>
          ) : (
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-[rgb(var(--text))] text-[rgb(var(--page-bg))] rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span className="hidden sm:inline">{messages.hero.ctaContact}</span>
              <span className="sm:hidden">{messages.nav.contact}</span>
              <Send size={16} className="text-blue-500" />
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
