import React from 'react';
import { AppCards } from '../../../components/card/AppCards';
import { AutoStories, PedalBike } from '@mui/icons-material';
import { useIntl } from 'react-intl';

const Key = 'home.apps';

export const AppCardsContent: React.FC = () => {
  const { $t } = useIntl();
  return (
    <AppCards apps={[
      {
        name: $t({ id: `${Key}.bike.title` }),
        icon: PedalBike,
        description: $t({ id: `${Key}.bike.description` }),
        homepage: 'https://bike.cassayre.me',
      },
      {
        name: $t({ id: `${Key}.genealogy.title` }),
        icon: AutoStories,
        description: $t({ id: `${Key}.genealogy.description` }),
        homepage: 'https://genealogy.florian.cassayre.me',
      },
    ]} />
  );
}
