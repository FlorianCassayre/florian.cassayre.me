import React from 'react';

import { Grid } from '@mui/joy';
import { useIntl } from 'react-intl';

import { PageLayout } from '../../components/layout/PageLayout';
import { PgpFingerprintCardContent } from '../../content/home/card/PgpFingerprintCardContent';
import { PgpKeyCardContent } from '../../content/home/card/PgpKeyCardContent';

export const Page = () => {
  const { $t } = useIntl();
  return (
    <PageLayout title={$t({ id: 'pgp.title' })}>
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
