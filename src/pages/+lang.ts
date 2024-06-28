import { DEFAULT_LOCALE } from '../i18n/utils';
import { PageContext } from '../renderer/types';

export const lang = (pageContext: PageContext): string => {
  return pageContext.locale ?? DEFAULT_LOCALE;
};
