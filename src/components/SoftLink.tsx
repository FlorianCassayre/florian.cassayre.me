import { Link, styled } from '@mui/joy';

export const SoftLink = styled(Link)<Parameters<typeof Link>[0]>(() => ({
  '&:hover': {
    textDecorationStyle: 'dotted'
  }
}));
