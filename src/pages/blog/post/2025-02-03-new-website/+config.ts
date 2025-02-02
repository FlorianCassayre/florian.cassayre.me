import { PostConfig } from '../../../../blog/PostConfig';
import { Locale } from '../../../../i18n/Locale';

export const config = {
  post: {
    title: 'New website',
    description: 'Announcing my new website.',
    locale: Locale.English,
    keywords: ['personal', 'technical'],
  },
} satisfies PostConfig;
