import React, { useEffect, useState } from 'react';
import { usePageContext } from '../../renderer/usePageContext';
import { Button, ToggleButtonGroup } from '@mui/joy';
import { LOCALES, localizeUrl } from '../i18n/utils';

export const LanguageToggle: React.FC = () => {
  const { locale, urlPathname, is404 } = usePageContext();
  // For the 404 page on SSG
  const [actualUrlPathname, setActualUrlPathname] = useState(!is404 ? urlPathname : null);
  const [uiLocale, setUiLocale] = useState(locale); // To avoid the flickering effect
  useEffect(() => {
    setActualUrlPathname(!is404 ? urlPathname : window.document.location.pathname);
  }, [is404, urlPathname, setActualUrlPathname]);
  return (
    <ToggleButtonGroup variant="plain" value={[actualUrlPathname !== null ? uiLocale : '']}>
      {LOCALES.map(locale => (
        <Button
          key={locale}
          component="a"
          href={actualUrlPathname !== null ? localizeUrl(actualUrlPathname, locale) : '#'}
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
