import { PostKeyword } from './PostKeyword';
import { Locale } from '../i18n/Locale';

export interface PostConfig {
  post: {
    title: string;
    description: string;
    locale: Locale | null;
    keywords?: PostKeyword[];
  };
}
