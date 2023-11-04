import React from 'react';
import { ProjectCards } from '../../../components/card/ProjectCards';
import { DiJava } from '@react-icons/all-files/di/DiJava';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiScala } from '@react-icons/all-files/di/DiScala';
import { FaProjectDiagram } from '@react-icons/all-files/fa/FaProjectDiagram';
import { GrMysql } from '@react-icons/all-files/gr/GrMysql';
import { GrOracle } from '@react-icons/all-files/gr/GrOracle';

export const ProjectCardsContent: React.FC = () => {
  const JAVA = { name: 'Java', icon: DiJava, color: 'warning' } as const;
  const SCALA = { name: 'Scala', icon: DiScala, color: 'danger' } as const;
  const ORACLE_DB = { name: 'Oracle DB', icon: GrOracle, color: 'neutral' } as const;
  const MYSQL = { name: 'MySQL', icon: GrMysql, color: 'neutral' } as const;
  const REACT = { name: 'React', icon: DiReact, color: 'primary' } as const;
  const CAMUNDA = { name: 'Camunda', icon: FaProjectDiagram, color: 'neutral' } as const;
  const NEXTJS = { name: 'Next.js', icon: DiReact, color: 'neutral' } as const;

  return (
    <ProjectCards
      projects={[
        {
          image: '/projects/yoga-sof.fr.png',
          logo: '/projects/yoga-sof.fr-logo.svg',
          title: 'Yoga Sof',
          description: 'Site to schedule classes, manage registrations and handle payments',
          technologies: [NEXTJS, MYSQL],
          status: 'In production',
          homepage: 'https://yoga-sof.fr',
          github: 'https://github.com/FlorianCassayre/yoga-sof.fr',
        },
        {
          image: '/projects/cern-lhc.jpg',
          logo: '/projects/impact.cern.ch-logo.svg',
          title: 'IMPACT',
          description: `CERN's intervention management planning and coordination tool`,
          technologies: [JAVA, ORACLE_DB, CAMUNDA, REACT],
          status: 'Incremental deployment',
          pro: true,
        },
        {
          image: '/projects/rfg-arbre.app.jpg',
          logo: '/projects/arbre.app-logo.svg',
          title: 'arbre.app',
          description: 'Tools for genealogists: open data search engine, Gedcom file reader and visualizer, etc.',
          technologies: [SCALA, REACT],
          status: 'In production',
          homepage: 'https://arbre.app',
          github: 'https://github.com/arbre-app',
        },
      ]}
    />
  );
}
