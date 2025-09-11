import type { PageContextServer } from './types';
import type { OnBeforeRouteSync } from 'vike/types';

import { ALL_REDIRECTIONS, REDIRECT_PAGE_NAME } from '../content/redirect';
import { extractLocale, localizeUrl } from '../i18n/utils';

export const onBeforeRoute = (pageContext: PageContextServer): ReturnType<OnBeforeRouteSync> => {
  const { urlWithoutLocale, locale } = extractLocale(pageContext.urlOriginal);
  const redirect: string | undefined = ALL_REDIRECTIONS[urlWithoutLocale];
  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`
      locale,
      // We overwrite `pageContext.urlOriginal`
      urlLogical: redirect === undefined ? urlWithoutLocale : `/${REDIRECT_PAGE_NAME}`,
      urlRedirect: redirect !== undefined ? localizeUrl(redirect, locale) : undefined,
    },
  };
};
