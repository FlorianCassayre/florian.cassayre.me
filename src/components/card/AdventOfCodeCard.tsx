import React, { Fragment } from 'react';

import { CardContent, Stack, Typography } from '@mui/joy';

import { SoftLink } from '../SoftLink';
import { CardBase } from './CardBase';

interface AdventOfCodeCardProps {
  description: React.ReactNode;
  years: number[];
  repository: (year: number) => string;
}

export const AdventOfCodeCard: React.FC<AdventOfCodeCardProps> = ({ description, years, repository }) => {
  return (
    <CardBase sx={{ height: '100%' }}>
      <Typography level="title-lg">
        <SoftLink href="https://adventofcode.com" target="_blank" rel="noopener">
          Advent of Code
        </SoftLink>
      </Typography>
      <CardContent>
        <Typography sx={{ mb: 1 }}>{description}</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap justifyContent="center">
          {years.map((year, i) => (
            <Fragment key={year}>
              <SoftLink href={repository(year)} target="_blank" rel="noopener">
                {year}
              </SoftLink>
              {i < years.length - 1 ? '·' : null}
            </Fragment>
          ))}
        </Stack>
      </CardContent>
    </CardBase>
  );
};
