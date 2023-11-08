import React from 'react';
import { Box, Card, CardContent, Chip, IconButton, Stack, Typography } from '@mui/joy';
import { Launch, SvgIconComponent } from '@mui/icons-material';

interface ContributedProjectCardProps {
  title: string;
  description: string;
  icon: SvgIconComponent;
  homepage: string;
  production?: boolean;
  retired?: boolean;
}

export const ContributedProjectCard: React.FC<ContributedProjectCardProps> = ({ title, description, icon: Icon, homepage, production, retired }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ height: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Icon color="action" />
              <Typography level="title-md">
                {title}
              </Typography>
              {production && (
                <Chip variant="soft" color="success">In production</Chip>
              )}
              {retired && (
                <Chip variant="soft" color="warning">Retired</Chip>
              )}
            </Stack>
            <Typography>
              {description}
            </Typography>
          </Box>
          <IconButton component="a" href={homepage}>
            <Launch color="action" />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};
