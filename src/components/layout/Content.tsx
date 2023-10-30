import {
  Avatar,
  Box,
  Card,
  CardContent, Chip,
  Container, Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/joy';
import { Email, FormatQuote, GitHub, LinkedIn } from '@mui/icons-material';
import { SoftLink } from '../SoftLink.tsx';
import { ProjectCard } from '../card/ProjectCard.tsx';
import { AdventOfCodeCard } from '../card/AdventOfCodeCard.tsx';
import { PgpCard } from '../card/PgpCard.tsx';
import { LanguageCard } from '../card/LanguageCard.tsx';
import { PublicationsCard } from '../card/PublicationsCard.tsx';
import { EmailCard } from '../card/EmailCard.tsx';

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
          </Stack>
        </Stack>

        <Stack direction="column" spacing={1} alignItems="center" sx={{ mt: 2, mb: 2 }}>
          <Avatar
            alt="Florian Cassayre"
            src="/profile.jpg"
            sx={{
              "--Avatar-size": "80px"
            }}
          />
          <Typography level="h1" fontWeight="sm">
            Florian Cassayre
          </Typography>
          <Typography level="title-lg" fontWeight="sm">
            \<em>flɔ.ʁi.ɑ̃ ka.sɛʁ</em>\
          </Typography>
        </Stack>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box>
              <FormatQuote sx={{ transform: 'rotate(180deg)', mr: 1, verticalAlign: 'bottom' }} />
              I am currently employed by <SoftLink href="https://home.cern">CERN</SoftLink> as a full-stack web developer.
              I graduated in 2022 from <SoftLink href="https://epfl.ch">EPFL</SoftLink> as a computer scientist, with a focus on formal methods.
              I have a diverse range of interests including (but not limited to) open source, genealogy and sustainability.
              <FormatQuote sx={{ ml: 1, verticalAlign: 'bottom' }} />
            </Box>
          </CardContent>
        </Card>

        <Typography level="h2" fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
          Current projects
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={12} lg={4}>
            <ProjectCard title="arbre.app" />
          </Grid>
          <Grid xs={12} lg={4}>
            <ProjectCard title="Yoga Sof" />
          </Grid>
          <Grid xs={12} lg={4}>
            <ProjectCard title="a" />
          </Grid>
        </Grid>


        <Typography level="h2" fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
          Contributed projects
        </Typography>

        <Typography level="h2" fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
          Publications
        </Typography>
        <PublicationsCard />

        <Typography level="h2" fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
          Programming challenges
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <AdventOfCodeCard />
          </Grid>
          <Grid xs={6}>
            <Card>
              <Typography level="title-lg">
                <SoftLink href="#">Code Golf</SoftLink>
              </Typography>
              <Typography>
                My entries are mainly targeting the languages <Chip component="span">python</Chip> and <Chip component="span">brainfuck</Chip>.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Typography level="h2" fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
          Social
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <PgpCard />
          </Grid>
          <Grid xs={6}>
            <LanguageCard />
          </Grid>
          <Grid xs={6}>
            <EmailCard />
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
