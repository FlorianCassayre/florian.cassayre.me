import React from 'react';

import { Stack, Typography } from '@mui/joy';

import { ProfileLogo } from '../../components/ProfileLogo';
import { AUTHOR } from '../../config';

export const ProfileContent: React.FC = () => {
  return (
    <Stack direction="column" spacing={1} alignItems="center" sx={{ mt: 2, mb: 2 }}>
      <ProfileLogo image1="/profile.jpg" image2="/profile_infinity.png" alt={AUTHOR} />
      <Typography level="h1" fontWeight="sm" fontFamily="Bitter">
        {AUTHOR}
      </Typography>
      <Typography level="title-lg" fontWeight={400}>
        \<em>flɔ.ʁi.ɑ̃ ka.sɛʁ</em>\
      </Typography>
    </Stack>
  );
};
