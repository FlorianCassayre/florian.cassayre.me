import { PageContext } from './types';
import { DEFAULT_LOCALE, LOCALES } from '../src/i18n/utils';

export function onPrerenderStart(prerenderContext: { pageContexts: PageContext[] }) {
  const pageContexts: PageContext[] = []
  prerenderContext.pageContexts.forEach((pageContext) => {
    // Duplicate pageContext for each locale
    LOCALES.forEach((locale) => {
      // Localize URL
      let { urlOriginal } = pageContext
      if (locale !== DEFAULT_LOCALE) {
        urlOriginal = `/${locale}${pageContext.urlOriginal}`
      }
      pageContexts.push({
        ...pageContext,
        urlOriginal,
        locale
      })
    })
  })
  return {
    prerenderContext: {
      pageContexts
    }
  }
}
