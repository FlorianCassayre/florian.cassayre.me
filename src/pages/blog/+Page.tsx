import React, { useCallback, useMemo, useState } from 'react';

import { Close, East, FilterList, Info } from '@mui/icons-material';
import { Alert, Badge, Box, Button, Card, CardContent, Chip, Grid, Stack, Typography, useTheme } from '@mui/joy';
import { CardActionArea } from '@mui/material';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';
import { usePageContext } from 'vike-react/usePageContext';

import { BlogPageContext } from '../../blog/BlogPageContext';
import { getKeywordMessageId } from '../../blog/getKeywordMessageId';
import { parsePostSlug } from '../../blog/parsePostSlug';
import { PostConfig } from '../../blog/PostConfig';
import { PostKeyword } from '../../blog/PostKeyword';
import { PostSlug } from '../../blog/PostSlug';
import { PageLayout } from '../../components/layout/PageLayout';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { Locale } from '../../i18n/Locale';
import { LocaleNameKey } from '../../i18n/LocaleNameKey';
import { LOCALES } from '../../i18n/utils';
import { useUrlGenerator } from '../../route/useUrlGenerator';
import { homeBreadcrumbs } from '../breadcrumbs';

const postsMeta = Object.entries(import.meta.glob('./post/*/+config.ts', { eager: true }))
  .map(([name, properties]) => {
    const parsed = parsePostSlug(name.replace(/^\.\/post\//, '').replace(/\/\+config\.ts$/, ''));
    if (parsed === null) {
      throw new Error(`Invalid post name: ${name}`);
    }
    return {
      ...(properties as { config: PostConfig }).config.post,
      ...parsed,
    };
  })
  .sort(({ date: d1 }, { date: d2 }) => d2.getTime() - d1.getTime());

interface FilteringCategoryProps<T extends string> {
  title: string;
  keysGetter: (post: PostConfig['post'] & PostSlug) => readonly T[] | undefined;
  keyFormatter: (key: T) => string;
  selectedKeys: T[];
  onClick: (key: T) => void;
}

const FilteringCategory = <T extends string>({
  title,
  keysGetter,
  keyFormatter,
  selectedKeys,
  onClick,
}: FilteringCategoryProps<T>): React.ReactNode => {
  const orderedCounts = useMemo(() => {
    const counts: Partial<Record<T, number>> = {};
    postsMeta.forEach(post =>
      keysGetter(post)?.forEach(key => {
        if (!(key in counts)) {
          counts[key] = 0;
        }
        counts[key]!++;
      })
    );
    return Object.entries(counts as Record<string, number>)
      .sort(([k1, c1], [k2, c2]) => (c1 === c2 ? k1.localeCompare(k2) : c2 - c1))
      .map(([key, count]) => ({ key: key satisfies string as T, count }));
  }, [keysGetter]);
  const selectedKeysSet = useMemo(() => new Set<T>(selectedKeys), [selectedKeys]);
  return (
    <Box>
      <Typography level="title-lg" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Stack direction={{ xs: 'row', sm: 'column' }} spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {orderedCounts.map(({ key, count }) => (
          <Box key={key}>
            <Badge badgeContent={count} color="neutral" size="sm">
              <Chip variant={selectedKeysSet.has(key) ? 'solid' : 'soft'} color="primary" onClick={() => onClick(key)}>
                {keyFormatter(key)}
              </Chip>
            </Badge>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export const Page = () => {
  const pageContext = usePageContext() as BlogPageContext;
  const { $t } = useIntl();
  const urlGenerator = useUrlGenerator();
  const theme = useTheme();
  const [selectedKeywords, setSelectedKeywords] = useState<PostKeyword[]>([]);
  const [selectedLocale, setSelectedLocale] = useState<Locale | null>(null);
  const selectedLocales = useMemo(() => (selectedLocale !== null ? [selectedLocale] : []), [selectedLocale]);
  const handleKeywordClick = useCallback(
    (keyword: PostKeyword) => {
      const nextState = selectedKeywords.includes(keyword)
        ? selectedKeywords.filter(s => s !== keyword)
        : [...selectedKeywords, keyword];
      setSelectedKeywords(nextState);
    },
    [selectedKeywords, setSelectedKeywords]
  );
  const selectedKeywordsSet = useMemo(() => new Set(selectedKeywords), [selectedKeywords]);
  const handleLocaleClick = useCallback(
    (clickedLocale: Locale) => setSelectedLocale(selectedLocale !== clickedLocale ? clickedLocale : null),
    [setSelectedLocale, selectedLocale]
  );
  const filteredPosts = useMemo(
    () =>
      postsMeta
        .filter(({ keywords }) => selectedKeywords.every(keyword => !!keywords?.includes(keyword)))
        .filter(({ locale }) => locale === null || selectedLocale === null || selectedLocale === locale),
    [selectedKeywords, selectedLocale]
  );
  useIsomorphicLayoutEffect(() => {
    // https://vike.dev/passToClient#error
    setSelectedKeywords('keyword' in pageContext && pageContext.keyword !== undefined ? [pageContext.keyword] : []);
  }, [setSelectedKeywords, pageContext]);
  return (
    <PageLayout title={$t({ id: 'blog.title' })} parentBreadcrumbs={homeBreadcrumbs}>
      <Grid container spacing={2}>
        <Grid xs={12} md={2}>
          <Card>
            <Stack direction="column" spacing={{ xs: 2, sm: 4 }}>
              <FilteringCategory
                title={$t({ id: 'blog.filterBy.keywords' })}
                keysGetter={({ keywords }) => keywords}
                keyFormatter={keyword => $t({ id: getKeywordMessageId(keyword) })}
                selectedKeys={selectedKeywords}
                onClick={handleKeywordClick}
              />
              <FilteringCategory
                title={$t({ id: 'blog.filterBy.language' })}
                keysGetter={({ locale }) => (locale !== null ? [locale] : LOCALES)}
                keyFormatter={locale => $t({ id: LocaleNameKey[locale] })}
                selectedKeys={selectedLocales}
                onClick={handleLocaleClick}
              />
            </Stack>
          </Card>
        </Grid>
        <Grid xs={12} md={10}>
          <Stack direction="column" spacing={2}>
            {(selectedKeywords.length > 0 || selectedLocale !== null) && (
              <>
                <Alert
                  variant="soft"
                  color="primary"
                  startDecorator={<FilterList />}
                  endDecorator={
                    <Button
                      size="sm"
                      variant="outlined"
                      color="primary"
                      startDecorator={<Close />}
                      onClick={() => {
                        setSelectedKeywords([]);
                        setSelectedLocale(null);
                      }}
                    >
                      <FormattedMessage id="blog.filtering.clear" />
                    </Button>
                  }
                >
                  <FormattedMessage id="blog.filtering.enabled" />
                </Alert>
                {filteredPosts.length === 0 && (
                  <Alert variant="outlined" color="warning" startDecorator={<Info />}>
                    <FormattedMessage id="blog.filtering.empty" />
                  </Alert>
                )}
              </>
            )}
            <Stack direction="column" spacing={2}>
              {filteredPosts.map(({ title, description, keywords, date, locale: postLocale, rawSlug }) => (
                <CardActionArea
                  key={rawSlug}
                  component="a"
                  href={urlGenerator(`/blog/post/${rawSlug}`)}
                  sx={{ borderRadius: 2 }}
                >
                  <Card key={rawSlug} sx={{ width: '100%' }}>
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                        <Box>
                          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                            <Typography level="title-lg">{title}</Typography>
                            {postLocale !== null && postLocale !== pageContext.locale && (
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
                                <Chip
                                  key={keyword}
                                  color="primary"
                                  variant={!selectedKeywordsSet.has(keyword) ? 'soft' : 'solid'}
                                >
                                  <FormattedMessage id={getKeywordMessageId(keyword)} />
                                </Chip>
                              ))}
                            </Stack>
                          )}
                        </Box>
                        <East sx={{ color: theme.palette.primary.plainColor }} />
                      </Stack>
                    </CardContent>
                  </Card>
                </CardActionArea>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
