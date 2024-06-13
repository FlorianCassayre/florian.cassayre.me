// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere

import React, { useContext } from 'react'
import type { PageContext } from './types'
import { extractLocale } from '../src/i18n/utils';

export { PageContextProvider }
// eslint-disable-next-line react-refresh/only-export-components
export { usePageContext }

const Context = React.createContext<PageContext>(undefined as unknown as PageContext)

function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context);
  return {
    ...pageContext,
    // Strange that this is needed, otherwise the 404 page is not translated
    ...(pageContext.locale === undefined ? { locale: extractLocale(pageContext.urlOriginal).locale } : {}),
  } satisfies PageContext;
}
