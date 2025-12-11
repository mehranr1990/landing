"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Locale } from "@/i18n/config";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
  messages: Record<string, any>;
}

export function LanguageProvider({ children, initialLocale = "en", messages }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [currentMessages, setCurrentMessages] = useState(messages);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && (savedLocale === "en" || savedLocale === "fa")) {
      setLocaleState(savedLocale);
      loadMessages(savedLocale);
    }
  }, []);

  const loadMessages = async (newLocale: Locale): Promise<void> => {
    try {
      const messagesModule = await import(`@/i18n/messages/${newLocale}.json`);
      setCurrentMessages(messagesModule.default);
    } catch (error) {
      console.error(`Failed to load messages for locale: ${newLocale}`, error);
    }
  };

  const setLocale = async (newLocale: Locale): Promise<void> => {
    if (newLocale === locale) return;
    localStorage.setItem("locale", newLocale);
    await loadMessages(newLocale);
    setLocaleState(newLocale);
    
    // Update HTML dir attribute for RTL support
    if (typeof document !== "undefined") {
      document.documentElement.dir = newLocale === "fa" ? "rtl" : "ltr";
      document.documentElement.lang = newLocale;
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={currentMessages}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}

