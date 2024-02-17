import React from 'react';
import { Typography } from '@mui/joy';
import { SoftLink } from '../../../components/SoftLink';

interface NotFoundFallbackContentProps {
  fallback: string;
}

export const NotFoundFallbackContent: React.FC<NotFoundFallbackContentProps> = ({ fallback }) => {
  return (
    <>
      <Typography>
        Page supprimée
      </Typography>
      <Typography>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        La page à laquelle vous avez essayé d'accéder n'existe plus.
        Vous pouvez néanmoins retrouver son code source à cette adresse :{' '}
        <SoftLink href={fallback} target="_blank" rel="noopener">{fallback}</SoftLink>
      </Typography>
    </>
  );
};
