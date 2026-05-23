"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LOCALE, getMessages, type Locale, type Messages } from "../lib/i18n";

type I18nContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readCookieValue(name: string) {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1] ?? "") : undefined;
}

function writeCookieValue(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/; max-age=31536000; samesite=lax`;
}

function detectInitialLocale(): Locale {
  const cookieLocale = readCookieValue("NEXT_LOCALE");
  if (cookieLocale === "fr" || cookieLocale === "en") return cookieLocale;

  const stored = typeof localStorage === "undefined" ? null : localStorage.getItem("NEXT_LOCALE");
  if (stored === "fr" || stored === "en") return stored;

  const browser = typeof navigator === "undefined" ? "" : navigator.language.toLowerCase();
  return browser.startsWith("fr") ? "fr" : "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    writeCookieValue("NEXT_LOCALE", nextLocale);
    if (typeof localStorage !== "undefined") localStorage.setItem("NEXT_LOCALE", nextLocale);
    if (typeof document !== "undefined") document.documentElement.lang = nextLocale;
  }, []);

  const messages = useMemo(() => getMessages(locale), [locale]);

  const value = useMemo<I18nContextValue>(() => ({ locale, messages, setLocale }), [locale, messages, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
