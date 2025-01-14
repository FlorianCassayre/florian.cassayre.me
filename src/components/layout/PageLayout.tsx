import React from 'react';

import { Box, Container, CssBaseline, CssVarsProvider, Stack } from '@mui/joy';
import { Config } from 'vike-react/Config';

import { FooterContent } from '../../content/layout/FooterContent';
import { HeaderContent } from '../../content/layout/HeaderContent';
import { getTitle } from '../../content/meta/getTitle';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string | null;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <CssVarsProvider>
      {/* CssBaseline must appear as the first child */}
      <CssBaseline />

      <Config title={getTitle(title)} />

      <Stack
        direction="column"
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url("background.svg")',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center top',
        }}
      >
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
