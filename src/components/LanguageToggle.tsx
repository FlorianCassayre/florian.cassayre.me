import React from 'react';

import { Button, ToggleButtonGroup } from '@mui/joy';
import { usePageContext } from 'vike-react/usePageContext';

import { LOCALES, localizeUrl } from '../i18n/utils';

export const LanguageToggle: React.FC = () => {
  const { locale, urlPathname } = usePageContext();
  return (
    <ToggleButtonGroup variant="plain" value={[locale]}>
      {LOCALES.map(locale => (
        <Button
          key={locale}
          component="a"
          href={localizeUrl(urlPathname, locale)}
          {...{ value: locale }}
          sx={{ px: 1 }}
          role="button"
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </ToggleButtonGroup>
  );
};
