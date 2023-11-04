import React from 'react';
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
import { Box, Chip, Typography } from '@mui/joy';
import { grey } from '@mui/material/colors';
import { useMediaQuery } from '@mui/material';

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

export const ProfessionalTimeline: React.FC<ProfessionalTimelineProps> = ({ events }) => {
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
          <TimelineOppositeContent sx={{ py: { sm: 4 } }}>
            <Chip variant="outlined" sx={{ mb: 0.5 }}>{date}</Chip>
            <Typography level="title-sm" sx={{ color: grey[800] }}>
              {isDesktop ? institution.fullname : institution.name}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: { sm: 'white' } }}>
              {isDesktop && (
                <Box sx={{ borderRadius: '100%', width: '48px', height: '48px', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={institution.logo} alt={institution.fullname} width={computeSize(institution.logoScale)} height={computeSize(institution.logoScale)} />
                </Box>
              )}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: { sm: 4 } }}>
            <Typography>
              {title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
