import { I18nMessageIds } from '../i18n/messages';

export type PostKeyword = keyof {
  [K in I18nMessageIds as K extends `blog.keywords.list.${infer W}` ? W : never]: unknown;
};
