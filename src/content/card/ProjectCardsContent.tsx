import React from 'react';
import { ProjectCards } from '../../components/card/ProjectCards.tsx';
import { DiReact, DiScala } from 'react-icons/di';

export const ProjectCardsContent: React.FC = () => {
  const REACT = { name: 'React', icon: DiReact, color: 'primary' } as const;
  const SCALA = { name: 'Scala', icon: DiScala, color: 'danger' } as const;

  return (
    <ProjectCards
      projects={[
        {
          title: 'arbre.app',
          description: 'A search engine',
          technologies: [SCALA, REACT],
        }
      ]}
    />
  );
}
