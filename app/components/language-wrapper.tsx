"use client";

import { LanguageProvider } from "../providers/language-provider";
import { defaultLocale, Locale, locales, isRtlLocale } from "@/i18n/config";
import enMessages from "@/i18n/messages/en.json";
import { useEffect, useState } from "react";

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export default function LanguageWrapper({ children }: LanguageWrapperProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState(enMessages);

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") as Locale | null) || defaultLocale;
    const validLocale = (locales as readonly string[]).includes(savedLocale) ? savedLocale : defaultLocale;
    setLocale(validLocale);
    
    // Set initial HTML dir and lang attributes
    if (typeof document !== "undefined") {
      document.documentElement.dir = isRtlLocale(validLocale) ? "rtl" : "ltr";
      document.documentElement.lang = validLocale;
    }
    
    const loadMessages = async (): Promise<void> => {
      try {
        const messagesModule = await import(`@/i18n/messages/${validLocale}.json`);
        setMessages(messagesModule.default);
      } catch (error) {
        console.error(`Failed to load messages for locale: ${validLocale}`, error);
      }
    };
    
    loadMessages();
  }, []);

  return (
    <LanguageProvider initialLocale={locale} messages={messages}>
      {children}
    </LanguageProvider>
  );
}

