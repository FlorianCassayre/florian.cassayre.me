import React, { useMemo } from 'react';

import { Warning } from '@mui/icons-material';
import { Alert, Box, Card, CardContent, Chip, Stack, Typography } from '@mui/joy';
import { FormattedMessage, useIntl } from 'react-intl';
import { navigate } from 'vike/client/router';
import { Config } from 'vike-react/Config';
import { usePageContext } from 'vike-react/usePageContext';

import { BlogPageContext } from '../../../blog/BlogPageContext';
import { getKeywordMessageId } from '../../../blog/getKeywordMessageId';
import { JoyMDXProvider } from '../../../blog/mdx/JoyMDXProvider';
import { PostKeyword } from '../../../blog/PostKeyword';
import { usePostMeta } from '../../../blog/usePostMeta';
import { PageLayout } from '../../../components/layout/PageLayout';
import { Locale } from '../../../i18n/Locale';
import { LocaleNameKey } from '../../../i18n/LocaleNameKey';
import { canonicalizeUrlPathname } from '../../../route/canonicalizeUrlPathname';
import { useUrlGenerator } from '../../../route/useUrlGenerator';
import { blogBreadcrumbs } from '../breadcrumbs';

interface PostHeaderProps {
  title: string;
  date: Date;
  keywords: PostKeyword[];
  otherLocale: Locale | null;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, date, keywords, otherLocale }) => {
  const { formatDate, $t } = useIntl();
  const urlGenerator = useUrlGenerator();
  return (
    <Box>
      <Typography level="h1" sx={{ mb: 0 }}>
        {title}
      </Typography>
      <Typography level="body-xs" sx={{ mb: 1 }}>
        <FormattedMessage
          id="blog.post.published"
          values={{
            date: formatDate(date, {
              timeZone: 'utc' /* Important, date is in UTC */,
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }),
          }}
        />
      </Typography>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {keywords.map(keyword => (
            <Chip
              key={keyword}
              color="primary"
              component="a"
              href={urlGenerator('/blog')}
              onClick={e => {
                e.preventDefault(); // Without this, the page refreshes
                e.stopPropagation(); // Without this, the context is not passed
                return navigate('/blog', { pageContext: { keyword } satisfies Partial<BlogPageContext> });
              }}
            >
              <FormattedMessage id={getKeywordMessageId(keyword)} />
            </Chip>
          ))}
        </Stack>
        {otherLocale !== null && (
          <Alert startDecorator={<Warning />} variant="soft" color="warning">
            <Typography>
              <FormattedMessage
                id="blog.post.otherLanguage"
                values={{ language: $t({ id: LocaleNameKey[otherLocale] }).toLowerCase() }}
              />
            </Typography>
          </Alert>
        )}
      </Stack>
    </Box>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { formatMessage } = useIntl();
  const { locale } = usePageContext();
  const urlGenerator = useUrlGenerator();
  const { title, locale: postLocale, description, keywords = [], date, image } = usePostMeta();
  const joinedKeywords = useMemo(
    () =>
      keywords?.length
        ? keywords.map(keyword => formatMessage({ id: getKeywordMessageId(keyword) })).join(', ')
        : undefined,
    [keywords, formatMessage]
  );
  const site = useMemo(() => canonicalizeUrlPathname(urlGenerator('/')), [urlGenerator]);
  const otherLocale = useMemo(
    () => (postLocale !== undefined && postLocale !== locale ? postLocale : null),
    [locale, postLocale]
  );
  return (
    <PageLayout title={title} hideTitle parentBreadcrumbs={blogBreadcrumbs} description={description} image={image}>
      <JoyMDXProvider>
        <Config
          Head={
            <>
              {!!joinedKeywords && <meta name="keywords" content={joinedKeywords} />}
              <meta property="og:type" content="article" />
              <meta property="article:published_time" content={date.toISOString().split('.')[0]} />
              {/* article:modified_time */}
              <meta property="article:author" content={site} />
              <meta property="article:publisher" content={site} />
              {/* article:section */}
              {!!joinedKeywords && <meta property="article:tag" content={joinedKeywords} />}
            </>
          }
        />
        <Card
          lang={otherLocale ?? undefined}
          sx={{
            height: '100%',
            mx: { xs: -2, sm: 0 },
            borderLeftWidth: { xs: 0, sm: 1 },
            borderRightWidth: { xs: 0, sm: 1 },
            borderRadius: { xs: 0, sm: 8 },
          }}
        >
          <PostHeader title={title} date={date} keywords={keywords} otherLocale={otherLocale} />
          <CardContent>{children}</CardContent>
        </Card>
      </JoyMDXProvider>
    </PageLayout>
  );
};
