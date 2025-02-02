import React, { useMemo } from 'react';

import { Box, Container, CssBaseline, CssVarsProvider, Stack, Typography } from '@mui/joy';
import { useIntl } from 'react-intl';
import { Config } from 'vike-react/Config';

import { FooterContent } from '../../content/layout/FooterContent';
import { HeaderContent } from '../../content/layout/HeaderContent';
import { getTitle } from '../../content/meta/getTitle';
import { LocalizedBreadcrumbArray } from '../../route/Breadcrumb';
import { Breadcrumbs } from '../Breadcrumbs';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string | null;
  hideTitle?: boolean;
  parentBreadcrumbs?: LocalizedBreadcrumbArray;
  description?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  hideTitle,
  parentBreadcrumbs,
  description,
}) => {
  const intl = useIntl();
  const breadcrumbs: LocalizedBreadcrumbArray | undefined = useMemo(
    () =>
      parentBreadcrumbs !== undefined && title !== null
        ? [...(typeof parentBreadcrumbs === 'function' ? parentBreadcrumbs(intl) : parentBreadcrumbs), { title }]
        : parentBreadcrumbs,
    [parentBreadcrumbs, title, intl]
  );
  return (
    <CssVarsProvider>
      {/* CssBaseline must appear as the first child */}
      <CssBaseline />

      <Config title={getTitle(title)} description={description ?? intl.$t({ id: 'general.description' })} />

      <Stack
        direction="column"
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url("/background.svg")',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center top',
        }}
      >
        <Container sx={{ py: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <HeaderContent />
          {breadcrumbs !== undefined && <Breadcrumbs breadcrumbs={breadcrumbs} />}
          <Box component="main" sx={{ flexGrow: 1, mt: breadcrumbs !== undefined ? 0 : 2 }}>
            {!hideTitle && title !== null && (
              <Typography level="h1" sx={{ mb: 1.5 }}>
                {title}
              </Typography>
            )}
            {children}
          </Box>
        </Container>
        <FooterContent />
      </Stack>
    </CssVarsProvider>
  );
};
