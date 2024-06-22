import React from 'react';

import { Info } from '@mui/icons-material';
import { Alert, Box, Typography } from '@mui/joy';
import { FormattedMessage, useIntl } from 'react-intl';

import { GlitchedText } from '../../../components/GlitchedText';
import { SoftLink } from '../../../components/SoftLink';
import { localizeUrl } from '../../../i18n/utils';

interface NotFoundProps {
  title: string;
  description?: React.ReactNode;
}

export const NotFound: React.FC<NotFoundProps> = ({ title, description }) => {
  const { locale } = useIntl();
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography fontSize={150} fontWeight="lg" fontFamily="Bitter">
        <GlitchedText>404</GlitchedText>
      </Typography>
      <Typography level="h1" fontWeight="sm" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {!!description && (
        <Alert startDecorator={<Info />} variant="soft" color="primary" sx={{ mt: 4, mb: 4, textAlign: 'left' }}>
          <Typography>{description}</Typography>
        </Alert>
      )}
      <Typography sx={{ mb: 2 }}>
        <SoftLink href={localizeUrl('/', locale)}>
          <FormattedMessage id="notFound.home" />
        </SoftLink>
      </Typography>
    </Box>
  );
};
