import React from 'react';

import { PageContextProvider, usePageContext } from 'vike-react/usePageContext';

import { Layout } from '../+Layout';
import { PageLayout } from '../../components/layout/PageLayout';
import { DynamicNotFound } from '../../content/layout/notfound/DynamicNotFound';
import { extractLocale } from '../../i18n/utils';
import { homeBreadcrumbs } from '../breadcrumbs';

export const PageNotFound = () => {
  const context = usePageContext();
  const { pathname } = window.document.location;
  return (
    <PageContextProvider pageContext={{ ...context, urlPathname: pathname, locale: extractLocale(pathname).locale }}>
      <Layout>
        <PageLayout title="404" hideTitle parentBreadcrumbs={homeBreadcrumbs}>
          <DynamicNotFound />
        </PageLayout>
      </Layout>
    </PageContextProvider>
  );
};
