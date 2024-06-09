import React from 'react';
import { ContributedProjectsCard } from '../../../components/card/ContributedProjectsCard';
import { Architecture, Games, Hexagon, Lightbulb, LocalLibrary, LocationOn } from '@mui/icons-material';
import { useIntl } from 'react-intl';

const Key = 'home.contributed';

export const ContributedProjectsCardContent: React.FC = () => {
  const { $t } = useIntl();
  return (
    <ContributedProjectsCard
      preview={3}
      projects={[
        {
          title: 'CDS-ILS',
          description: $t({ id: `${Key}.projects.cdsIls.description` }),
          icon: LocalLibrary,
          homepage: 'https://catalogue.library.cern',
          production: true,
        },
        {
          title: 'LISA',
          description: $t({ id: `${Key}.projects.lisa.description` }),
          icon: Architecture,
          homepage: 'https://github.com/epfl-lara/lisa',
        },
        {
          title: 'SamaGames',
          description: $t({ id: `${Key}.projects.samagames.description` }),
          icon: Hexagon,
          homepage: 'https://github.com/SamaGames',
          retired: true,
        },
        // No Twitter promotion
        /*{
          title: '@CompteBon',
          description: 'A Twitter bot to play DCDL.',
          icon: Calculate,
          homepage: 'https://github.com/FlorianCassayre/comptebon',
          retired: true,
        },*/
        {
          title: 'Hawk',
          description: $t({ id: `${Key}.projects.hawk.description` }),
          icon: Games,
          homepage: 'https://github.com/zDevelopers/Hawk',
        },
        {
          title: 'ZePS',
          description: $t({ id: `${Key}.projects.zeps.description` }),
          icon: LocationOn,
          homepage: 'https://github.com/zDevelopers/ZePS-Core',
        },
        {
          title: 'DeepLearningUtil',
          description: $t({ id: `${Key}.projects.deepLearningUtil.description` }),
          icon: Lightbulb,
          homepage: 'https://github.com/FlorianCassayre/DeepLearningUtil',
        },
      ]}
    />
  );
};
