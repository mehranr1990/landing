"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../providers/language-provider";
import { Locale } from "@/i18n/config";
import Image from "next/image"

interface LanguageOption {
  code: Locale;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fa", name: "فارسی", flag: "🇮🇷" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage: LanguageOption | undefined = languages.find(
    (lang) => lang.code === locale
  );

  const handleLanguageChange = (newLocale: Locale): void => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-gray-300 cursor-pointer px-2 py-1 rounded-full text-sm min-w-[10px] justify-between"
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          <Image
          src="/icons/world.png"
          alt="Mission Icon"
          width={20}
          height={20}></Image>
        </span>
      
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-full bg-white rounded-lg shadow-lg border border-gray-200 min-w-[150px] overflow-hidden z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                locale === language.code ? "bg-teal-50 text-teal-600" : "text-gray-700"
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
              {locale === language.code && (
                <svg
                  className="w-4 h-4 ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

