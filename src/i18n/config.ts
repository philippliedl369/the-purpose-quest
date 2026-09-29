import { url } from '../lib/url';

export const languages = {
  en: { label: 'English', short: 'EN', locale: 'en-US' },
  de: { label: 'Deutsch', short: 'DE', locale: 'de-DE' },
  es: { label: 'Español', short: 'ES', locale: 'es-CR' },
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

/** Language routes other than the default, for getStaticPaths. Returns fresh objects on every call. */
export function localizedParams() {
  return langs.filter((l) => l !== defaultLang).map((lang) => ({ params: { lang } }));
}

/** Link to a page in a given language. `path` is language-neutral, e.g. '/explorations/'. */
export function localizedPath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return url(lang === defaultLang ? clean : `/${lang}${clean}`);
}

/** Absolute URL of a page in a given language, for canonical and hreflang links. */
export function absoluteUrl(site: URL | undefined, lang: Lang, path: string): string {
  return new URL(localizedPath(lang, path), site).href;
}

export function formatNumber(lang: Lang, n: number): string {
  return new Intl.NumberFormat(languages[lang].locale).format(n);
}
