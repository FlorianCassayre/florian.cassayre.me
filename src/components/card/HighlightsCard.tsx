import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Card, Stack, Typography } from '@mui/joy';

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
    <Card sx={{ p: 0, overflow: 'hidden' }}>
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
    </Card>
  );
};
