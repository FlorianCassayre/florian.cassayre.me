import React from 'react';

import { Key } from '@mui/icons-material';
import { Card, CardContent, Input, Typography } from '@mui/joy';
import { FormattedMessage, useIntl } from 'react-intl';

import { CopyButton } from '../CopyButton';

interface PgpFingerprintCardProps {
  fingerprint: string;
  smalltext?: React.ReactNode;
}

export const PgpFingerprintCard: React.FC<PgpFingerprintCardProps> = ({ fingerprint, smalltext }) => {
  const { $t } = useIntl();
  return (
    <Card>
      <Typography level="title-lg" fontWeight="sm">
        <FormattedMessage id="home.social.pgp.title" />
      </Typography>
      <CardContent>
        <Input
          startDecorator={<Key color="action" />}
          endDecorator={<CopyButton content={fingerprint} />}
          value={fingerprint}
          readOnly
          aria-label={$t({ id: 'home.social.pgp.title' })}
        />
        {!!smalltext && (
          <Typography level="body-xs" textAlign="right">
            {smalltext}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
