import React, { Fragment } from 'react';

import { Card, CardContent, Stack, Typography } from '@mui/joy';

import { SoftLink } from '../SoftLink';

interface AdventOfCodeCardProps {
  description: React.ReactNode;
  years: number[];
  repository: (year: number) => string;
}

export const AdventOfCodeCard: React.FC<AdventOfCodeCardProps> = ({ description, years, repository }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Typography level="title-lg" fontWeight="sm">
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
    </Card>
  );
};
