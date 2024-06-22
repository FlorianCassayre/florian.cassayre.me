import React from 'react';

import { Grid } from '@mui/joy';

import { AppCard } from './AppCard';

interface AppCardsProps {
  apps: Parameters<typeof AppCard>[0][];
}

export const AppCards: React.FC<AppCardsProps> = ({ apps }) => {
  return (
    <Grid container direction="row" spacing={2} justifyContent="center" alignItems="stretch">
      {apps.map((app, i) => (
        <Grid key={i} xs={12} sm={6} md={4}>
          <AppCard {...app} />
        </Grid>
      ))}
    </Grid>
  );
};
