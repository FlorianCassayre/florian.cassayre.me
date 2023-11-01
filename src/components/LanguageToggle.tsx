import React from 'react';
import { Button, ToggleButtonGroup } from '@mui/joy';
import { LOCALES, localizeUrl } from '../../renderer/i18n';
import { usePageContext } from '../../renderer/usePageContext';

export const LanguageToggle: React.FC = () => {
  const { locale, urlPathname } = usePageContext();
  return (
    <ToggleButtonGroup variant="plain" value={[locale]}>
      {LOCALES.map(locale => (
        <Button key={locale} component="a" href={localizeUrl(urlPathname, locale)} {...{ value: locale }} sx={{ px: 1 }}>
          {locale.toUpperCase()}
        </Button>
      ))}
    </ToggleButtonGroup>
  );
};
