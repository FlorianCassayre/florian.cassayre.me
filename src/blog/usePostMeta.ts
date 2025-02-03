import { useMemo } from 'react';

import { usePageContext } from 'vike-react/usePageContext';

import { parsePostSlug } from './parsePostSlug';
import { PostConfig } from './PostConfig';
import { PostSlug } from './PostSlug';
import { PageContext } from '../renderer/types';

export const usePostMeta = (): PostConfig['post'] & PostSlug => {
  const {
    config: { post },
    urlPathname,
  } = usePageContext() as PageContext & { config: PostConfig };
  const postSlug = useMemo(() => {
    const parts = urlPathname.split('/').filter(s => !!s);
    const parsed = parsePostSlug(parts[parts.length - 1]);
    if (parsed === null) {
      throw new Error(); // Shouldn't happen
    }
    return parsed;
  }, [urlPathname]);
  return {
    ...post,
    ...postSlug,
  };
};
