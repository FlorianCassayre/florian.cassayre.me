import React from 'react';

import { Launch } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/joy';
import { FormattedMessage, useIntl } from 'react-intl';

import { CardBase } from './CardBase';

interface Publication {
  title: string;
  year: number;
  conference?: string;
  authors: string[];
  context?: string;
  abstract: string;
  link?: string;
  upcoming?: boolean;
}

interface PublicationsCardProps {
  publications: Publication[];
}

export const PublicationsCard: React.FC<PublicationsCardProps> = ({ publications }) => {
  const { $t } = useIntl();
  return (
    <CardBase sx={{ p: 0, overflow: 'hidden' }}>
      <AccordionGroup>
        {publications.map(({ title, year, conference, authors, context, abstract, link, upcoming }, i) => (
          <Accordion key={i} disabled={upcoming}>
            <AccordionSummary>
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip variant="outlined">{year}</Chip>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0.5, sm: 1 }}>
                  <Typography>{title}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {!!conference && <Chip color="primary">{conference}</Chip>}
                    {!!upcoming && (
                      <Chip color="warning">
                        <FormattedMessage id="home.publications.future" />
                      </Chip>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
                  <Typography level="body-sm">{authors.join(', ')}</Typography>
                  <Typography textAlign="justify">{abstract}</Typography>
                  {!!context && (
                    <Typography level="body-sm" fontStyle="italic">
                      {context}
                    </Typography>
                  )}
                </Stack>
                {!!link && (
                  <IconButton
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    sx={{ flexShrink: 0 }}
                    aria-label={$t({ id: 'common.externalLink' })}
                  >
                    <Launch color="action" />
                  </IconButton>
                )}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionGroup>
    </CardBase>
  );
};
