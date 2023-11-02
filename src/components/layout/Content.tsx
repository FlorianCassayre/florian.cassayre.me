import {
  Box,
  Card, CardContent,
  Container, Grid,
  IconButton, List, ListItem,
  Stack, styled,
  Typography,
} from '@mui/joy';
import { Code, Email, GitHub, LinkedIn, Straight } from '@mui/icons-material';
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
import { AppCardsContent } from '../../content/card/AppCardsContent';

interface CategoryHeadingProps {
  children: React.ReactNode;
}

const CategoryHeading: React.FC<CategoryHeadingProps> = ({ children }) => (
  <Typography level="h2" fontSize="xl" sx={{ fontWeight: 1 }}>
    {children}
  </Typography>
);

const DenseList = styled(List)(() => ({
  '--ListItem-paddingY': 0,
  '--ListItem-minHeight': 0,
  '--ListDivider-gap': 0,
}));

export const Content = () => {
  return (
    <>
      <Container sx={{ py: 2 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography fontFamily="Bitter">
            Florian Cassayre
          </Typography>
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
                <DenseList marker="disc">
                  <ListItem><SoftLink href="https://swerc.eu/2022/">SWERC 2022</SoftLink>: qualified among 50,000 participants, ranked 35<sup>th</sup></ListItem>
                  <ListItem><SoftLink href="https://ieeextreme.org/">IEEEXtreme 15.0 2021</SoftLink>: ranked 56<sup>th</sup> among 5,500 teams</ListItem>
                  <ListItem><SoftLink href="https://www.bloomberg.com/company/stories/get-ready-for-bloombergs-summer-of-puzzles-2021/">BPuzzled 2021</SoftLink>: qualified for the final</ListItem>
                  <ListItem><SoftLink href="https://2020.lauzhack.com/">LauzHack 2020</SoftLink>: <em>AdMotiv</em>, second place winners</ListItem>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <ListItem><SoftLink href="https://2019.lauzhack.com/">LauzHack 2019</SoftLink>: <em>Sentiment-U</em>, organizers' favourite hack, Logitech prize</ListItem>
                </DenseList>
                <Typography>
                  Honorable mentions:
                </Typography>
                <DenseList marker="disc">
                  <ListItem><SoftLink href="https://www.youtube.com/live/yfXu9_Za_mg?t=2003">Hash Code 2022</SoftLink>: fastest submission of the competition</ListItem>
                </DenseList>
              </CardContent>
            </Card>
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
      </Container>
      <footer>
        <Box sx={{ py: 2, backgroundColor: '#dce1ea' }}>
          <Container>
            <Stack direction="row" alignItems="center">
              <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
                <Typography >
                  Florian Cassayre
                </Typography>
              </Box>
              <IconButton sx={{ textAlign: 'center' }}>
                <Code />
              </IconButton>
              <Box sx={{ flexGrow: 1, flexBasis: 0, textAlign: 'right' }}>
                <IconButton onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} sx={{ textAlign: 'right' }}>
                  <Straight />
                </IconButton>
              </Box>
            </Stack>
          </Container>
        </Box>
      </footer>
    </>
  );
};
