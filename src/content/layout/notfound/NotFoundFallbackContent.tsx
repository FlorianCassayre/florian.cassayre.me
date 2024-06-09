import React from 'react';
import { Typography } from '@mui/joy';
import { SoftLink } from '../../../components/SoftLink';
import { FormattedMessage } from 'react-intl';

interface NotFoundFallbackContentProps {
  fallback: string;
}

export const NotFoundFallbackContent: React.FC<NotFoundFallbackContentProps> = ({ fallback }) => {
  return (
    <>
      <Typography>
        <FormattedMessage id="notFoundFallback.title" />
      </Typography>
      <Typography>
        <FormattedMessage
          id="notFoundFallback.description"
          values={{
            a: chunk => <SoftLink href={fallback} target="_blank" rel="noopener">{chunk}</SoftLink>,
            fallback,
          }}
        />
      </Typography>
    </>
  );
};
