import React from 'react';

import { Add, Email } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Input, Typography } from '@mui/joy';
import { FormattedMessage, useIntl } from 'react-intl';

import { useUrlGenerator } from '../../hooks/useUrlGenerator';
import { CopyButton } from '../CopyButton';

interface EmailCardProps {
  description: React.ReactNode;
  email: string;
  smalltext: string;
  link?: boolean;
}

export const EmailCard: React.FC<EmailCardProps> = ({ description, email, smalltext, link }) => {
  const { $t } = useIntl();
  const urlGenerator = useUrlGenerator();
  return (
    <Card sx={{ height: '100%' }}>
      <Typography level="title-lg" fontWeight="sm">
        <FormattedMessage id="home.social.contact.title" />
      </Typography>
      <CardContent>
        <Typography sx={{ mb: 1 }}>{description}</Typography>
        <Input
          value={email}
          readOnly
          startDecorator={<Email color="action" />}
          endDecorator={<CopyButton content={email} />}
          aria-label={$t({ id: 'home.social.contact.label' })}
        />
        <Typography level="body-xs">{smalltext}</Typography>
        {link && (
          <Box sx={{ mt: 'auto' }}>
            <Button
              component="a"
              href={urlGenerator('/contact')}
              variant="plain"
              startDecorator={<Add />}
              sx={{ width: '100%', mt: 1 }}
            >
              <FormattedMessage id="common.action.viewMore" />
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
