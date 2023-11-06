import React from 'react';
import { Container, CssBaseline, CssVarsProvider, Stack } from '@mui/joy';
import { HeaderContent } from '../../content/layout/HeaderContent';
import { FooterContent } from '../../content/layout/FooterContent';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <CssVarsProvider>
      {/* CssBaseline must appear as the first child */}
      <CssBaseline />

      <Stack direction="column" sx={{ minHeight: '100vh' }}>
        <Container sx={{ py: 2, flexGrow: 1 }}>
          <HeaderContent />
          {children}
        </Container>
        <FooterContent />
      </Stack>
    </CssVarsProvider>
  );
};
