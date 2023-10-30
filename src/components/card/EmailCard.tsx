import React from 'react';
import { Card, CardContent, Input, Typography, IconButton } from '@mui/joy';
import { ContentCopy, Email } from '@mui/icons-material';

interface EmailCardProps {

}

export const EmailCard: React.FC<EmailCardProps> = () => {
  const email = 'florian@cassayre.me';
  return (
    <Card>
      <Typography level="title-lg">Contact</Typography>
      <CardContent>
        <Typography sx={{ mb: 1 }}>
          Don't hesitate to drop me a message at:
        </Typography>
        <Input value={email} readOnly startDecorator={<Email />} endDecorator={<IconButton><ContentCopy /></IconButton>} />
      </CardContent>
    </Card>
  );
};
