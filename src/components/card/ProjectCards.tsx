import React from 'react';
import { Grid } from '@mui/joy';
import { ProjectCard } from './ProjectCard.tsx';

interface ProjectCardsProps {
  projects: Parameters<typeof ProjectCard>[0][];
}

export const ProjectCards: React.FC<ProjectCardsProps> = ({ projects }) => {
  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
      {projects.map((project, i) => (
        <Grid key={i} xs={12} lg={4}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  );
};
