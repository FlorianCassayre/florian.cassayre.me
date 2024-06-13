import React from 'react';
import './Layout.css';
import '@fontsource/inter';
import '@fontsource/bitter';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy';
import { I18nProvider } from '../i18n/I18nProvider';

export function Layout({ children }: { children: React.ReactNode }) {
  const materialTheme = materialExtendTheme();
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <I18nProvider>
          {children}
        </I18nProvider>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  )
}
