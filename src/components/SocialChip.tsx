import React from 'react';

import { Chip } from '@mui/joy';
import SvgIcon from '@mui/material/SvgIcon';

interface SocialChipProps {
  name: string;
  icon: typeof SvgIcon;
  color?: Required<Parameters<typeof Chip>[0]['color']>;
  url: string;
}

export const SocialChip: React.FC<SocialChipProps> = ({ name, icon: Icon, color, url }) => {
  // Note that the `onClick` is needed to enable the hovering animation
  return (
    <Chip
      component="a"
      href={url}
      target="_blank"
      rel="noopener"
      variant="outlined"
      startDecorator={<Icon color="action" />}
      color={color}
      size="lg"
      onClick={() => {}}
      sx={{
        '--Chip-minHeight': '48px',
      }}
    >
      {name}
    </Chip>
  );
};
