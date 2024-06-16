import { PageContext } from './types';
import { LOCALES, localizeUrl } from '../i18n/utils';
import { INVISIBLE_REDIRECTIONS, REDIRECT_PAGE_NAME } from '../content/redirect/legacy';

export function onPrerenderStart(prerenderContext: { pageContexts: PageContext[] }): { prerenderContext: { pageContexts: PageContext[] } } {
  const redirectUrlOriginal = `/${REDIRECT_PAGE_NAME}`;
  const pageContextsWithoutRedirect = prerenderContext.pageContexts
    .filter(({ urlOriginal }) => urlOriginal !== redirectUrlOriginal);
  const redirectContext = prerenderContext.pageContexts
    .find(({ urlOriginal }) => urlOriginal === redirectUrlOriginal);
  if (redirectContext === undefined) {
    throw new Error(`Missing page '${REDIRECT_PAGE_NAME}'`);
  }
  const pageContextsWithRedirects: PageContext[] = [
    ...pageContextsWithoutRedirect,
    ...Object.entries(INVISIBLE_REDIRECTIONS)
      .map(([from, to]) => ({
        ...redirectContext,
        urlOriginal: from,
        urlRedirect: to,
      })),
  ];
  const newPagesContexts = pageContextsWithRedirects.flatMap((pageContext) =>
    // Duplicate pageContext for each locale
    LOCALES.map((locale) => {
      return {
        ...pageContext,
        urlOriginal: localizeUrl(pageContext.urlOriginal, locale),
        locale,
        urlRedirect: pageContext.urlRedirect !== undefined ? localizeUrl(pageContext.urlRedirect, locale) : undefined,
      };
    })
  );
  return {
    prerenderContext: {
      pageContexts: newPagesContexts,
    }
  }
}
