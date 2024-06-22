import { Locale } from './Locale';
import { I18nMessageIds } from './messages';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: I18nMessageIds;
    }
    interface IntlConfig {
      locale: Locale;
    }
    interface Formats {}
  }
}
