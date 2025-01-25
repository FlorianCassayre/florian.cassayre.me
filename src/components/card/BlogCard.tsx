import React from 'react';

import { Launch } from '@mui/icons-material';
import { Button, Card, CardContent, Typography } from '@mui/joy';
import { FormattedMessage } from 'react-intl';

import { useUrlGenerator } from '../../route/useUrlGenerator';

interface BlogCardProps {
  description: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ description }) => {
  const urlGenerator = useUrlGenerator();
  return (
    <Card>
      <Typography level="title-lg">
        <FormattedMessage id="home.social.blog.title" />
      </Typography>
      <CardContent>
        {description}
        <Button
          variant="plain"
          startDecorator={<Launch />}
          component="a"
          href={urlGenerator('/blog')}
          sx={{ mt: 1, width: '100%' }}
        >
          <FormattedMessage id="home.social.blog.go" />
        </Button>
      </CardContent>
    </Card>
  );
};
