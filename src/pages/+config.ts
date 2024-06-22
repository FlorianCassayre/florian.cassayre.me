export { config };

import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';

const config = {
  passToClient: ['locale'],
  extends: vikeReact,
} satisfies Config;
