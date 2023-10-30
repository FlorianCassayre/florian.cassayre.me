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

interface PublicationsCardProps {

}

export const PublicationsCard: React.FC<PublicationsCardProps> = () => {
  interface Publication {
    title: string;
    year: number;
    conference?: string;
    authors: string[];
    description: string;
    link: string;
  }

  const publications: Publication[] = [
    {
      title: 'LISA: Towards a Foundational Theorem Prover',
      year: 2022,
      conference: `AITP'22`,
      authors: ['S. Guilloud', 'F. Cassayre', 'V. Kunčak'],
      description: 'We present the foundations and initial implementation of a new interactive theorem prover, named LISA.',
      link: 'http://colo12-c703.uibk.ac.at/2022/abstract/AITP_2022_paper_23.pdf',
    },
    {
      title: 'Image Denoising with Control over Deep Network Hallucination',
      year: 2022,
      conference: `EI'22`,
      authors: ['Qiyuan Liang', 'Florian Cassayre', 'Haley Owsianko', 'Majed El Helou', 'Sabine Süsstrunk'],
      description: 'Deep image denoisers achieve state-of-the-art results but with a hidden cost. [...]',
      link: 'https://arxiv.org/abs/2201.00429'
    },
    {
      title: 'A front-end for the LISA proof assistant',
      year: 2022,
      authors: ['Florian Cassayre'],
      description: 'Master thesis at LARA (Lab for Automated Reasoning and Analysis), EPFL.',
      link: 'https://doi.org/10.5281/zenodo.6645113',
    },
    {
      title: 'Theorem proving framework in Scala',
      year: 2020,
      authors: ['Florian Cassayre'],
      description: 'Semester project done at LARA (Lab for Automated Reasoning and Analysis), EPFL.',
      link: 'https://doi.org/10.5281/zenodo.4284080',
    },
  ];


  return (
    <Card sx={{ p: 0, overflow: 'hidden' }}>
      <AccordionGroup>
        {publications.map(({ title, year, conference, authors, description, link }, i) => (
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
                  <Typography>{description}</Typography>
                </Stack>
                <IconButton component="a" href={link} target="_blank" rel="noopener" sx={{ flexShrink: 0 }}>
                  <Launch />
                </IconButton>
              </Stack>

            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionGroup>
    </Card>
  );
}
