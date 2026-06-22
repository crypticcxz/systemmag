"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translate, type I18nKey, type Lang } from "@/lib/i18n";

type Theme = "dark" | "light";

type AppContextValue = {
  lang: Lang;
  theme: Theme;
  t: (key: I18nKey) => string;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function ThemeLanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  // Light is the only theme (the toggle was removed); keep it fixed.
  const [theme] = useState<Theme>("light");

  // Hydrate language from storage on mount.
  useEffect(() => {
    const storedLang = readStored("systemmag-lang");
    setLangState(storedLang === "en" ? "en" : "fr");
  }, []);

  // Reflect language on <html lang> and persist.
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("systemmag-lang", lang);
    } catch {
      // Some locked-down contexts block localStorage.
    }
  }, [lang]);

  // Reflect theme on <html data-theme> and persist.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("systemmag-theme", theme);
    } catch {
      // Some locked-down contexts block localStorage.
    }
  }, [theme]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "fr" ? "en" : "fr")),
    [],
  );
  const t = useCallback((key: I18nKey) => translate(lang, key), [lang]);

  const value = useMemo<AppContextValue>(
    () => ({ lang, theme, t, setLang, toggleLang }),
    [lang, theme, t, setLang, toggleLang],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within ThemeLanguageProvider");
  }
  return ctx;
}

export function useT(): (key: I18nKey) => string {
  return useApp().t;
}
