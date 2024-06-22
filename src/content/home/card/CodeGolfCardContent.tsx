import React from 'react';

import { Card, Chip, Typography } from '@mui/joy';
import { FormattedMessage } from 'react-intl';

import { SoftLink } from '../../../components/SoftLink';

const Key = 'home.challenges.codeGolf';

export const CodeGolfCardContent: React.FC = () => (
  <Card sx={{ height: '100%' }}>
    <Typography level="title-lg" fontWeight="sm">
      <SoftLink href="https://code.golf" target="_blank" rel="noopener">
        Code Golf
      </SoftLink>
    </Typography>
    <Typography>
      <FormattedMessage
        id={`${Key}.description`}
        values={{
          python: <Chip component="span">python</Chip>,
          brainfuck: (
            <Chip component="span">
              brainf<span style={{ filter: 'blur(2px)' }}>uc</span>k
            </Chip>
          ),
        }}
      />
    </Typography>
  </Card>
);
