import { Box, Grid, Typography } from '@mui/joy';
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
import React from 'react';

interface CategoryHeadingProps {
  children: React.ReactNode;
}

const CategoryHeading: React.FC<CategoryHeadingProps> = ({ children }) => (
  <Typography level="h2" fontSize="xl" sx={{ fontWeight: 1 }}>
    {children}
  </Typography>
);

export function Page() {
  return (
    <PageLayout>
      <ProfileContent />
      <Box sx={{ mb: 4 }}>
        <BioQuoteCardContent />
      </Box>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <CategoryHeading>Current projects</CategoryHeading>
        </Grid>

        <Grid xs={12}>
          <ProjectCardsContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading>Contributed projects</CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <CategoryHeading>Publications</CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <PublicationsCardContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading>Programming challenges</CategoryHeading>
        </Grid>
        <Grid xs={6}>
          <AdventOfCodeCardContent />
        </Grid>
        <Grid xs={6}>
          <CodeGolfCardContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading>Highlights</CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <HighlightsCardContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading>Social</CategoryHeading>
        </Grid>
        <Grid xs={3}>
          <LanguageCardContent />
        </Grid>
        <Grid xs={9}>
          <EmailCardContent />
        </Grid>
        <Grid xs={12}>
          <PgpCardContent />
        </Grid>
        <Grid xs={12}>
          <CategoryHeading>Apps</CategoryHeading>
        </Grid>
        <Grid xs={12}>
          <AppCardsContent />
        </Grid>
      </Grid>
    </PageLayout>
  )
}
