import {
  Box,
  Card, CardContent,
  Container, Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/joy';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { LanguageCardContent } from '../../content/card/LanguageCardContent';
import { EmailCardContent } from '../../content/card/EmailCardContent';
import { PgpCardContent } from '../../content/card/PgpCardContent';
import { PublicationsCardContent } from '../../content/card/PublicationsCardContent';
import { ProjectCardsContent } from '../../content/card/ProjectCardsContent';
import { AdventOfCodeCardContent } from '../../content/card/AdventOfCodeCardContent';
import React from 'react';
import { BioQuoteCardContent } from '../../content/card/BioQuoteCardContent';
import { CodeGolfCardContent } from '../../content/card/CodeGolfCardContent';
import { SoftLink } from '../SoftLink';
import { ProfileLogo } from '../ProfileLogo';
import { LanguageToggle } from '../LanguageToggle';

interface CategoryHeadingProps {
  children: React.ReactNode;
}

const CategoryHeading: React.FC<CategoryHeadingProps> = ({ children }) => (
  <Typography level="h2" fontSize="xl" fontWeight="lg">
    {children}
  </Typography>
)

export const Content = () => {
  return (
    <>
      <Container sx={{ py: 2 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box>
            Florian Cassayre
          </Box>
          <Stack direction="row" spacing={0.5}>
            <IconButton>
              <GitHub />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Email />
            </IconButton>
            <LanguageToggle />
          </Stack>
        </Stack>

        <Stack direction="column" spacing={1} alignItems="center" sx={{ mt: 2, mb: 2 }}>
          <ProfileLogo />
          <Typography level="h1" fontWeight="sm" fontFamily="Bitter">
            Florian Cassayre
          </Typography>
          <Typography level="title-lg" fontWeight="sm">
            \<em>flɔ.ʁi.ɑ̃ ka.sɛʁ</em>\
          </Typography>
        </Stack>
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
            <Card>
              <CardContent>
                <ul style={{ margin: 0 }}>
                  <li><SoftLink href="https://swerc.eu/2022/">SWERC 2022</SoftLink>: qualified among 50,000 participants, ranked 35<sup>th</sup></li>
                  <li><SoftLink href="https://ieeextreme.org/">IEEEXtreme 15.0 2021</SoftLink>: ranked 56<sup>th</sup> among 5,500 teams</li>
                  <li><SoftLink href="https://www.bloomberg.com/company/stories/get-ready-for-bloombergs-summer-of-puzzles-2021/">BPuzzled 2021</SoftLink>: qualified for the final</li>
                  <li><SoftLink href="https://2020.lauzhack.com/">LauzHack 2020</SoftLink>: <em>AdMotiv</em>, second place winners</li>
                  <li><SoftLink href="https://2019.lauzhack.com/">LauzHack 2019</SoftLink>: <em>Sentiment-U</em>, organizers' favourite hack, Logitech prize</li>
                </ul>
                <Typography>
                  Honorable mentions:
                </Typography>
                <ul style={{ margin: 0 }}>
                  <li><SoftLink href="https://www.youtube.com/live/yfXu9_Za_mg?t=2003">Hash Code 2022</SoftLink>: fastest submission of the competition</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12}>
            <CategoryHeading>Social</CategoryHeading>
          </Grid>
          <Grid xs={12}>
            <PgpCardContent />
          </Grid>
          <Grid xs={3}>
            <LanguageCardContent />
          </Grid>
          <Grid xs={9}>
            <EmailCardContent />
          </Grid>
        </Grid>
      </Container>
      <footer>
        <Box sx={{ py: 2, backgroundColor: '#dce1ea' }}>
          <Container>
            <Grid container spacing={2}>
              <Grid xs={6}>
                Florian Cassayre
              </Grid>
              <Grid xs={6}>
                Found a typo? Open a pull request!
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </>
  );
};
