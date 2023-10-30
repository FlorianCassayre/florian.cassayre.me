import React from 'react';
import { Box, Card, CardContent } from '@mui/joy';
import { FormatQuote } from '@mui/icons-material';

interface QuoteCardProps {
  children: React.ReactNode;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ children }) => {
  return (
    <Card>
      <CardContent>
        <Box>
          <FormatQuote sx={{ transform: 'rotate(180deg)', mr: 1, verticalAlign: 'bottom' }} />
          {children}
          <FormatQuote sx={{ ml: 1, verticalAlign: 'bottom' }} />
        </Box>
      </CardContent>
    </Card>
  );
};
