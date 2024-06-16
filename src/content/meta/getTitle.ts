const SITE_TITLE = 'Florian Cassayre';
const TITLE_SEPARATOR = '·';

export const getTitle = (title: string | null): string =>
  title !== null ? `${title} ${TITLE_SEPARATOR} ${SITE_TITLE}` : SITE_TITLE;
