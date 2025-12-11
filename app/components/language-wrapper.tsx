"use client";

import { LanguageProvider } from "../providers/language-provider";
import { defaultLocale } from "@/i18n/config";
import enMessages from "@/i18n/messages/en.json";
import { useEffect, useState } from "react";

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export default function LanguageWrapper({ children }: LanguageWrapperProps) {
  const [locale, setLocale] = useState<"en" | "fa">(defaultLocale);
  const [messages, setMessages] = useState(enMessages);

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") as "en" | "fa" | null) || defaultLocale;
    setLocale(savedLocale);
    
    // Set initial HTML dir and lang attributes
    if (typeof document !== "undefined") {
      document.documentElement.dir = savedLocale === "fa" ? "rtl" : "ltr";
      document.documentElement.lang = savedLocale;
    }
    
    const loadMessages = async (): Promise<void> => {
      try {
        const messagesModule = await import(`@/i18n/messages/${savedLocale}.json`);
        setMessages(messagesModule.default);
      } catch (error) {
        console.error(`Failed to load messages for locale: ${savedLocale}`, error);
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

