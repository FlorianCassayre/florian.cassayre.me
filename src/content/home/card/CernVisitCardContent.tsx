import React from 'react';

import { Card, Typography } from '@mui/joy';
import { FormattedMessage } from 'react-intl';

import { SoftLink } from '../../../components/SoftLink';

const Key = 'home.social.visitCern';

export const CernVisitCardContent: React.FC = () => {
  return (
    <Card>
      <Typography level="title-lg">
        <FormattedMessage id={`${Key}.title`} />
      </Typography>
      <Typography>
        <FormattedMessage
          id={`${Key}.description1`}
          values={{
            a: chunk => (
              <SoftLink href="https://home.cern/" target="_blank" rel="noopener">
                {chunk}
              </SoftLink>
            ),
          }}
        />
      </Typography>
      <Typography>
        <FormattedMessage id={`${Key}.description2`} />
      </Typography>
      <Typography level="body-xs" fontWeight={300} textAlign="right">
        <FormattedMessage
          id={`${Key}.disclaimer`}
          values={{
            a: chunk => (
              <SoftLink href="https://home.cern/resources/faqs/how-do-i-visit-cern" target="_blank" rel="noopener">
                {chunk}
              </SoftLink>
            ),
          }}
        />
      </Typography>
    </Card>
  );
};
