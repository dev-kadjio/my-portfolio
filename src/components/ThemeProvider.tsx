"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function detectInitialTheme(): Theme {
  const stored = typeof localStorage === "undefined" ? null : localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;

  const prefersDark =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

  return prefersDark ? "dark" : "light";
}

function applyThemeToDocument(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const initial = detectInitialTheme();
    setThemeState(initial);
    applyThemeToDocument(initial);
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    if (typeof localStorage !== "undefined") localStorage.setItem("theme", nextTheme);
    applyThemeToDocument(nextTheme);
  }, []);

  /* const toggleTheme = useCallback(() => {
    console.log(theme);
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, [setTheme]); */

  const toggleTheme = useCallback(() => {
    console.log(theme);
    // setTheme((t) => (t === "dark" ? "light" : "dark"));
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  const value = useMemo<ThemeContextValue>(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
