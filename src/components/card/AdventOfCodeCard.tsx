import React, { Fragment } from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/joy';
import { SoftLink } from '../SoftLink.tsx';

interface AdventOfCodeCardProps {

}

export const AdventOfCodeCard: React.FC<AdventOfCodeCardProps> = () => {
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017];
  return (
    <Card>
      <Typography level="title-lg">
        <SoftLink href="#">Advent of Code</SoftLink>
      </Typography>
      <CardContent>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {years.map((year, i) => (
            <Fragment key={year}>
              <SoftLink href="#">{year}</SoftLink>
              {i < years.length - 1 ? '·' : null}
            </Fragment>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
