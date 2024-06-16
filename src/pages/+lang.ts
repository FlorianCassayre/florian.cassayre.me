import { PageContext } from '../renderer/types';
import { DEFAULT_LOCALE } from '../i18n/utils';

export default (pageContext: PageContext): string => {
  return pageContext.locale ?? DEFAULT_LOCALE;
};
