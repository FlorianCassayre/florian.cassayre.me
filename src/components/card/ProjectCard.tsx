import React from 'react';
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Chip,
  ChipProps,
  Divider,
  IconButton,
  Stack, Tooltip,
  Typography,
} from '@mui/joy';
import { IconType } from 'react-icons';
import { GitHub, Launch, VisibilityOff } from '@mui/icons-material';

type Technology = string | {
  name: string;
  icon: IconType;
  color?: ChipProps['color'];
};

interface ProjectCardProps {
  image?: string;
  title: string;
  description: string;
  technologies?: Technology[];
  status: string;
  homepage?: string;
  github?: string;
  pro?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, technologies, status, homepage, github, pro }) => {
  const renderIcon = (Icon: IconType) => <Icon />;
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          {!!image && (
            <img src={image} alt="Illustration" />
          )}
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Typography level="title-md">{title}</Typography>
          {!!pro && (
            <Tooltip title="This project is part of my current job" sx={{ cursor: 'help' }}>
              <Chip variant="soft" color="primary">Pro</Chip>
            </Tooltip>
          )}
        </Stack>
        <Typography level="body-sm">{description}</Typography>
        {!!technologies?.length && (
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
            {(technologies ?? []).map((technology, i) => (
              <Chip
                key={i}
                variant="outlined"
                startDecorator={typeof technology === 'string' ? undefined : renderIcon(technology.icon)}
                color={typeof technology === 'string' ? undefined : technology.color}
              >
                {typeof technology === 'string' ? technology : technology.name}
              </Chip>
            ))}
          </Stack>
        )}
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal" sx={{ py: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
              {status}
            </Typography>
            <Stack direction="row" spacing={0.5}>
              {github ? (
                <IconButton component="a" href={github} size="sm">
                  <GitHub />
                </IconButton>
              ) : (
                <Tooltip title="Closed-source">
                  <VisibilityOff />
                </Tooltip>
              )}
              {!!homepage && (
                <IconButton component="a" href={homepage} size="sm">
                  <Launch />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};
