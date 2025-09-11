import React from 'react';

import { East } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Stack, Typography, useTheme } from '@mui/joy';
import { CardActionArea, CardMedia } from '@mui/material';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { usePageContext } from 'vike-react/usePageContext';

import { getKeywordMessageId } from '../../blog/getKeywordMessageId';
import { PostConfig } from '../../blog/PostConfig';
import { PostSlug } from '../../blog/PostSlug';
import { LocaleNameKey } from '../../i18n/LocaleNameKey';
import { useUrlGenerator } from '../../route/useUrlGenerator';

const ANIMATION_CLASS_NAME = 'hover-reveal-image';

type BlogPostCardProps = PostConfig['post'] &
  PostSlug & {
    selectedKeywordsSet?: Set<string>;
  };

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  keywords,
  date,
  locale: postLocale,
  image,
  rawSlug,
  selectedKeywordsSet,
}) => {
  const { locale } = usePageContext();
  const urlGenerator = useUrlGenerator();
  const theme = useTheme();
  return (
    <CardActionArea
      component="a"
      href={urlGenerator(`/blog/post/${rawSlug}`)}
      sx={{
        borderRadius: 2,
        mt: 2,
        [`&:hover .${ANIMATION_CLASS_NAME}`]: {
          opacity: '30%',
          filter: 'blur(5px)',
        },
      }}
    >
      <Card key={rawSlug} sx={{ width: '100%', p: 0 }}>
        <CardContent>
          <Stack direction="row" spacing={0} justifyContent="space-between">
            <Box sx={{ flex: 1, p: 2 }}>
              <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                <Typography level="title-lg">{title}</Typography>
                {postLocale !== null && postLocale !== locale && (
                  <Chip color="warning" variant="outlined">
                    <FormattedMessage id={LocaleNameKey[postLocale]} />
                  </Chip>
                )}
              </Stack>
              <Typography level="body-xs" sx={{ mt: 0.25 }}>
                <FormattedDate value={date} timeZone="utc" day="2-digit" month="2-digit" year="numeric" />
              </Typography>
              <Typography>{description}</Typography>
              {!!keywords?.length && (
                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mt: 1 }}>
                  {keywords.map(keyword => (
                    <Chip key={keyword} color="primary" variant={!selectedKeywordsSet.has(keyword) ? 'soft' : 'solid'}>
                      <FormattedMessage id={getKeywordMessageId(keyword)} />
                    </Chip>
                  ))}
                </Stack>
              )}
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: image !== undefined ? { xs: 100, md: 200 } : 48,
                overflow: 'hidden',
              }}
            >
              {image && (
                <CardMedia
                  className={ANIMATION_CLASS_NAME}
                  component="img"
                  image={image}
                  alt={title}
                  sx={{
                    position: 'absolute',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                    transition: 'opacity 200ms ease-in-out, filter 200ms ease-in-out',
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                />
              )}
              <East
                sx={{
                  position: 'absolute',
                  right: 16,
                  zIndex: 1,
                  color: theme.palette.primary.plainColor,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
