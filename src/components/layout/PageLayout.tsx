import React from 'react';
import { Box, Container, CssBaseline, CssVarsProvider, Stack } from '@mui/joy';
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
        <Container sx={{ py: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <HeaderContent />
          <Box component="main" sx={{ flexGrow: 1, mt: 2 }}>
            {children}
          </Box>
        </Container>
        <FooterContent />
      </Stack>
    </CssVarsProvider>
  );
};
