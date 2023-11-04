import React from 'react';
import { Container, CssBaseline, CssVarsProvider } from '@mui/joy';
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

      <Container sx={{ py: 2 }}>
        <HeaderContent />
        {children}
      </Container>
      <FooterContent />
    </CssVarsProvider>
  );
};
