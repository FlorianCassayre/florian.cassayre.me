import React from 'react';

import { usePageContext } from 'vike-react/usePageContext';

import { AUTHOR } from '../config';
import { LOCALES, localizeUrl } from '../i18n/utils';
import { canonicalizeUrlPathname } from '../route/canonicalizeUrlPathname';

export const Head: React.FC = () => {
  const { urlPathname } = usePageContext();
  const name = AUTHOR;
  return (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={canonicalizeUrlPathname(urlPathname)} />
      <meta property="og:url" content={canonicalizeUrlPathname(urlPathname)} />
      <meta name="robots" content="index, follow" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#fff" />
      <meta name="application-name" content={name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={name} />
      {LOCALES.map(locale => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={canonicalizeUrlPathname(localizeUrl(urlPathname, locale))}
        />
      ))}
    </>
  );
};
