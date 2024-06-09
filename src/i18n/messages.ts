import { Locale } from './Locale';
import messagesEn from './strings/en.json';
import messagesFr from './strings/fr.json';
import { DEFAULT_LOCALE } from './utils';

const RAW_MESSAGES = {
  [Locale.English]: messagesEn,
  [Locale.French]: messagesFr,
} satisfies Record<Locale, Record<string, string>>;

type I18nMessagesIdsFor<K extends Locale> = keyof (typeof RAW_MESSAGES)[K]

export type I18nAllMessageIds = I18nMessagesIdsFor<Locale>;
export type I18nMessageIds = I18nMessagesIdsFor<typeof DEFAULT_LOCALE>;

export const MESSAGES =
  Object.fromEntries(Object.entries(RAW_MESSAGES)
    .map(([locale, messages]) =>
      [locale as Locale, { ...RAW_MESSAGES[DEFAULT_LOCALE], ...messages } satisfies Record<I18nMessageIds, string>]
    )) as Record<Locale, Record<I18nMessageIds, string>>;
