import React from 'react';

import { Lock } from '@mui/icons-material';
import { Stack, Textarea, Typography } from '@mui/joy';
import { FormattedMessage, useIntl } from 'react-intl';

import { CopyButton } from '../CopyButton';
import { CardBase } from './CardBase';

interface PgpKeyCardProps {
  pgpKey: string;
  scheme: string;
}

export const PgpKeyCard: React.FC<PgpKeyCardProps> = ({ pgpKey, scheme }) => {
  const { $t } = useIntl();
  return (
    <CardBase>
      <Typography level="title-lg">
        <FormattedMessage id="pgp.key.title" />
      </Typography>
      <Textarea
        startDecorator={
          <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
            <Typography level="body-xs" fontWeight={300} sx={{ pl: 1 }}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Lock fontSize="inherit" />
                <span>{scheme}</span>
              </Stack>
            </Typography>
            <CopyButton content={pgpKey} />
          </Stack>
        }
        value={pgpKey}
        readOnly
        aria-label={$t({ id: 'home.social.pgp.title' })}
        sx={{ fontFamily: 'monospace' }}
      />
    </CardBase>
  );
};
