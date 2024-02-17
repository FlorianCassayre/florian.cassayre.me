import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import { INVISIBLE_REDIRECTIONS } from './src/content/redirect/legacy';

const config: UserConfig = {
  plugins: [
    react(),
    vike({
      prerender: true,
      redirects: INVISIBLE_REDIRECTIONS,
    })
  ]
}

export default config
