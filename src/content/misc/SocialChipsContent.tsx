import React from 'react';

import { GitHub, LinkedIn, School } from '@mui/icons-material';

import { SocialChips } from '../../components/surface/SocialChips';

export const SocialChipsContent: React.FC = () => {
  return (
    <SocialChips
      items={[
        {
          name: 'GitHub',
          icon: GitHub,
          url: 'https://github.com/FlorianCassayre',
        },
        {
          name: 'LinkedIn',
          icon: LinkedIn,
          url: 'https://www.linkedin.com/in/florian-cassayre',
        },
        {
          name: 'ORCID',
          icon: School, // TODO use `SiOrcid`
          url: 'https://orcid.org/0000-0001-5784-8051',
        },
      ]}
    />
  );
};
