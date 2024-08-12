import React from 'react';

import { Grid } from '@mui/joy';
import { useIntl } from 'react-intl';

import { PageLayout } from '../../components/layout/PageLayout';
import { EmailCardContent } from '../../content/home/card/EmailCardContent';
import { SocialChipsContent } from '../../content/misc/SocialChipsContent';

export const Page = () => {
  const { $t } = useIntl();
  return (
    <PageLayout title={$t({ id: 'contact.title' })}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <EmailCardContent />
        </Grid>
        <Grid xs={12}>
          <SocialChipsContent />
        </Grid>
      </Grid>
    </PageLayout>
  );
};
