import React from 'react';

import { FormattedMessage, useIntl } from 'react-intl';

import { NotFound } from './NotFound';
import { SoftLink } from '../../../components/SoftLink';

interface NotFoundFallbackContentProps {
  fallback: string;
}

export const NotFoundFallbackContent: React.FC<NotFoundFallbackContentProps> = ({ fallback }) => {
  const { $t } = useIntl();
  return (
    <NotFound
      title={$t({ id: 'notFoundFallback.title' })}
      description={
        <FormattedMessage
          id="notFoundFallback.description"
          values={{
            a: chunk => (
              <SoftLink href={fallback} target="_blank" rel="noopener">
                {chunk}
              </SoftLink>
            ),
            fallback,
          }}
        />
      }
    />
  );
};
