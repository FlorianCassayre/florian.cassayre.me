import React from 'react';
import { Card, Input, Typography } from '@mui/joy';
import { Key } from '@mui/icons-material';
import { CopyButton } from '../CopyButton';
import { FormattedMessage } from 'react-intl';

interface PgpCardProps {
  fingerprint: string;
}

export const PgpCard: React.FC<PgpCardProps> = ({ fingerprint }) => {
  return (
    <Card>
      <Typography level="title-lg" fontWeight="sm">
        <FormattedMessage id="home.social.pgp.title" />
      </Typography>
      <Input
        startDecorator={<Key color="action" />}
        endDecorator={<CopyButton content={fingerprint} />}
        value={fingerprint}
        readOnly
      />
    </Card>
  );
};
