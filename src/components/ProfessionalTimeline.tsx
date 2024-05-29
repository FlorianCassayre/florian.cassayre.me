import React, { useState } from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from '@mui/lab';
import { Box, Button, Chip, Typography } from '@mui/joy';
import { grey } from '@mui/material/colors';
import { Collapse, Fade, useMediaQuery } from '@mui/material';
import { Add } from '@mui/icons-material';

interface TimelineEventInstitution {
  name: string;
  fullname: string;
  logo: string;
  logoScale?: number;
}

interface TimelineEvent {
  date: string;
  institution: TimelineEventInstitution;
  title: React.ReactNode;
  description?: React.ReactNode;
  work: boolean;
}

interface ProfessionalTimelineProps {
  events: TimelineEvent[];
}

export const ProfessionalTimelineStatic: React.FC<ProfessionalTimelineProps> = ({ events }) => {
  // TODO problems with SSR (obviously)
  const isDesktop = useMediaQuery('(min-width:600px)', { defaultMatches: true });
  const computeSize = (scale: number | undefined): string => `${(scale ?? 1) * 48}px`;
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: isDesktop ? undefined : {
          flex: 0.2,
        },
      }}
    >
      {events.map(({ date, institution, title }, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent sx={{ py: { sm: 4 }, maxWidth: '34vw', ml: 'auto', mr: 0 }}>
            <Chip variant="outlined" sx={{ mb: 0.5 }}>{date}</Chip>
            <Typography level="title-sm" sx={{ color: grey[800] }}>
              <Typography sx={{ display: { xs: 'none', sm: 'inline' } }}>
                {institution.fullname}
              </Typography>
              <Typography sx={{ display: { sm: 'none' } }}>
                {institution.name}
              </Typography>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: { sm: 'white' } }}>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, borderRadius: '100%', width: '48px', height: '48px', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={institution.logo} alt={institution.fullname} width={computeSize(institution.logoScale)} height={computeSize(institution.logoScale)}  style={{ pointerEvents: 'none', userSelect: 'none' }} />
                </Box>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: { sm: 4 }, maxWidth: '45vw' }}>
            <Typography>
              {title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export const ProfessionalTimeline: React.FC<ProfessionalTimelineProps> = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <Box sx={{ position: 'relative' }}>
        <Collapse in={expanded} collapsedSize={175}>
          <ProfessionalTimelineStatic {...props} />
        </Collapse>
        <Fade in={!expanded} appear={false}>
          <Box sx={{ width: '100%', height: '100px', position: 'absolute', bottom: 0, background: 'linear-gradient(0deg, #f0f4f8 0%, rgba(0,0,0,0) 100%)' }} />
        </Fade>
      </Box>
      <Collapse in={!expanded} unmountOnExit>
        <Button variant="plain" startDecorator={<Add />} onClick={() => setExpanded(true)} sx={{ mt: 2, width: '100%' }}>View more</Button>
      </Collapse>
    </Box>
  )
}
