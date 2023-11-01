import React from 'react';
import { EmailCard } from '../../components/card/EmailCard';

export const EmailCardContent: React.FC = () => {
  return (
    <EmailCard
      description="Don't hesitate to drop me a message at:"
      email="florian@cassayre.me"
    />
  );
};
