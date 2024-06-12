import React from 'react';
import { useIntl } from 'react-intl';
import { NotFound } from './NotFound';

export const PageNotFoundContent: React.FC = () => {
  const { $t } = useIntl();
  return (
    <NotFound title={$t({ id: 'notFound.title' })} />
  );
};
