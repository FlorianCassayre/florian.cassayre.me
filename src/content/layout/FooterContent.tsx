import React from 'react';

import { Code, Straight } from '@mui/icons-material';
import { Box, Container, IconButton, Stack, Typography } from '@mui/joy';
import { useIntl } from 'react-intl';

import { AUTHOR } from '../../config';

export const FooterContent: React.FC = () => {
  const { $t } = useIntl();
  return (
    <Box component="footer" sx={{ py: 2, backgroundColor: '#dce1ea' }}>
      <Container>
        <Stack direction="row" alignItems="center">
          <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
            <Typography>{AUTHOR}</Typography>
          </Box>
          <IconButton
            component="a"
            href="https://github.com/FlorianCassayre/florian.cassayre.me"
            target="_blank"
            rel="noopener"
            sx={{ textAlign: 'center' }}
            aria-label={$t({ id: 'footer.sourceCode' })}
          >
            <Code color="action" />
          </IconButton>
          <Box sx={{ flexGrow: 1, flexBasis: 0, textAlign: 'right' }}>
            <IconButton
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
              sx={{ textAlign: 'right' }}
              aria-label={$t({ id: 'footer.scrollToTop' })}
            >
              <Straight color="action" />
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
