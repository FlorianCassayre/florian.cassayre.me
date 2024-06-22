import React from 'react';

import { FormatQuote } from '@mui/icons-material';
import { Box, Card, CardContent } from '@mui/joy';

interface QuoteCardProps {
  children: React.ReactNode;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ children }) => {
  return (
    <Card>
      <CardContent>
        <Box>
          <FormatQuote color="action" sx={{ transform: 'rotate(180deg)', mr: 1, verticalAlign: 'bottom' }} />
          {children}
          <FormatQuote color="action" sx={{ ml: 1, verticalAlign: 'bottom' }} />
        </Box>
      </CardContent>
    </Card>
  );
};
