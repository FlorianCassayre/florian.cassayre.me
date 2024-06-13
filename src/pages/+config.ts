export { config }

import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'

const config = {
  passToClient: ['locale'],
  clientRouting: true,
  hydrationCanBeAborted: true,
  extends: vikeReact,
} satisfies Config
