import React from 'react';

import { useIntl } from 'react-intl';

import { AdventOfCodeCard } from '../../../components/card/AdventOfCodeCard';

const Key = 'home.challenges.adventOfCode';

export const AdventOfCodeCardContent: React.FC = () => {
  const { $t } = useIntl();
  return (
    <AdventOfCodeCard
      description={$t({ id: `${Key}.description` })}
      years={[2023, 2022, 2021, 2020, 2019, 2018, 2017]}
      repository={year => `https://github.com/FlorianCassayre/AdventOfCode-${year}`}
    />
  );
};
