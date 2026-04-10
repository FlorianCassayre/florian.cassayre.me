import React from 'react';

import { ClientOnly as BrokenClientOnly } from 'vike-react/ClientOnly';
import { usePageContext } from 'vike-react/usePageContext';

const ClientOnly = <T,>(parameters: Parameters<typeof BrokenClientOnly<T>>[0]) =>
  BrokenClientOnly(parameters) as React.ReactNode;

export const Page = () => {
  const { is404 } = usePageContext();
  if (is404) {
    return (
      <ClientOnly load={() => import('./PageNotFound').then(({ PageNotFound }) => PageNotFound)} fallback={null}>
        {Component => <Component />}
      </ClientOnly>
    );
  } else {
    return null;
  }
};
