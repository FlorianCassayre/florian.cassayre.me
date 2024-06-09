import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Card,
  Chip, IconButton,
  Stack,
  Typography,
} from '@mui/joy';
import { Launch } from '@mui/icons-material';

interface Publication {
  title: string;
  year: number;
  conference?: string;
  authors: string[];
  context?: string;
  description: string;
  link: string;
}

interface PublicationsCardProps {
  publications: Publication[];
}

export const PublicationsCard: React.FC<PublicationsCardProps> = ({ publications }) => {
  return (
    <Card sx={{ p: 0, overflow: 'hidden' }}>
      <AccordionGroup>
        {publications.map(({ title, year, conference, authors, context, description, link }, i) => (
          <Accordion key={i}>
            <AccordionSummary>
              <Stack direction="row" spacing={1}>
                <Chip variant="outlined">{year}</Chip>
                <Typography>
                  {title}
                </Typography>
                {!!conference && (
                  <Chip color="primary">{conference}</Chip>
                )}
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                  <Typography level="body-sm">{authors.join(', ')}</Typography>
                  <Typography textAlign="justify">{description}</Typography>
                  {!!context && <Typography level="body-sm" fontStyle="italic">{context}</Typography>}
                </Stack>
                <IconButton component="a" href={link} target="_blank" rel="noopener" sx={{ flexShrink: 0 }}>
                  <Launch color="action" />
                </IconButton>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionGroup>
    </Card>
  );
}
