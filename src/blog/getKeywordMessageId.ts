import { PostKeyword } from './PostKeyword';
import { I18nMessageIds } from '../i18n/messages';

export const getKeywordMessageId = (keyword: PostKeyword): I18nMessageIds => `blog.keywords.list.${keyword}`;
