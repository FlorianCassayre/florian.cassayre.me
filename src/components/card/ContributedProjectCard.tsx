import React from 'react';

import { Launch, SvgIconComponent } from '@mui/icons-material';
import { Box, CardContent, Chip, IconButton, Stack, Typography } from '@mui/joy';
import { FormattedMessage, useIntl } from 'react-intl';

import { CardBase } from './CardBase';

interface ContributedProjectCardProps {
  title: string;
  description: string;
  icon: SvgIconComponent;
  homepage: string;
  production?: boolean;
  retired?: boolean;
}

export const ContributedProjectCard: React.FC<ContributedProjectCardProps> = ({
  title,
  description,
  icon: Icon,
  homepage,
  production,
  retired,
}) => {
  const { $t } = useIntl();
  return (
    <Box sx={{ p: 1, height: '100%' }}>
      <CardBase sx={{ height: '100%' }}>
        <CardContent>
          <Stack direction="row" spacing={1} sx={{ height: '100%' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Icon color="action" />
                <Typography level="title-md">{title}</Typography>
                {production && (
                  <Chip variant="soft" color="success">
                    <FormattedMessage id="home.project.status.production" />
                  </Chip>
                )}
                {retired && (
                  <Chip variant="soft" color="warning">
                    <FormattedMessage id="home.project.status.retired" />
                  </Chip>
                )}
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
    </Box>
  );
};
