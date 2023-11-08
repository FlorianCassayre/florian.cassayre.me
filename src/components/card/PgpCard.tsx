import React from 'react';
import { Card, Input, Typography } from '@mui/joy';
import { Key } from '@mui/icons-material';
import { CopyButton } from '../CopyButton';

interface PgpCardProps {
  fingerprint: string;
}

export const PgpCard: React.FC<PgpCardProps> = ({ fingerprint }) => {
  return (
    <Card>
      <Typography level="title-lg" fontWeight="sm">
        PGP key
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
