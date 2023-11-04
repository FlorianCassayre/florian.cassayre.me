import React from 'react';
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Card, ListItem, Typography } from '@mui/joy';
import { SoftLink } from '../SoftLink';

interface Highlight {
  title: string;
  content: React.ReactNode;
}

interface HighlightsCardProps {
  highlights: Highlight[];
}

export const HighlightsCard: React.FC<HighlightsCardProps> = ({ highlights }) => {
  return (
    <Card sx={{ p: 0, overflow: 'hidden' }}>
      <AccordionGroup>
        {highlights.map(({ title, content }, i) => (
          <Accordion key={i}>
            <AccordionSummary>
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2 }}>
              {content}
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionGroup>
    </Card>
  );
};
