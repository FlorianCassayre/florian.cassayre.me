import { I18nMessageIds } from './messages';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: I18nMessageIds;
    }
    interface IntlConfig {
    }
    interface Formats {
    }
  }
}
