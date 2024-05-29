import React from 'react';
import { PageContextProvider } from './usePageContext';
import type { PageContext } from './types';
import './PageShell.css';
import '@fontsource/inter';
import '@fontsource/bitter';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import { I18nProvider } from '../src/i18n/I18nProvider';

export function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  const materialTheme = materialExtendTheme();
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
          <JoyCssVarsProvider>
            <I18nProvider>
              {children}
            </I18nProvider>
          </JoyCssVarsProvider>
        </MaterialCssVarsProvider>
      </PageContextProvider>
    </React.StrictMode>
  )
}
