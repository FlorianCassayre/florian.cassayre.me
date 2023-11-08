import React from 'react';
import { Card, CardContent, Input, Typography } from '@mui/joy';
import { Email } from '@mui/icons-material';
import { CopyButton } from '../CopyButton';

interface EmailCardProps {
  description: React.ReactNode;
  email: string;
  smalltext: string;
}

export const EmailCard: React.FC<EmailCardProps> = ({ description, email, smalltext }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Typography level="title-lg" fontWeight="sm">Contact</Typography>
      <CardContent>
        <Typography sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Input value={email} readOnly startDecorator={<Email color="action" />} endDecorator={<CopyButton content={email} />} />
        <Typography level="body-xs">
          {smalltext}
        </Typography>
      </CardContent>
    </Card>
  );
};
