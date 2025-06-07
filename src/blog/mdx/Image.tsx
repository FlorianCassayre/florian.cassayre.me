import React from 'react';

import { Box } from '@mui/joy';

type ImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export const Image: React.FC<ImageProps> = ({ ...props }) => {
  return (
    <Box component="span" sx={{ display: 'block', textAlign: 'center' }}>
      <img {...props} style={{ maxHeight: '50vh', maxWidth: '100%', borderRadius: '8px', ...props.style }} />
    </Box>
  );
};
