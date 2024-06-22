import React, { useCallback } from 'react';

import { DiJava } from '@react-icons/all-files/di/DiJava';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiScala } from '@react-icons/all-files/di/DiScala';
import { FaProjectDiagram } from '@react-icons/all-files/fa/FaProjectDiagram';
import { GrMysql } from '@react-icons/all-files/gr/GrMysql';
import { GrOracle } from '@react-icons/all-files/gr/GrOracle';
import { useIntl } from 'react-intl';

import { ProjectCards } from '../../../components/card/ProjectCards';

export const ProjectCardsContent: React.FC = () => {
  const intl = useIntl();

  const JAVA = { name: 'Java', icon: DiJava, color: 'warning' } as const;
  const SCALA = { name: 'Scala', icon: DiScala, color: 'danger' } as const;
  const ORACLE_DB = { name: 'Oracle DB', icon: GrOracle, color: 'neutral' } as const;
  const MYSQL = { name: 'MySQL', icon: GrMysql, color: 'neutral' } as const;
  const REACT = { name: 'React', icon: DiReact, color: 'primary' } as const;
  const CAMUNDA = { name: 'Camunda', icon: FaProjectDiagram, color: 'neutral' } as const;
  const NEXTJS = { name: 'Next.js', icon: DiReact, color: 'neutral' } as const;

  const status = useCallback(
    (
      status: boolean | null
    ): Pick<Parameters<typeof ProjectCards>[0]['projects'][number], 'status' | 'statusText'> => ({
      status,
      statusText: intl.$t({
        id: status === true ? 'home.project.status.production' : 'home.project.status.incrementalDeployment',
      }),
    }),
    [intl]
  );

  return (
    <ProjectCards
      projects={[
        {
          image: '/projects/yoga-sof.fr.png',
          logo: '/projects/yoga-sof.fr-logo.svg',
          title: 'Yoga Sof',
          description: intl.$t({ id: 'home.projects.yogaSofa.description' }),
          technologies: [NEXTJS, MYSQL],
          ...status(true),
          homepage: 'https://yoga-sof.fr',
          github: 'https://github.com/FlorianCassayre/yoga-sof.fr',
        },
        {
          image: '/projects/cern-lhc.jpg',
          logo: '/projects/impact.cern.ch-logo.svg',
          title: 'IMPACT',
          description: intl.$t({ id: 'home.projects.impact.description' }),
          technologies: [JAVA, ORACLE_DB, CAMUNDA, REACT],
          ...status(null),
          pro: true,
        },
        {
          image: '/projects/rfg-arbre.app.jpg',
          logo: '/projects/arbre.app-logo.svg',
          title: 'arbre.app',
          description: intl.$t({ id: 'home.projects.arbre.description' }),
          technologies: [SCALA, REACT],
          ...status(true),
          homepage: 'https://arbre.app',
          github: 'https://github.com/arbre-app',
        },
      ]}
    />
  );
};
