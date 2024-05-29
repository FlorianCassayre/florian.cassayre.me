import { Locale } from './Locale';
import messagesEn from './strings/en.json';
import messagesFr from './strings/fr.json';

export const MESSAGES = {
  [Locale.English]: messagesEn,
  [Locale.French]: messagesFr,
};

export type I18nMessageIds = keyof (typeof MESSAGES)[keyof typeof MESSAGES];
