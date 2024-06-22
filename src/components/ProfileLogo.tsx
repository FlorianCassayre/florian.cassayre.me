import React, { useState } from 'react';

import { Avatar, Box, styled } from '@mui/joy';

const StyledBox = styled(Box)({
  transformStyle: 'preserve-3d',
  transition: 'transform 0.5s',
  transitionDelay: '0.1s',
});

const StyledAvatar = styled(Avatar)({
  '--Avatar-size': '100px',
  pointerEvents: 'none',
});

interface ProfileLogoProps {
  image1: string;
  image2: string;
  alt: string;
}

export const ProfileLogo: React.FC<ProfileLogoProps> = ({ image1, image2, alt }) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{ cursor: 'pointer' }}>
      <StyledBox sx={{ transform: hover ? 'rotateY(180deg)' : undefined }}>
        <StyledAvatar
          alt={alt}
          src={image2}
          sx={{
            position: 'absolute',
            transform: 'scale(-1, 1)',
          }}
        />
        <StyledAvatar
          alt={alt}
          src={image1}
          sx={{
            backfaceVisibility: 'hidden',
          }}
        />
      </StyledBox>
    </Box>
  );
};
