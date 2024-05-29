import React from 'react';
import { SoftLink } from '../../../components/SoftLink';
import { QuoteCard } from '../../../components/card/QuoteCard';
import { FormattedMessage } from 'react-intl';

export const BioQuoteCardContent: React.FC = () => (
  <QuoteCard>
    <FormattedMessage
      id="home.biography"
      values={{
        aCern: chunk => <SoftLink href="https://home.cern">{chunk}</SoftLink>,
        aEpfl: chunk => <SoftLink href="https://epfl.ch">{chunk}</SoftLink>
      }}
    />
  </QuoteCard>
);
