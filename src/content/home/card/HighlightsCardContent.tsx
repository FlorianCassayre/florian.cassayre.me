import React from 'react';
import { HighlightsCard } from '../../../components/card/HighlightsCard';
import { List, ListItem, styled, Typography } from '@mui/joy';
import { SoftLink } from '../../../components/SoftLink';
import { Campaign, EmojiEvents } from '@mui/icons-material';

const DenseList = styled(List)(() => ({
  '--ListItem-paddingY': 0,
  '--ListItem-minHeight': 'auto',
  '--ListDivider-gap': 0,
}));

export const HighlightsCardContent: React.FC = () => {
  return (
    <HighlightsCard
      highlights={[
        {
          title: 'Competitions and awards',
          icon: EmojiEvents,
          content: (
            <>
              <DenseList marker="disc">
                <ListItem><SoftLink href="https://swerc.eu/2022/">SWERC 2022</SoftLink>: qualified among 50,000 participants, ranked 35<sup>th</sup></ListItem>
                <ListItem><SoftLink href="https://ieeextreme.org/">IEEEXtreme 15.0 2021</SoftLink>: ranked 56<sup>th</sup> among 5,500 teams</ListItem>
                <ListItem><SoftLink href="https://www.bloomberg.com/company/stories/get-ready-for-bloombergs-summer-of-puzzles-2021/">BPuzzled 2021</SoftLink>: qualified for the final</ListItem>
                <ListItem><SoftLink href="https://2020.lauzhack.com/">LauzHack 2020</SoftLink>: <em>AdMotiv</em>, second place winners</ListItem>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <ListItem><SoftLink href="https://2019.lauzhack.com/">LauzHack 2019</SoftLink>: <em>Sentiment-U</em>, organizers' favourite hack, Logitech prize</ListItem>
              </DenseList>
              <Typography>
                Honorable mentions:
              </Typography>
              <DenseList marker="disc">
                <ListItem><SoftLink href="https://www.youtube.com/live/yfXu9_Za_mg?t=2003">Hash Code 2022</SoftLink>: fastest submission of the competition</ListItem>
              </DenseList>
            </>
          ),
        },
        {
          title: 'They mention my work',
          icon: Campaign,
          content: (
            <>
              <DenseList marker="disc">
                <ListItem>
                  La Revue française de Généalogie
                  <DenseList marker="disc">
                    <ListItem>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <SoftLink href="https://www.rfgenealogie.com/magazine/248">"Mémoire des lieux" (n°248), p. 31</SoftLink>
                    </ListItem>
                    <ListItem>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <SoftLink href="https://www.rfgenealogie.com/le-magazine/247-les-logiciels-et-applications-made-in-france">"Les logiciels et applications Made in France" (n°247), p. 50</SoftLink>
                    </ListItem>
                    <ListItem>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <SoftLink href="https://www.rfgenealogie.com/le-magazine/244-corse-les-archives-a-consulter">"Corse : les archives à consulter" (n°244), p. 58</SoftLink>
                    </ListItem>
                  </DenseList>
                </ListItem>
                <ListItem>
                  <SoftLink href="https://www.paris.fr/pages/vos-demarches-administratives-au-cimetiere-du-pere-lachaise-17511">Ville de Paris - Cimetière du Père-Lachaise</SoftLink>
                </ListItem>
              </DenseList>
            </>
          ),
        }
      ]}
    />
  );
};
