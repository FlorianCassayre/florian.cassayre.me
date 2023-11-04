import { Avatar, Box, styled } from '@mui/joy';
import React from 'react';

const StyledBox = styled(Box)(() => ({
  cursor: 'pointer',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.5s',
  '&:hover': {
    transform: 'rotateY(180deg)',
    transitionDelay: '0.1s',
  },
}));

const StyledAvatar = styled(Avatar)(() => ({
  '--Avatar-size': '100px',
}));

interface ProfileLogoProps {
  image1: string;
  image2: string;
  alt: string;
}

export const ProfileLogo: React.FC<ProfileLogoProps> = ({ image1, image2, alt }) => {
  return (
    <StyledBox>
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
  );
};
