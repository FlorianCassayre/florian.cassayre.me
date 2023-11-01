import React from 'react';
import { Card, Chip, Typography } from '@mui/joy';
import { SoftLink } from '../../components/SoftLink';

export const CodeGolfCardContent: React.FC = () => (
  <Card>
    <Typography level="title-lg">
      <SoftLink href="#">Code Golf</SoftLink>
    </Typography>
    <Typography>
      My entries are mainly targeting the languages <Chip component="span">python</Chip> and <Chip component="span">brainfuck</Chip>.
    </Typography>
  </Card>
);
