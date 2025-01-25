import { DOMAIN } from '../config';

export const canonicalizeUrlPathname = (urlPathname: string): string => `https://${DOMAIN}${urlPathname}`;
