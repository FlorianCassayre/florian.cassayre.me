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

export function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  const materialTheme = materialExtendTheme();
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
          <JoyCssVarsProvider>
            {children}
          </JoyCssVarsProvider>
        </MaterialCssVarsProvider>
      </PageContextProvider>
    </React.StrictMode>
  )
}
