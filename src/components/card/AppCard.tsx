import React from 'react';

import { Launch, SvgIconComponent } from '@mui/icons-material';
import { Box, CardContent, IconButton, Stack, Typography } from '@mui/joy';
import { useIntl } from 'react-intl';

import { CardBase } from './CardBase';

interface AppCardProps {
  name: string;
  icon: SvgIconComponent;
  description: React.ReactNode;
  homepage: string;
}

export const AppCard: React.FC<AppCardProps> = ({ name, icon: Icon, description, homepage }) => {
  const { $t } = useIntl();
  return (
    <CardBase sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" sx={{ height: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Icon color="action" />
              <Typography level="title-md">{name}</Typography>
            </Stack>
            <Typography>{description}</Typography>
          </Box>
          <IconButton
            component="a"
            href={homepage}
            target="_blank"
            rel="noopener"
            aria-label={$t({ id: 'common.externalLink' })}
          >
            <Launch color="action" />
          </IconButton>
        </Stack>
      </CardContent>
    </CardBase>
  );
};
