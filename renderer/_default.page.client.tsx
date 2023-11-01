export { render }

import { createRoot, hydrateRoot, Root } from 'react-dom/client';
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'

let root: Root;

async function render(pageContext: PageContextClient) {
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

export const clientRouting = true;
export const hydrationCanBeAborted = true;
