import React from 'react';
import { AspectRatio, Card, CardContent, CardOverflow, Chip, ChipProps, Divider, Stack, Typography } from '@mui/joy';
import { IconType } from 'react-icons';

type Technology = string | {
  name: string;
  icon: IconType;
  color?: ChipProps['color'];
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: Technology[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies }) => {
  const renderIcon = (Icon: IconType) => <Icon />;
  return (
    <Card variant="outlined">
      <CardOverflow>
        <AspectRatio ratio="2">
          {/* <img/> */}
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{title}</Typography>
        <Typography level="body-sm">{description}</Typography>
        {!!technologies?.length && (
          <Stack direction="row" spacing={1} flexWrap="wrap">
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
        <CardContent orientation="horizontal">
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            6.3k views
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            1 hour ago
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};
