import React, { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { Locale } from './Locale';
import { usePageContext } from '../../renderer/usePageContext';
import { MESSAGES } from './messages';

const DEFAULT_LOCALE: Locale = Locale.English;

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  children
}) => {
  const { locale } = usePageContext();
  const messages = useMemo(() => MESSAGES[locale], [locale]);
  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={DEFAULT_LOCALE}>
      {children}
    </IntlProvider>
  );
};
