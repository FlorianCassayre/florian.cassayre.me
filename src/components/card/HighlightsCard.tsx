import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Stack, Typography } from '@mui/joy';

import { CardBase } from './CardBase';

interface Highlight {
  title: string;
  icon: SvgIconComponent;
  content: React.ReactNode;
}

interface HighlightsCardProps {
  highlights: Highlight[];
}

export const HighlightsCard: React.FC<HighlightsCardProps> = ({ highlights }) => {
  return (
    <CardBase sx={{ p: 0, overflow: 'hidden' }}>
      <AccordionGroup>
        {highlights.map(({ title, icon: Icon, content }, i) => (
          <Accordion key={i}>
            <AccordionSummary>
              <Stack direction="row" spacing={1} alignItems="center">
                <Icon color="action" />
                <Typography>{title}</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2 }}>{content}</AccordionDetails>
          </Accordion>
        ))}
      </AccordionGroup>
    </CardBase>
  );
};
