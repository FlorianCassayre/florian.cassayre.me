export const LOCALES = ['en', 'fr'] as const;
export const DEFAULT_LOCALE = LOCALES[0] satisfies (typeof LOCALES)[number];

export const localizeUrl = (urlPathname: string, locale: (typeof LOCALES)[number]): string => {
  const normalized = extractLocale(urlPathname).urlWithoutLocale;
  const target = locale === DEFAULT_LOCALE ? normalized : `/${locale}${normalized}`;
  return target !== '/' && target.endsWith('/') ? target.slice(0, target.length - 1) : target;
}

export function extractLocale(url: string) {
  const result = LOCALES.flatMap(locale => {
    const regex = new RegExp(`^/${locale}($|/.*)`);
    const matches = regex.exec(url);
    return matches !== null ? [{
      locale: locale,
      urlWithoutLocale: matches[1] || '/',
    }] : [];
  });
  if (result.length > 0) {
    return result[0];
  } else {
    return {
      locale: DEFAULT_LOCALE,
      urlWithoutLocale: url,
    };
  }
}
