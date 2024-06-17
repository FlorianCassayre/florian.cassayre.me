import React from 'react';
import { Card, Stack, Textarea, Typography } from '@mui/joy';
import { CopyButton } from '../CopyButton';
import { FormattedMessage, useIntl } from 'react-intl';
import { Lock } from '@mui/icons-material';

interface PgpKeyCardProps {
  pgpKey: string;
  scheme: string;
}

export const PgpKeyCard: React.FC<PgpKeyCardProps> = ({ pgpKey, scheme }) => {
  const { $t } = useIntl();
  return (
    <Card>
      <Typography level="title-lg" fontWeight="sm">
        <FormattedMessage id="pgp.key.title" />
      </Typography>
      <Textarea
        startDecorator={(
          <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
            <Typography level="body-xs" sx={{ pl: 1 }}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Lock fontSize="inherit" />
                <span>{scheme}</span>
              </Stack>
            </Typography>
            <CopyButton content={pgpKey} />
          </Stack>
        )}
        value={pgpKey}
        readOnly
        aria-label={$t({ id: 'home.social.pgp.title' })}
        sx={{ fontFamily: 'monospace' }}
      />
    </Card>
  );
};
