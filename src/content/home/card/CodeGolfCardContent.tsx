import React from 'react';

import { Chip, Typography } from '@mui/joy';
import { FormattedMessage } from 'react-intl';

import { CardBase } from '../../../components/card/CardBase';
import { SoftLink } from '../../../components/SoftLink';

const Key = 'home.challenges.codeGolf';

export const CodeGolfCardContent: React.FC = () => (
  <CardBase sx={{ height: '100%' }}>
    <Typography level="title-lg">
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
  </CardBase>
);
