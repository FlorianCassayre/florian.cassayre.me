import { DynamicNotFound } from '../../content/layout/notfound/DynamicNotFound';
import { PageLayout } from '../../components/layout/PageLayout';
import { PageContextProvider, usePageContext } from 'vike-react/usePageContext';
import { extractLocale } from '../../i18n/utils';
import { Layout } from '../+Layout';

export default function PageNotFound() {
  const context = usePageContext();
  const { pathname } = window.document.location;
  return (
    <PageContextProvider pageContext={{ ...context, urlPathname: pathname, locale: extractLocale(pathname).locale }}>
      <Layout>
        <PageLayout>
          <DynamicNotFound />
        </PageLayout>
      </Layout>
    </PageContextProvider>
  );
}
