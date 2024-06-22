import React from 'react';

import { FormattedMessage } from 'react-intl';

import { QuoteCard } from '../../../components/card/QuoteCard';
import { SoftLink } from '../../../components/SoftLink';

export const BioQuoteCardContent: React.FC = () => (
  <QuoteCard>
    <FormattedMessage
      id="home.biography"
      values={{
        aCern: chunk => (
          <SoftLink href="https://home.cern" target="_blank" rel="noopener">
            {chunk}
          </SoftLink>
        ),
        aEpfl: chunk => (
          <SoftLink href="https://epfl.ch" target="_blank" rel="noopener">
            {chunk}
          </SoftLink>
        ),
      }}
    />
  </QuoteCard>
);
