"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "../lib/i18n";

function FlagFrance({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="8" height="16" x="0" y="0" fill="#0055A4" />
      <rect width="8" height="16" x="8" y="0" fill="#FFFFFF" />
      <rect width="8" height="16" x="16" y="0" fill="#EF4135" />
    </svg>
  );
}

function FlagUk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="2" />
      <rect x="10" y="0" width="4" height="16" fill="#FFFFFF" />
      <rect x="0" y="6" width="24" height="4" fill="#FFFFFF" />
      <rect x="10.8" y="0" width="2.4" height="16" fill="#C8102E" />
      <rect x="0" y="6.8" width="24" height="2.4" fill="#C8102E" />
    </svg>
  );
}

export function LanguageToggle({
  locale,
  onChange,
  ariaLabel,
}: {
  locale: Locale;
  onChange: (next: Locale) => void;
  ariaLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (event.target instanceof Node && !root.contains(event.target)) setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const current = useMemo(
    () =>
      locale === "fr"
        ? { code: "FR", /* label: "Français", */ Flag: FlagFrance }
        : { code: "EN", /* label: "English", */ Flag: FlagUk },
    [locale],
  );

  return (
    <div className="relative" ref={rootRef}>
      <motion.button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] px-3 text-[rgb(var(--text))] transition hover:bg-[rgb(var(--panel-bg)/var(--panel))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen((v) => !v)}
      >
        <current.Flag className="h-4 w-6 rounded-sm shadow-sm" />
        <span className="text-xs font-semibold tracking-wide">{current.code}</span>
        <svg viewBox="0 0 20 20" className="h-4 w-4 opacity-80" aria-hidden="true">
          <path
            d="M5.5 7.5 10 12l4.5-4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {open && (
        <motion.div
          role="menu"
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.16 }}
          // className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-strong))] shadow-xl shadow-black/10 backdrop-blur-xl"
          className="absolute right-0 mt-2 w-full overflow-hidden rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-strong))] shadow-xl shadow-black/10 backdrop-blur-xl"
        >
          <button
            type="button"
            role="menuitem"
            className={[
              "flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-[rgb(var(--panel-bg)/var(--panel))]",
              locale === "fr" ? "text-[rgb(var(--text))]" : "text-[rgb(var(--text-muted))]",
            ].join(" ")}
            onClick={() => {
              onChange("fr");
              setOpen(false);
            }}
          >
            <FlagFrance className="h-4 w-6 rounded-sm shadow-sm" />
            <span className="min-w-8 text-xs font-bold tracking-wide">FR</span>
            {/* <span className="truncate font-semibold">Français</span> */}
          </button>

          <button
            type="button"
            role="menuitem"
            className={[
              "flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-[rgb(var(--panel-bg)/var(--panel))]",
              locale === "en" ? "text-[rgb(var(--text))]" : "text-[rgb(var(--text-muted))]",
            ].join(" ")}
            onClick={() => {
              onChange("en");
              setOpen(false);
            }}
          >
            <FlagUk className="h-4 w-6 rounded-sm shadow-sm" />
            <span className="min-w-8 text-xs font-bold tracking-wide">EN</span>
            {/* <span className="truncate font-semibold">English</span> */}
          </button>
        </motion.div>
      )}
    </div>
  );
}
