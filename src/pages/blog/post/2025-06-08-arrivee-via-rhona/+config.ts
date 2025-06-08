import { PostConfig } from '../../../../blog/PostConfig';
import { Locale } from '../../../../i18n/Locale';

export const config = {
  post: {
    title: "ViaRhôna : retour d'expérience",
    description: 'Rétrospective de mon voyage sur la ViaRhôna.',
    locale: Locale.French,
    keywords: ['personal', 'cycling'],
    image: '/articles/viarhona/sea.jpg',
  },
} satisfies PostConfig;
