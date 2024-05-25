import { createRoot, hydrateRoot, Root } from 'react-dom/client';
import type { PageContextClient } from './types';
import { PageShell } from './PageShell';

let root: Root;

export async function onRenderClient(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
  </PageShell>
);
  const container = document.getElementById('react-root')!;
  if (pageContext.isHydration) {
    root = hydrateRoot(container, page)
  } else {
    if (!root) {
      root = createRoot(container)
    }
    root.render(page)
  }
}
