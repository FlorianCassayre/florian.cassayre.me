import React from 'react';

import { Stack } from '@mui/joy';

import { SocialChip } from '../SocialChip';

type SocialItem = Parameters<typeof SocialChip>[0];

interface SocialChipsProps {
  items: SocialItem[];
}

export const SocialChips: React.FC<SocialChipsProps> = ({ items }) => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
      {items.map((item, i) => (
        <SocialChip key={i} {...item} />
      ))}
    </Stack>
  );
};
