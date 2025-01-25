import { PostSlug } from './PostSlug';

export const parsePostSlug = (s: string): PostSlug | null => {
  const isoDatePattern = /^(\d{4}-\d{2}-\d{2})-([a-z0-9-]+)$/;
  const executed = isoDatePattern.exec(s);
  if (executed === null) {
    return null;
  }
  const dateString = executed[1],
    slug = executed[2];
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return null;
  }
  const [year, month, day] = dateString.split('-').map(Number);
  if (!(date.getUTCFullYear() === year && date.getUTCMonth() + 1 === month && date.getUTCDate() === day)) {
    return null;
  }
  return {
    date,
    rawSlug: s,
    slug,
  };
};
