import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';

export const Head = (): React.ReactNode => {
  const { urlRedirect } = usePageContext();
  if (urlRedirect !== undefined) {
    return (
      <meta httpEquiv="refresh" content={`0;URL=${urlRedirect}`}/>
    );
  } else {
    console.error('No redirection defined in context');
    return null;
  }
}
