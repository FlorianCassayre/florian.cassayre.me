import type { Config } from 'vike/types';

import { PostConfig } from '../../../blog/PostConfig';

export const config = {
  meta: {
    post: {
      env: { server: true, client: true },
    },
  } satisfies Record<keyof PostConfig, unknown>,
} satisfies Config;
