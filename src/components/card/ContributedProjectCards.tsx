import React, { useState } from 'react';

import { Add } from '@mui/icons-material';
import { Button, Grid } from '@mui/joy';
import { Collapse } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import { ContributedProjectCard } from './ContributedProjectCard';

interface ContributedProjectCardsProps {
  projects: Parameters<typeof ContributedProjectCard>[0][];
  preview: number;
}

export const ContributedProjectCards: React.FC<ContributedProjectCardsProps> = ({ projects, preview }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="stretch" sx={{ mt: -1, mx: -1 }}>
        {projects.map((project, i) => (
          <Grid key={i} xs={12} sm={6} md={4} sx={{ display: i < preview || expanded ? 'block' : 'none' }}>
            {i < preview ? (
              <ContributedProjectCard {...project} />
            ) : (
              <Collapse in={expanded}>
                <ContributedProjectCard {...project} />
              </Collapse>
            )}
          </Grid>
        ))}
      </Grid>
      <Collapse in={!expanded} sx={{ mt: -1 }}>
        <Button
          variant="plain"
          startDecorator={<Add />}
          onClick={() => setExpanded(true)}
          sx={{ width: '100%', mt: projects.length > 0 && (preview > 0 || expanded) ? 2 : 0 }}
        >
          <FormattedMessage id="common.action.viewMore" />
        </Button>
      </Collapse>
    </>
  );
};
