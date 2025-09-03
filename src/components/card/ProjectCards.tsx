import React from 'react';

import { Grid, Stack } from '@mui/joy';

import { ProjectCard } from './ProjectCard';

interface ProjectCardsProps {
  projects: Parameters<typeof ProjectCard>[number][][];
}

export const ProjectCards: React.FC<ProjectCardsProps> = ({ projects }) => {
  const spacing = 2;
  return (
    <Stack direction="column" spacing={spacing}>
      {projects.map((projectGroup, i) => (
        <Grid key={i} container direction="row" spacing={spacing} justifyContent="center" alignItems="stretch">
          {projectGroup.map((project, j) => (
            <Grid key={j} xs={12} sm={6} md={4}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Stack>
  );
};
