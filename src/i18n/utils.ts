import { translations } from './translations';

export type Locale = 'ro' | 'en' | 'ru';

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations['ro'][key] ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.replace(/^\/trans-euro-express/, '').split('/');
  if (lang === 'en' || lang === 'ru') return lang;
  return 'ro';
}

export function localePath(locale: Locale, base: string): string {
  if (locale === 'ro') return base;
  return `${base}/${locale}`;
}
