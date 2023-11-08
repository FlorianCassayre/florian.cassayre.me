import React from 'react';
import { ContributedProjectsCard } from '../../../components/card/ContributedProjectsCard';
import { Architecture, Games, Hexagon, Lightbulb, LocalLibrary, LocationOn } from '@mui/icons-material';

export const ContributedProjectsCardContent: React.FC = () => {
  return (
    <ContributedProjectsCard
      preview={3}
      projects={[
        {
          title: 'CDS-ILS',
          description: 'The CERN integrated library system.',
          icon: LocalLibrary,
          homepage: 'https://catalogue.library.cern',
          production: true,
        },
        {
          title: 'LISA',
          description: 'A proof assistant written in Scala based on set theory and sequent calculus.',
          icon: Architecture,
          homepage: 'https://github.com/epfl-lara/lisa',
        },
        {
          title: 'SamaGames',
          description: 'A server-side modded Minecraft game server that used to host 300,000 players. Contributed to the development of the foundations as well as several mini-games.',
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
          description: 'A Minecraft plugin to record UHC gameplays.',
          icon: Games,
          homepage: 'https://github.com/zDevelopers/Hawk',
        },
        {
          title: 'ZePS',
          description: 'An over-engineered GPS application for assisting players in moving around our Minecraft map.',
          icon: LocationOn,
          homepage: 'https://github.com/zDevelopers/ZePS-Core',
        },
        {
          title: 'DeepLearningUtil',
          description: 'A toy Java library to build artificial neural networks.',
          icon: Lightbulb,
          homepage: 'https://github.com/FlorianCassayre/DeepLearningUtil',
        },
      ]}
    />
  );
};
