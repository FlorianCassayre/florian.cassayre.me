import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';

export const config = {
  passToClient: ['locale'],
  stream: true,
  prerender: true,
  extends: vikeReact,
} satisfies Config;
