import { usePageContext } from '../../../../renderer/usePageContext';
import { getLegacyVisibleRedirection } from '../../redirect/legacy';
import { extractLocale } from '../../../i18n/utils';
import { useMemo } from 'react';
import { PageNotFoundContent } from './NotFoundContent';
import { NotFoundFallbackContent } from './NotFoundFallbackContent';

export const DynamicNotFound = () => {
  const { urlPathname } = usePageContext();
  // In principle there is no need to call `extractLocale` since legacy URLs were not localized to start with
  // The reason we do it is in case the user decides to translate this 404 page
  const fallback = useMemo(() => getLegacyVisibleRedirection(extractLocale(urlPathname).urlWithoutLocale), [urlPathname]);
  return fallback === null ? <PageNotFoundContent /> : <NotFoundFallbackContent fallback={fallback} />;
}
