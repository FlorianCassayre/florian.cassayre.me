import { PostConfig } from '../../../../blog/PostConfig';
import { Locale } from '../../../../i18n/Locale';

export const config = {
  post: {
    title: 'Test article',
    description: 'This is a test article to demonstrate the capabilities of the blog.',
    locale: Locale.English,
    keywords: ['personal', 'technical'],
  },
} satisfies PostConfig;
