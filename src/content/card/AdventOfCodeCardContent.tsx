import React from 'react';
import { AdventOfCodeCard } from '../../components/card/AdventOfCodeCard';

export const AdventOfCodeCardContent: React.FC = () => (
  <AdventOfCodeCard
    description="My participations are all in Scala."
    years={[2023, 2022, 2021, 2020, 2019, 2018, 2017]}
    repository={year => `https://github.com/FlorianCassayre/AdventOfCode-${year}`}
  />
);
