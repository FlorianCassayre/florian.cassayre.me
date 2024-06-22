import React from 'react';

import { Divider, Stack, Typography, styled, useTheme } from '@mui/joy';
import SvgIcon from '@mui/material/SvgIcon';

const StyledDivider = styled(Divider)(() => {
  const originalColor = 'rgba(99, 107, 116, 0.2)';
  return {
    '--Divider-childPosition': '50%',
    '&::before': {
      background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${originalColor} 100%)`,
    },
    '&::after': {
      background: `linear-gradient(90deg, ${originalColor} 0%, rgba(0,0,0,0) 100%)`,
    },
  };
});

interface CategoryHeadingProps {
  icon: typeof SvgIcon;
  children: React.ReactNode;
}

export const CategoryHeading: React.FC<CategoryHeadingProps> = ({ children, icon: Icon }) => {
  const theme = useTheme();
  return (
    <Stack direction="column" spacing={0.5} alignItems="center" sx={{ mt: { xs: 2, sm: 4 }, mb: { xs: 1, sm: 2 } }}>
      <Icon sx={{ color: theme.palette.neutral[500], fontSize: 32 }} />
      <StyledDivider>
        <Typography level="h2" fontSize="xl" sx={{ fontWeight: 1 }}>
          {children}
        </Typography>
      </StyledDivider>
    </Stack>
  );
};
