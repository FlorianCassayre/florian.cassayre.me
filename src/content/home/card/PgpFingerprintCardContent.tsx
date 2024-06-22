import React from 'react';

import { FormattedMessage } from 'react-intl';

import { PgpFingerprintCard } from '../../../components/card/PgpFingerprintCard';
import { SoftLink } from '../../../components/SoftLink';
import { useUrlGenerator } from '../../../hooks/useUrlGenerator';

interface PgpFingerprintCardContentProps {
  link?: boolean;
}

export const PgpFingerprintCardContent: React.FC<PgpFingerprintCardContentProps> = ({ link }) => {
  const urlGenerator = useUrlGenerator();
  return (
    <PgpFingerprintCard
      fingerprint="15F2 D0CC 0424 6F32 25EC 9AAD B280 01E0 4138 B6FE"
      smalltext={
        link ? (
          <SoftLink href={urlGenerator('/pgp')}>
            <FormattedMessage id="home.social.pgp.accessKey" />
          </SoftLink>
        ) : undefined
      }
    />
  );
};
