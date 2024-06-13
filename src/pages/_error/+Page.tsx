import { DynamicNotFound } from '../../content/layout/notfound/DynamicNotFound';
import { PageLayout } from '../../components/layout/PageLayout';

export function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <PageLayout>
        <DynamicNotFound />
      </PageLayout>
    )
  } else {
    return (
      <>
        <h1>500 Internal Error</h1>
    <p>Something went wrong.</p>
    </>
  )
  }
}
