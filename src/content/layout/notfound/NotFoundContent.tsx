import { Typography } from '@mui/joy';
import React from 'react';
import { FormattedMessage } from 'react-intl';

export const PageNotFoundContent: React.FC = () => {
  return (
    <Typography>
      <FormattedMessage id="notFound.title" />
    </Typography>
  );
};
