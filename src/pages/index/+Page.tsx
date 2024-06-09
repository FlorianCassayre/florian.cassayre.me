import { Box, Grid } from '@mui/joy';
import { PageLayout } from '../../components/layout/PageLayout';
import { ProfileContent } from '../../content/home/ProfileContent';
import { BioQuoteCardContent } from '../../content/home/card/BioQuoteCardContent';
import { ProjectCardsContent } from '../../content/home/card/ProjectCardsContent';
import { PublicationsCardContent } from '../../content/home/card/PublicationsCardContent';
import { AdventOfCodeCardContent } from '../../content/home/card/AdventOfCodeCardContent';
import { CodeGolfCardContent } from '../../content/home/card/CodeGolfCardContent';
import { HighlightsCardContent } from '../../content/home/card/HighlightsCardContent';
import { LanguageCardContent } from '../../content/home/card/LanguageCardContent';
import { EmailCardContent } from '../../content/home/card/EmailCardContent';
import { PgpCardContent } from '../../content/home/card/PgpCardContent';
import { AppCardsContent } from '../../content/home/card/AppCardsContent';
import { ProfessionalTimelineContent } from '../../content/home/ProfessionalTimelineContent';
import { ContributedProjectsCardContent } from '../../content/home/card/ContributedProjectsCardContent';
import {
  Apps,
  EmojiObjects, Flag,
  Flare,
  Group,
  Route,
  School,
  Workspaces,
} from '@mui/icons-material';
import { CategoryHeading } from '../../components/CategoryHeading';
import { FormattedMessage } from 'react-intl';
import { CernVisitCardContent } from '../../content/home/card/CernVisitCardContent';

export function Page() {
  return (
    <PageLayout>
      <ProfileContent />
      <Box sx={{ mb: 1 }}>
        <BioQuoteCardContent />
      </Box>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <CategoryHeading icon={Flare}><FormattedMessage id="home.sections.currentProjects" /></CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <ProjectCardsContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading icon={Route}><FormattedMessage id="home.sections.careerPath" /></CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <ProfessionalTimelineContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading icon={Workspaces}><FormattedMessage id="home.sections.contributedProjects" /></CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <ContributedProjectsCardContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading icon={School}><FormattedMessage id="home.sections.publications" /></CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <PublicationsCardContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading icon={Flag}><FormattedMessage id="home.sections.programmingChallenges" /></CategoryHeading>
        </Grid>
        <Grid xs={6}>
          <AdventOfCodeCardContent />
        </Grid>
        <Grid xs={6}>
          <CodeGolfCardContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading icon={EmojiObjects}><FormattedMessage id="home.sections.highlights" /></CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <HighlightsCardContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading icon={Group}><FormattedMessage id="home.sections.social" /></CategoryHeading>
        </Grid>
        <Grid xs={12} sm={5} md={4} lg={3}>
          <LanguageCardContent />
        </Grid>
        <Grid xs={12} sm={7} md={8} lg={9}>
          <EmailCardContent />
        </Grid>
        <Grid xs={12}>
          <PgpCardContent />
        </Grid>
        <Grid xs={12}>
          <CernVisitCardContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading icon={Apps}><FormattedMessage id="home.sections.apps" /></CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <AppCardsContent />
        </Grid>
      </Grid>
    </PageLayout>
  )
}
