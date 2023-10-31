import { Avatar, Box, styled } from '@mui/joy';

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

export const ProfileLogo = () => {
  return (
    <StyledBox>
      <StyledAvatar
        alt="Florian Cassayre"
        src="/profile_infinity.png"
        sx={{
          position: 'absolute',
          transform: 'scale(-1, 1)',
        }}
      />
      <StyledAvatar
        alt="Florian Cassayre"
        src="/profile.jpg"
        sx={{
          backfaceVisibility: 'hidden',
        }}
      />
    </StyledBox>
  );
};
