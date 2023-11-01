import type { PageContextServer } from './types';
import { extractLocale } from './i18n';

export function onBeforeRoute(pageContext: PageContextServer) {
  const { urlWithoutLocale, locale } = extractLocale(pageContext.urlOriginal);
  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`
      locale,
      // We overwrite `pageContext.urlOriginal`
      urlOriginal: urlWithoutLocale
    }
  }
}
