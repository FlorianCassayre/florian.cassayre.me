import React from 'react';
import { styled } from '@mui/joy';

const Keyframes = 'blink';

interface GlitchedTextProps {
  children: React.ReactNode;
}

export const GlitchedText: React.FC<GlitchedTextProps> = styled('span')(({ theme }) => ({
  background: `linear-gradient(-45deg, ${theme.palette.neutral[900]}, ${theme.palette.neutral[400]})`,
  backgroundSize: '400% 400%',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  [`@keyframes ${Keyframes}`]: {
    '0%': {
      backgroundPosition: '100% 50%',
    },
    '50%': {
      backgroundPosition: '0% 50%',
    },
    '100%': {
      backgroundPosition: '100% 50%',
    }
  },
  animation: `${Keyframes} 3s infinite ease`,
}));
