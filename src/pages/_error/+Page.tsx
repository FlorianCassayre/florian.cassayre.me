import React from 'react';

import { ClientOnly } from 'vike-react/ClientOnly';
import { usePageContext } from 'vike-react/usePageContext';

export function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return (
      <ClientOnly load={() => import('./PageNotFound')} fallback={null}>
        {Component => <Component />}
      </ClientOnly>
    );
  } else {
    return null;
  }
}
