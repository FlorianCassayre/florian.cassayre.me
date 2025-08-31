import { PostConfig } from '../../../../blog/PostConfig';
import { Locale } from '../../../../i18n/Locale';

export const config = {
  post: {
    title: 'Career update',
    description: 'Today marks my first day in a new role at CERN.',
    locale: Locale.English,
    keywords: ['professional', 'technical'],
    image: '/projects/cern-lhc.jpg',
  },
} satisfies PostConfig;
