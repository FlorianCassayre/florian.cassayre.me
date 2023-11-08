import React from 'react';
import { Box, Container, IconButton, Stack, Typography } from '@mui/joy';
import { Code, Straight } from '@mui/icons-material';

export const FooterContent: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 2, backgroundColor: '#dce1ea' }}>
      <Container>
        <Stack direction="row" alignItems="center">
          <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
            <Typography>
              Florian Cassayre
            </Typography>
          </Box>
          <IconButton component="a" href="https://github.com/FlorianCassayre/florian.cassayre.me" sx={{ textAlign: 'center' }}>
            <Code color="action" />
          </IconButton>
          <Box sx={{ flexGrow: 1, flexBasis: 0, textAlign: 'right' }}>
            <IconButton onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} sx={{ textAlign: 'right' }}>
              <Straight color="action" />
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
