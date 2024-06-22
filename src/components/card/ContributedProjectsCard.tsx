import React, { useState } from 'react';

import { Add } from '@mui/icons-material';
import { Button, Grid } from '@mui/joy';
import { FormattedMessage } from 'react-intl';

import { ContributedProjectCard } from './ContributedProjectCard';

interface ContributedProjectsCardProps {
  projects: Parameters<typeof ContributedProjectCard>[0][];
  preview: number;
}

export const ContributedProjectsCard: React.FC<ContributedProjectsCardProps> = ({ projects, preview }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Grid container direction="row" spacing={2} justifyContent="center" alignItems="stretch">
      {projects.slice(0, expanded ? projects.length : preview).map((project, i) => (
        <Grid key={i} xs={12} sm={6} md={4}>
          <ContributedProjectCard {...project} />
        </Grid>
      ))}
      {!expanded && (
        <Grid xs={12} sx={{ textAlign: 'center' }}>
          <Button variant="plain" startDecorator={<Add />} onClick={() => setExpanded(true)} sx={{ width: '100%' }}>
            <FormattedMessage id="common.action.viewMore" />
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
