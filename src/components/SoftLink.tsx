import { StyledComponent } from '@emotion/styled';
import { Link, styled } from '@mui/joy';

export const SoftLink: StyledComponent<Parameters<typeof Link>[0]> = styled(Link)<Parameters<typeof Link>[0]>(() => ({
  textDecorationLine: 'underline',
  textDecorationStyle: 'dotted',
  '&:hover': {
    textDecorationStyle: 'solid',
  },
}));
