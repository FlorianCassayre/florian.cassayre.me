import React from 'react';
import { SoftLink } from '../../../components/SoftLink';
import { QuoteCard } from '../../../components/card/QuoteCard';

export const BioQuoteCardContent: React.FC = () => (
  <QuoteCard>
    I am currently employed by <SoftLink href="https://home.cern">CERN</SoftLink> as a full-stack web developer.
    I graduated in 2022 from <SoftLink href="https://epfl.ch">EPFL</SoftLink> as a computer scientist, with a focus on formal methods.
    I have a diverse range of interests including (but not limited to) open source, genealogy and sustainability.
  </QuoteCard>
);
