import React from 'react';

import { FormatQuote } from '@mui/icons-material';
import { Box, CardContent, useTheme } from '@mui/joy';

import { CardBase } from './CardBase';

interface QuoteCardProps {
  children: React.ReactNode;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <CardBase sx={{ backgroundColor: theme.palette.background.body }}>
      <CardContent>
        <Box>
          <FormatQuote color="action" sx={{ transform: 'rotate(180deg)', mr: 1, verticalAlign: 'bottom' }} />
          {children}
          <FormatQuote color="action" sx={{ ml: 1, verticalAlign: 'bottom' }} />
        </Box>
      </CardContent>
    </CardBase>
  );
};
