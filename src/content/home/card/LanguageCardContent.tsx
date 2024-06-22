import React from 'react';

import { DE, FR, GB, SE } from 'country-flag-icons/react/3x2';
import { useIntl } from 'react-intl';

import { LanguageCard } from '../../../components/card/LanguageCard';
import { I18nMessageIds } from '../../../i18n/messages';

const LanguageKey = 'language';

const LanguageEnglish: I18nMessageIds = `${LanguageKey}.english`;
const LanguageFrench: I18nMessageIds = `${LanguageKey}.french`;
const LanguageGerman: I18nMessageIds = `${LanguageKey}.german`;
const LanguageSwedish: I18nMessageIds = `${LanguageKey}.swedish`;

const LevelKey = 'home.social.languages.level';

const LevelProficient: I18nMessageIds = `${LevelKey}.proficient`;
const LevelNative: I18nMessageIds = `${LevelKey}.native`;
const LevelExperienced: I18nMessageIds = `${LevelKey}.experienced`;
const LevelBasics: I18nMessageIds = `${LevelKey}.basics`;

export const LanguageCardContent: React.FC = () => {
  const { $t } = useIntl();
  return (
    <LanguageCard
      languages={[
        { name: $t({ id: LanguageEnglish }), flag: GB, level: $t({ id: LevelProficient }) },
        { name: $t({ id: LanguageFrench }), flag: FR, level: $t({ id: LevelNative }) },
        { name: $t({ id: LanguageGerman }), flag: DE, level: $t({ id: LevelExperienced }) },
        { name: $t({ id: LanguageSwedish }), flag: SE, level: $t({ id: LevelBasics }) },
      ]}
    />
  );
};
