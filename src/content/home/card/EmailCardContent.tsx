import React from 'react';

import { useIntl } from 'react-intl';

import { EmailCard } from '../../../components/card/EmailCard';

const Key = 'home.social.contact';

interface EmailCardContentProps {
  link?: boolean;
}

export const EmailCardContent: React.FC<EmailCardContentProps> = ({ link }) => {
  const { $t } = useIntl();
  return (
    <EmailCard
      description={$t({ id: `${Key}.description` })}
      email={'florian' + '@' + 'cassayre.me'}
      smalltext={$t({ id: `${Key}.disclaimer` })}
      link={link}
    />
  );
};
