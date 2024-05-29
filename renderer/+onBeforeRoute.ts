import type { PageContextServer } from './types';
import { extractLocale } from '../src/i18n/utils';

export function onBeforeRoute(pageContext: PageContextServer) {
  const { urlWithoutLocale, locale } = extractLocale(pageContext.urlOriginal);
  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`
      locale,
      // We overwrite `pageContext.urlOriginal`
      urlLogical: urlWithoutLocale
    }
  }
}
