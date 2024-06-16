import React from 'react';

export const Head: React.FC = () => {
  const name = 'Florian Cassayre';
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="theme-color" content="#fff"/>
      <meta name="application-name" content={name}/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta name="apple-mobile-web-app-title" content={name}/>
    </>
  );
}
