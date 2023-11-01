import React from 'react';
import { ProjectCards } from '../../components/card/ProjectCards';
import { DiJava } from '@react-icons/all-files/di/DiJava';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiScala } from '@react-icons/all-files/di/DiScala';
import { FaProjectDiagram } from '@react-icons/all-files/fa/FaProjectDiagram';
import { GrMysql } from '@react-icons/all-files/gr/GrMysql';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';

export const ProjectCardsContent: React.FC = () => {
  const JAVA = { name: 'Java', icon: DiJava, color: 'warning' } as const;
  const SCALA = { name: 'Scala', icon: DiScala, color: 'danger' } as const;
  const ORACLE_DB = { name: 'Oracle DB', icon: DiJavascript1, color: 'neutral' } as const;
  const MYSQL = { name: 'MySQL', icon: GrMysql, color: 'neutral' } as const;
  const REACT = { name: 'React', icon: DiReact, color: 'primary' } as const;
  const CAMUNDA = { name: 'Camunda', icon: FaProjectDiagram, color: 'neutral' } as const;
  const NEXTJS = { name: 'Next.js', icon: DiReact, color: 'neutral' } as const;

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
