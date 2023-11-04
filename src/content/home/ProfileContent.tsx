import React from 'react';
import { ProfileLogo } from '../../components/ProfileLogo';
import { Stack, Typography } from '@mui/joy';

export const ProfileContent: React.FC = () => {
  return (
    <Stack direction="column" spacing={1} alignItems="center" sx={{ mt: 2, mb: 2 }}>
      <ProfileLogo
        image1="/profile.jpg"
        image2="/profile_infinity.png"
        alt="Florian Cassayre"
      />
      <Typography level="h1" fontWeight="sm" fontFamily="Bitter">
        Florian Cassayre
      </Typography>
      <Typography level="title-lg" fontWeight="sm">
        \<em>flɔ.ʁi.ɑ̃ ka.sɛʁ</em>\
      </Typography>
    </Stack>
  );
};
