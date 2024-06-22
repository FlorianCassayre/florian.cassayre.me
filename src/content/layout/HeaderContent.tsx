import React from 'react';

import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/joy';
import { useIntl } from 'react-intl';

import { LanguageToggle } from '../../components/LanguageToggle';
import { useUrlGenerator } from '../../hooks/useUrlGenerator';

export const HeaderContent: React.FC = () => {
  const { $t } = useIntl();
  const urlGenerator = useUrlGenerator();
  return (
    <Stack component="header" direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontFamily="Bitter" component="a" href={urlGenerator('/')} sx={{ textDecoration: 'none' }}>
        Florian Cassayre
      </Typography>
      <Stack direction="row" spacing={0.5}>
        <IconButton
          component="a"
          href="https://github.com/FlorianCassayre"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <GitHub color="action" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/florian-cassayre"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <LinkedIn color="action" />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:florian@cassayre.me"
          target="_blank"
          rel="noopener"
          aria-label={$t({ id: 'header.emailAddress' })}
        >
          <Email color="action" />
        </IconButton>
        <LanguageToggle />
      </Stack>
    </Stack>
  );
};
