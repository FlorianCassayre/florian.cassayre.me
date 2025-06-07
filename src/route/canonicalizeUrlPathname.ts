import { DOMAIN } from '../config';

export const canonicalizeUrlPathname = (urlPathname: string): string => {
  if (urlPathname.length > 0 && !urlPathname.startsWith('/')) {
    throw new Error();
  }
  return `https://${DOMAIN}${urlPathname}`;
};
