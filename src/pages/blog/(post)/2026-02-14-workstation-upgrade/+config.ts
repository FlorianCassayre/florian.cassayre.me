import { PostConfig } from '../../../../blog/PostConfig';
import { Locale } from '../../../../i18n/Locale';

export const config = {
  post: {
    title: 'Workstation upgrade',
    description: 'Upgrading my hardware.',
    locale: Locale.English,
    keywords: ['personal', 'technical'],
    image: '/articles/pc/pc-build.jpg',
  },
} satisfies PostConfig;
