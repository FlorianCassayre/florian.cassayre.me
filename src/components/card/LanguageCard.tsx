import React from 'react';

import { Box, Card, CardContent, Chip, Stack, SvgIcon, Table, Typography } from '@mui/joy';
import { FlagComponent } from 'country-flag-icons/react/3x2';
import { FormattedMessage } from 'react-intl';

interface Language {
  name: string;
  flag: FlagComponent;
  level: string;
}

interface LanguageCardProps {
  languages: Language[];
}

export const LanguageCard: React.FC<LanguageCardProps> = ({ languages }) => {
  return (
    <Card>
      <Typography level="title-lg">
        <FormattedMessage id="home.social.languages.title" />
      </Typography>
      <CardContent>
        <Table>
          <tbody>
            {languages.map(({ name, flag: Flag, level }, i) => (
              <tr key={i}>
                <td>
                  <Stack direction="row" spacing={1}>
                    <SvgIcon>
                      <Flag />
                    </SvgIcon>
                    <Typography>{name}</Typography>
                  </Stack>
                </td>
                <td>
                  <Box textAlign="right">
                    <Chip variant="outlined">{level}</Chip>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardContent>
    </Card>
  );
};
