import React from 'react';

import { Grid } from '@mui/joy';

import { PageLayout } from '../../components/layout/PageLayout';
import { PgpFingerprintCardContent } from '../../content/home/card/PgpFingerprintCardContent';
import { PgpKeyCardContent } from '../../content/home/card/PgpKeyCardContent';

export const Page = () => {
  return (
    <PageLayout>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <PgpFingerprintCardContent />
        </Grid>
        <Grid xs={12}>
          <PgpKeyCardContent />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
