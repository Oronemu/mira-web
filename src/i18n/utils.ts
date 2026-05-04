import { DEFAULT_LOCALE, LOCALES, type Locale } from '../consts';

export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg && (LOCALES as readonly string[]).includes(seg)) {
    return seg as Locale;
  }
  return DEFAULT_LOCALE;
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return `/${locale}${clean === '/' ? '' : clean}`;
}

export function altLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ru' : 'en';
}
