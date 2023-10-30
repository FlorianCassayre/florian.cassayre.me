import React from 'react';
import { Card, IconButton, Input, Typography } from '@mui/joy';
import { ContentCopy, Key } from '@mui/icons-material';

interface PgpCardProps {

}

export const PgpCard: React.FC<PgpCardProps> = () => {
  const value = '15F2 D0CC 0424 6F32 25EC 9AAD B280 01E0 4138 B6FE';
  return (
    <Card>
      <Typography level="title-lg">
        PGP key
      </Typography>
      <Input
        startDecorator={<Key />}
        endDecorator={<IconButton><ContentCopy /></IconButton>}
        value={value}
        readOnly
      />
    </Card>
  );
};
