import React from 'react';
import { Box, Card, CardContent, IconButton, Stack, Typography } from '@mui/joy';
import { Launch, SvgIconComponent } from '@mui/icons-material';

interface AppCardProps {
  name: string;
  icon: SvgIconComponent;
  description: React.ReactNode;
  homepage: string;
}

export const AppCard: React.FC<AppCardProps> = ({ name, icon: Icon, description, homepage }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack direction="row" sx={{ height: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Icon color="action" />
              <Typography level="title-md">{name}</Typography>
            </Stack>
            <Typography>
              {description}
            </Typography>
          </Box>
          <IconButton component="a" href={homepage}>
            <Launch />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};
