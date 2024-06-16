import { Locale } from '../i18n/Locale';

export type {
  PageContextServer,
  /*
  // When using Client Routing https://vike.dev/clientRouting
  PageContextClient,
  PageContext,
  /*/
  // When using Server Routing
  PageContextClientWithServerRouting as PageContextClient,
  PageContextWithServerRouting as PageContext
  //*/
} from 'vike/types'

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      urlPathname: string;
      urlOriginal: string;
      locale: Locale;
      urlLogical: string;
      urlRedirect?: string;
      exports: {
        documentProps?: {
          title?: string
          description?: string
        }
      }
    }
  }
}

