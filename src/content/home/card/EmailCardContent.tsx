import React from 'react';
import { EmailCard } from '../../../components/card/EmailCard';
import { useIntl } from 'react-intl';

const Key = 'home.social.contact';

export const EmailCardContent: React.FC = () => {
  const { $t } = useIntl();
  return (
    <EmailCard
      description={$t({ id: `${Key}.description` })}
      email={'florian' + '@' + 'cassayre.me'}
      smalltext={$t({ id: `${Key}.disclaimer` })}
    />
  );
};
