"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import en from "@/locales/en.json";
import te from "@/locales/te.json";

type Locale = "en" | "te";
type Translations = typeof en;

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const translations: Record<Locale, Translations> = { en, te };
const STORAGE_KEY = "sksd_locale";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "en" on server — read localStorage in useEffect after hydration
  const [locale, setLocaleState] = useState<Locale>("en");

  // On first mount: read saved locale from localStorage (client only)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "te") {
        setLocaleState("te");
        document.documentElement.lang = "te";
        document.documentElement.classList.add("lang-te");
      }
    } catch {
      // localStorage may be unavailable (private mode, etc.)
    }
  }, []);


  // Sync html[lang] attribute and localStorage whenever locale changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = locale;
      localStorage.setItem(STORAGE_KEY, locale);
      // Apply Telugu body font class
      if (locale === "te") {
        document.documentElement.classList.add("lang-te");
      } else {
        document.documentElement.classList.remove("lang-te");
      }
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "te" : "en"));
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        t: translations[locale],
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Helper to get bilingual text from { en, te } objects
export function useBilingualText() {
  const { locale } = useLanguage();
  return useCallback(
    (text: { en: string; te: string }) => text[locale],
    [locale]
  );
}
