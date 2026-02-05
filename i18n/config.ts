export const locales = [
  'af', // Afrikaans
  'ar', // Arabic
  'de', // German
  'en', // English
  'es', // Spanish
  'fa', // Persian/Farsi
  'fr', // French
  'hi', // Hindi
  'ky', // Kyrgyz
  'ps', // Pashto
  'pt', // Portuguese
  'ru', // Russian
  'tg', // Tajik
  'tr', // Turkish
  'uz', // Uzbek
  'zh', // Chinese
] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/**
 * RTL (Right-to-Left) languages
 */
export const rtlLocales: readonly Locale[] = ['ar', 'fa', 'ps','af'] as const;

/**
 * Check if a locale is RTL
 */
export function isRtlLocale(locale: Locale): boolean {
  return (rtlLocales as readonly string[]).includes(locale);
}
