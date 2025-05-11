import { PostConfig } from '../../../../blog/PostConfig';
import { Locale } from '../../../../i18n/Locale';

export const config = {
  post: {
    title: 'ViaRhôna : le projet',
    description: 'Voyage sur un itinéraire cyclable le long du Rhône.',
    locale: Locale.French,
    keywords: ['personal', 'cycling'],
  },
} satisfies PostConfig;
