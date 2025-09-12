import { Card, styled } from '@mui/joy';

export const CardBase = styled(Card)(({ theme }) => ({
  boxShadow: theme.shadow.lg,
}));
