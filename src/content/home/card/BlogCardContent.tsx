import React from 'react';

import { useIntl } from 'react-intl';

import { BlogCard } from '../../../components/card/BlogCard';

export const BlogCardContent: React.FC = () => {
  const { $t } = useIntl();
  return <BlogCard description={$t({ id: 'home.social.blog.description' })} />;
};
