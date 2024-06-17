import { PageLayout } from '../../components/layout/PageLayout';
import { EmailCardContent } from '../../content/home/card/EmailCardContent';
import { Grid } from '@mui/joy';
import { SocialChipsContent } from '../../content/misc/SocialChipsContent';

export function Page() {
  return (
    <PageLayout>
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
}
