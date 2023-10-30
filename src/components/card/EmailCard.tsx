import React from 'react';
import { Card, CardContent, Input, Typography } from '@mui/joy';
import { Email } from '@mui/icons-material';
import { CopyButton } from '../CopyButton.tsx';

interface EmailCardProps {
  description: React.ReactNode;
  email: string;
}

export const EmailCard: React.FC<EmailCardProps> = ({ description, email }) => {
  return (
    <Card>
      <Typography level="title-lg">Contact</Typography>
      <CardContent>
        <Typography sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Input value={email} readOnly startDecorator={<Email />} endDecorator={<CopyButton content={email} />} />
      </CardContent>
    </Card>
  );
};
