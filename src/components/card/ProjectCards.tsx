import React from 'react';
import { Grid } from '@mui/joy';
import { ProjectCard } from './ProjectCard.tsx';

interface ProjectCardsProps {
  projects: Parameters<typeof ProjectCard>[0][];
}

export const ProjectCards: React.FC<ProjectCardsProps> = ({ projects }) => {
  return (
    <Grid container direction="row" spacing={2} justifyContent="center" alignItems="stretch">
      {projects.map((project, i) => (
        <Grid key={i} xs={12} sm={6} md={4}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  );
};
