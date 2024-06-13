import React, { useState } from 'react';
import { Button, ToggleButtonGroup } from '@mui/joy';
import { LOCALES, localizeUrl } from '../i18n/utils';
import { usePageContext } from 'vike-react/usePageContext';

export const LanguageToggle: React.FC = () => {
  const { locale, urlPathname } = usePageContext();
  // For the 404 page on SSG
  const [uiLocale, setUiLocale] = useState(locale); // To avoid the flickering effect
  return (
    <ToggleButtonGroup variant="plain" value={[uiLocale]}>
      {LOCALES.map(locale => (
        <Button
          key={locale}
          component="a"
          href={localizeUrl(urlPathname, locale)}
          onClick={() => setUiLocale(locale)}
          {...{ value: locale }}
          sx={{ px: 1 }}
        >
          {locale.toUpperCase()}
        </Button>
      ))}
    </ToggleButtonGroup>
  );
};
