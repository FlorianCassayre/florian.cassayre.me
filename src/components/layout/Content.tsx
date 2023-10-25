import { Avatar, Box, Card, CardContent, Container, IconButton, Stack, Typography } from '@mui/joy';
import { Email, FormatQuote, GitHub, LinkedIn } from '@mui/icons-material';
import { SoftLink } from '../SoftLink.tsx';

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
            \<em>flɔ.ʁi.ɑ̃ kas.sɛʁ</em>\
          </Typography>
        </Stack>
        <Card>
          <CardContent>
            <Box>
              <FormatQuote sx={{ transform: 'rotate(180deg)', mr: 1, verticalAlign: 'bottom' }} />
              I am currently employed by <SoftLink href="https://home.cern">CERN</SoftLink> as a full-stack web developer.
              I graduated in 2022 from <SoftLink href="https://epfl.ch">EPFL</SoftLink> as a computer scientist, with a focus on formal methods.
              I have a diverse range of interests including (but not limited to) open source, genealogy and climate.
              <FormatQuote sx={{ ml: 1, verticalAlign: 'bottom' }} />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
