import React from 'react';

import '@fontsource/inter';
import '@fontsource/bitter';
import './Layout.css';

import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy';
import {
  THEME_ID as MATERIAL_THEME_ID,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  experimental_extendTheme as materialExtendTheme,
} from '@mui/material';

import { I18nProvider } from '../i18n/I18nProvider';

export function Layout({ children }: { children: React.ReactNode }) {
  const materialTheme = materialExtendTheme();
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <I18nProvider>{children}</I18nProvider>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
