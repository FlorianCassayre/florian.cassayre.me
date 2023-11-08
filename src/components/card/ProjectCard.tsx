import React from 'react';
import {
  AspectRatio, Avatar, Box,
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
import { FiberManualRecord, GitHub, Launch, VisibilityOff } from '@mui/icons-material';
import { IconType } from '@react-icons/all-files';

type Technology = string | {
  name: string;
  icon: IconType;
  color?: ChipProps['color'];
};

interface ProjectCardProps {
  image?: string;
  logo?: string;
  title: string;
  description: string;
  technologies?: Technology[];
  status: boolean | null;
  statusText: string;
  homepage?: string;
  github?: string;
  pro?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, logo, title, description, technologies, status, statusText, homepage, github, pro }) => {
  const renderIcon = (Icon: IconType) => <Icon />;
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardOverflow sx={{ mb: logo ? { xs: 3, sm: 2 } : undefined }}>
        <AspectRatio ratio="2">
          {!!image && (
            <img src={image} alt="Illustration" />
          )}
        </AspectRatio>
        {!!logo && (
          <Box sx={{ position: 'relative', mx: 'auto' }}>
            <Box sx={{ p: 1, position: 'absolute', transform: 'translate(-50%, -50%)', backgroundColor: 'white', borderRadius: '100%', border: '2px solid #f0f4f8', height: '68px', filter: 'drop-shadow(0px 2px 4px #00000030)' }}>
              <img src={logo} alt="Logo" width="48px" height="48px" />
            </Box>
          </Box>
        )}
      </CardOverflow>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
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
            <Stack direction="row" spacing={0.5} alignItems="center">
              <FiberManualRecord color={status === true ? 'success' : status === false ? 'error' : 'warning'} sx={{ fontSize: 16 }} />
              <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                {statusText}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              {github ? (
                <IconButton component="a" href={github} size="sm">
                  <GitHub color="action" />
                </IconButton>
              ) : (
                <Tooltip title="Closed-source">
                  <span>
                    <IconButton disabled size="sm">
                      <VisibilityOff />
                    </IconButton>
                  </span>
                </Tooltip>
              )}
              {!!homepage && (
                <IconButton component="a" href={homepage} size="sm">
                  <Launch color="action" />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};
