import React from 'react';
import { HighlightsCard } from '../../../components/card/HighlightsCard';
import { List, ListItem, styled, Typography } from '@mui/joy';
import { SoftLink } from '../../../components/SoftLink';

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
          )
        }
      ]}
    />
  );
};
