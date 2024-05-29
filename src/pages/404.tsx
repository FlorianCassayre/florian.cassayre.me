import { PageLayout } from "../components/layout/PageLayout";
import { Stack } from '@mui/joy';
import { PageNotFoundContent } from '../content/layout/notfound/NotFoundContent';
import { NotFoundFallbackContent } from '../content/layout/notfound/NotFoundFallbackContent';
import { usePageContext } from '../../renderer/usePageContext';
import { useMemo } from 'react';
import { getLegacyVisibleRedirection } from '../content/redirect/legacy';
import { extractLocale } from '../i18n/utils';

export const PageNotFound = () => {
  const { urlPathname } = usePageContext();
  // In principle there is no need to call `extractLocale` since legacy URLs were not localized to start with
  // The reason we do it is in case the user decides to translate this 404 page
  const fallback = useMemo(() => getLegacyVisibleRedirection(extractLocale(urlPathname).urlWithoutLocale), [urlPathname]);
  return (
    <PageLayout>
      <Stack direction="column" sx={{ height: '100%' }}>
        {fallback === null ? <PageNotFoundContent /> : <NotFoundFallbackContent fallback={fallback} />}
      </Stack>
    </PageLayout>
  )
}
