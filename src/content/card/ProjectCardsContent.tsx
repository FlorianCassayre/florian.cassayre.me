import React from 'react';
import { ProjectCards } from '../../components/card/ProjectCards.tsx';
import { DiJava, DiReact, DiScala } from 'react-icons/di';
import { GoWorkflow } from 'react-icons/go';
import { GrMysql, GrOracle } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';

export const ProjectCardsContent: React.FC = () => {
  const JAVA = { name: 'Java', icon: DiJava, color: 'warning' } as const;
  const SCALA = { name: 'Scala', icon: DiScala, color: 'danger' } as const;
  const ORACLE_DB = { name: 'Oracle DB', icon: GrOracle, color: 'neutral' } as const;
  const MYSQL = { name: 'MySQL', icon: GrMysql, color: 'neutral' } as const;
  const REACT = { name: 'React', icon: DiReact, color: 'primary' } as const;
  const CAMUNDA = { name: 'Camunda', icon: GoWorkflow, color: 'neutral' } as const;
  const NEXTJS = { name: 'Next.js', icon: TbBrandNextjs, color: 'neutral' } as const;

  return (
    <ProjectCards
      projects={[
        {
          image: '/projects/arbre.app.png',
          title: 'arbre.app',
          description: 'Tools for genealogists',
          technologies: [SCALA, REACT],
          status: 'In production',
          homepage: 'https://arbre.app',
          github: 'https://github.com/arbre-app',
        },
        {
          image: '/projects/yoga-sof.fr.png',
          title: 'Yoga Sof',
          description: 'Site to schedule classes, manage registrations and handle payments',
          technologies: [NEXTJS, MYSQL],
          status: 'In production',
          homepage: 'https://yoga-sof.fr',
          github: 'https://github.com/FlorianCassayre/yoga-sof.fr',
        },
        {
          image: '/projects/impact.cern.ch.png',
          title: 'IMPACT',
          description: 'Manage interventions at CERN',
          technologies: [JAVA, ORACLE_DB, CAMUNDA, REACT],
          status: 'Incremental deployment',
          pro: true,
        },
      ]}
    />
  );
}
