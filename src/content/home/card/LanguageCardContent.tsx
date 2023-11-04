import React from 'react';
import { LanguageCard } from '../../../components/card/LanguageCard';
import { DE, FR, GB, SE } from 'country-flag-icons/react/3x2';

export const LanguageCardContent: React.FC = () => {
  return (
    <LanguageCard
      languages={[
        { name: 'English', flag: GB, level: 'Proficient' },
        { name: 'French', flag: FR, level: 'Native' },
        { name: 'German', flag: DE, level: 'Experienced' },
        { name: 'Swedish', flag: SE, level: 'Basics' },
      ]}
    />
  )
};
