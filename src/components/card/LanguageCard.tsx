import React from 'react';
import { Card, CardContent, Stack, SvgIcon, Typography } from '@mui/joy';
import { DE, FlagComponent, FR, GB, SE } from 'country-flag-icons/react/3x2';

interface LanguageCardProps {

}

export const LanguageCard: React.FC<LanguageCardProps> = () => {
  interface Language {
    name: string;
    flag: FlagComponent;
    level: string;
  }

  const languages: Language[] = [
    { name: 'English', flag: GB, level: 'Proficient' },
    { name: 'French', flag: FR, level: 'Native' },
    { name: 'German', flag: DE, level: 'Experienced' },
    { name: 'Swedish', flag: SE, level: 'Basics' },
  ];

  return (
    <Card>
      <Typography level="title-lg">
        Languages
      </Typography>
      <CardContent>
        {languages.map(({ name, flag: Flag, level }, i) => (
          <Stack key={i} direction="row" spacing={1}>
            <SvgIcon>
              <Flag />
            </SvgIcon>
            <Typography>
              {name}
            </Typography>:{' '}
            {level}
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
};
