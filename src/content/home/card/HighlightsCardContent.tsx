import React from 'react';

import { Campaign, EmojiEvents, Mic } from '@mui/icons-material';
import { List, ListItem, Typography, styled } from '@mui/joy';
import { FormattedMessage, useIntl } from 'react-intl';

import { HighlightsCard } from '../../../components/card/HighlightsCard';
import { SoftLink } from '../../../components/SoftLink';

const Key = 'home.highlights';

const DenseList = styled(List)(() => ({
  '--ListItem-paddingY': 0,
  '--ListItem-minHeight': 'auto',
  '--ListDivider-gap': 0,
}));

export const HighlightsCardContent: React.FC = () => {
  const { $t } = useIntl();
  return (
    <HighlightsCard
      highlights={[
        {
          title: $t({ id: `${Key}.talks.title` }),
          icon: Mic,
          content: (
            <DenseList marker="disc">
              <ListItem>
                <FormattedMessage
                  id="common.labelColonValue"
                  values={{
                    label: (
                      <>
                        <SoftLink href="https://indico.cern.ch/event/1580741/" target="_blank" rel="noopener">
                          CERN Lightning Talk #27
                        </SoftLink>{' '}
                        (07/11/2025)
                      </>
                    ),
                    value: (
                      <SoftLink
                        href="https://github.com/FlorianCassayre/ITLT27-scala-metaprogramming"
                        target="_blank"
                        rel="noopener"
                      >
                        Metaprogramming in Scala
                      </SoftLink>
                    ),
                  }}
                />
              </ListItem>
              <ListItem>
                <FormattedMessage
                  id="common.labelColonValue"
                  values={{
                    label: (
                      <>
                        <SoftLink href="https://clic.epfl.ch/icbd" target="_blank" rel="noopener">
                          EPFL IC Boost Day #7
                        </SoftLink>{' '}
                        (11/03/2026)
                      </>
                    ),
                    value: (
                      <SoftLink
                        href="https://github.com/FlorianCassayre/icbd-2026-open-source"
                        target="_blank"
                        rel="noopener"
                      >
                        Open Source
                      </SoftLink>
                    ),
                  }}
                />
              </ListItem>
            </DenseList>
          ),
        },
        {
          title: $t({ id: `${Key}.competitionsAndAwards.title` }),
          icon: EmojiEvents,
          content: (
            <>
              <DenseList marker="disc">
                <ListItem>
                  <FormattedMessage
                    id="common.labelColonValue"
                    values={{
                      label: (
                        <SoftLink href="https://swerc.eu/2022/" target="_blank" rel="noopener">
                          SWERC 2022
                        </SoftLink>
                      ),
                      value: (
                        <FormattedMessage
                          id={`${Key}.competitionsAndAwards.items.swerc22`}
                          values={{ sup: chunk => <sup>{chunk}</sup> }}
                        />
                      ),
                    }}
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="common.labelColonValue"
                    values={{
                      label: (
                        <SoftLink href="https://ieeextreme.org/" target="_blank" rel="noopener">
                          IEEEXtreme 15.0 2021
                        </SoftLink>
                      ),
                      value: (
                        <FormattedMessage
                          id={`${Key}.competitionsAndAwards.items.ieeextreme21`}
                          values={{ sup: chunk => <sup>{chunk}</sup> }}
                        />
                      ),
                    }}
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="common.labelColonValue"
                    values={{
                      label: (
                        <SoftLink
                          href="https://www.bloomberg.com/company/stories/get-ready-for-bloombergs-summer-of-puzzles-2021/"
                          target="_blank"
                          rel="noopener"
                        >
                          BPuzzled 2021
                        </SoftLink>
                      ),
                      value: (
                        <FormattedMessage
                          id={`${Key}.competitionsAndAwards.items.bpuzzled21`}
                          values={{ sup: chunk => <sup>{chunk}</sup> }}
                        />
                      ),
                    }}
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="common.labelColonValue"
                    values={{
                      label: (
                        <SoftLink href="https://2020.lauzhack.com/" target="_blank" rel="noopener">
                          LauzHack 2020
                        </SoftLink>
                      ),
                      value: (
                        <FormattedMessage
                          id={`${Key}.competitionsAndAwards.items.lauzhack20`}
                          values={{ admotiv: <em>AdMotiv</em> }}
                        />
                      ),
                    }}
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="common.labelColonValue"
                    values={{
                      label: (
                        <SoftLink href="https://2019.lauzhack.com/" target="_blank" rel="noopener">
                          LauzHack 2019
                        </SoftLink>
                      ),
                      value: (
                        <FormattedMessage
                          id={`${Key}.competitionsAndAwards.items.lauzhack19`}
                          values={{ sentimentU: <em>Sentiment-U</em> }}
                        />
                      ),
                    }}
                  />
                </ListItem>
              </DenseList>
              <Typography>
                <FormattedMessage id={`${Key}.competitionsAndAwards.honorableMentions`} />
              </Typography>
              <DenseList marker="disc">
                <ListItem>
                  <FormattedMessage
                    id="common.labelColonValue"
                    values={{
                      label: (
                        <SoftLink href="https://www.youtube.com/live/yfXu9_Za_mg?t=2003" target="_blank" rel="noopener">
                          Hash Code 2022
                        </SoftLink>
                      ),
                      value: $t({ id: `${Key}.competitionsAndAwards.items.hashcode22` }),
                    }}
                  />
                </ListItem>
              </DenseList>
            </>
          ),
        },
        {
          title: $t({ id: 'home.highlights.citations.title' }),
          icon: Campaign,
          content: (
            <>
              <DenseList marker="disc">
                <ListItem>
                  La Revue française de Généalogie
                  <DenseList marker="disc">
                    <ListItem>
                      <SoftLink href="https://www.rfgenealogie.com/magazine/248" target="_blank" rel="noopener">
                        "Mémoire des lieux" (n°248), p. 31
                      </SoftLink>
                    </ListItem>
                    <ListItem>
                      <SoftLink href="https://www.rfgenealogie.com/magazine/247" target="_blank" rel="noopener">
                        "Les logiciels et applications Made in France" (n°247), p. 50
                      </SoftLink>
                    </ListItem>
                    <ListItem>
                      <SoftLink href="https://www.rfgenealogie.com/magazine/244" target="_blank" rel="noopener">
                        "Corse : les archives à consulter" (n°244), p. 58
                      </SoftLink>
                    </ListItem>
                  </DenseList>
                </ListItem>
                <ListItem>
                  <SoftLink
                    href="https://www.paris.fr/pages/vos-demarches-administratives-au-cimetiere-du-pere-lachaise-17511"
                    target="_blank"
                    rel="noopener"
                  >
                    Ville de Paris - Cimetière du Père-Lachaise
                  </SoftLink>
                </ListItem>
              </DenseList>
            </>
          ),
        },
      ]}
    />
  );
};
