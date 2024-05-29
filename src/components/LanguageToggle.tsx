import React, { useState } from 'react';
import { Button, ToggleButtonGroup } from '@mui/joy';
import { usePageContext } from '../../renderer/usePageContext';
import { LOCALES, localizeUrl } from '../i18n/utils';

export const LanguageToggle: React.FC = () => {
  const { locale, urlPathname } = usePageContext();
  const [uiLocale, setUiLocale] = useState(locale); // To avoid the flickering effect
  return (
    <ToggleButtonGroup variant="plain" value={[uiLocale]}>
      {LOCALES.map(locale => (
        <Button key={locale} component="a" href={localizeUrl(urlPathname, locale)} onClick={() => setUiLocale(locale)} {...{ value: locale }} sx={{ px: 1 }}>
          {locale.toUpperCase()}
        </Button>
      ))}
    </ToggleButtonGroup>
  );
};
