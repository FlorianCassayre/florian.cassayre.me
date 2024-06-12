import { I18nMessageIds } from './messages';
import { Locale } from './Locale';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: I18nMessageIds;
    }
    interface IntlConfig {
      locale: Locale;
    }
    interface Formats {
    }
  }
}
