import React from 'react';
import { AppCards } from '../../../components/card/AppCards';
import { AutoStories, PedalBike } from '@mui/icons-material';

export const AppCardsContent: React.FC = () => (
  <AppCards apps={[
    {
      name: 'Bike',
      icon: PedalBike,
      description: 'Automatic tracker for my bike trips.',
      homepage: 'https://bike.cassayre.me',
    },
    {
      name: 'Genealogy',
      icon: AutoStories,
      description: 'Statistics from my genealogical database.',
      homepage: 'https://genealogy.florian.cassayre.me',
    },
  ]} />
);
