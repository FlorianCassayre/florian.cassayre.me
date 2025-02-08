import React from 'react';

import '@fontsource/inter/latin-200.css';
import '@fontsource/inter/latin-300.css';
import '@fontsource/inter/latin-ext-400.css'; // For the subtitle
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/bitter/latin-300.css';
import '@fontsource/bitter/latin-400.css';
import './Layout.css';

import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy';
import {
  THEME_ID as MATERIAL_THEME_ID,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  experimental_extendTheme as materialExtendTheme,
} from '@mui/material';

import { I18nProvider } from '../i18n/I18nProvider';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const materialTheme = materialExtendTheme();
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <I18nProvider>{children}</I18nProvider>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
};
