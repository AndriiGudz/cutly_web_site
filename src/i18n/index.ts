import { en } from './en';
import { de } from './de';
import { uk } from './uk';
import { ru } from './ru';

export const LOCALES = ['en', 'de', 'uk', 'ru'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
  uk: 'UA',
  ru: 'RU',
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: 'circle-flags:uk',
  de: 'circle-flags:de',
  uk: 'circle-flags:ua',
  ru: 'circle-flags:ru',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  uk: 'Українська',
  ru: 'Русский',
};

export const LOCALE_URLS: Record<Locale, string> = {
  en: '/',
  de: '/de/',
  uk: '/uk/',
  ru: '/ru/',
};

export const translations: Record<Locale, typeof en> = { en, de, uk, ru };

export function getTranslation(locale: Locale): typeof en {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}

/**
 * Определяет подходящую локаль из строки navigator.language.
 * Например: 'de-AT' -> 'de', 'uk' -> 'uk', 'ja' -> 'en' (дефолт)
 */
export function detectLocale(browserLang: string): Locale {
  const lang = browserLang.split('-')[0].toLowerCase();
  if (LOCALES.includes(lang as Locale)) {
    return lang as Locale;
  }
  return DEFAULT_LOCALE;
}
