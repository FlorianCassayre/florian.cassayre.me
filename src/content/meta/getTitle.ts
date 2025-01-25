import { AUTHOR } from '../../config';

const SITE_TITLE = AUTHOR;
const TITLE_SEPARATOR = '·';

export const getTitle = (title: string | null): string =>
  title !== null ? `${title} ${TITLE_SEPARATOR} ${SITE_TITLE}` : SITE_TITLE;
