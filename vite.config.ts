import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [
    react(),
    vike({
      prerender: true,
      // Doesn't seem to work anymore with `vike-react`; instead we re-implement it with a meta refresh tag (also `redirect` doesn't support SSG anyways)
      //redirects: INVISIBLE_REDIRECTIONS,
    }),
  ],
};

// eslint-disable-next-line import/no-default-export
export default config;
