// Taken from https://github.com/HPouyanmehr/mui-markdown/blob/main/package/src/components/InlineCode.tsx

import React, { FC, ReactNode } from 'react';

import { useTheme } from '@mui/joy';

export interface InlineCodeProps {
  children?: ReactNode;
}

export const InlineCode: FC<InlineCodeProps> = props => {
  // Props
  const { children } = props;
  const theme = useTheme();

  return (
    <code
      style={{
        backgroundColor: theme.palette.background.level1,
        borderRadius: '0.25rem',
      }}
    >
      {children}
    </code>
  );
};
