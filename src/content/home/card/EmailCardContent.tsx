import React from 'react';
import { EmailCard } from '../../../components/card/EmailCard';

export const EmailCardContent: React.FC = () => {
  return (
    <EmailCard
      description="Don't hesitate to drop me a message at:"
      email={'florian' + '@' + 'cassayre.me'}
      smalltext="I receive about one message a day, I try my best to reply quickly but don't always manage. Please do not hesitate to remind me if I missed yours."
    />
  );
};
