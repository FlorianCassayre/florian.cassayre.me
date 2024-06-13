import { usePageContext } from 'vike-react/usePageContext';
import { ClientOnly } from 'vike-react/ClientOnly';

export function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return (
      <ClientOnly
        load={() => import('./PageNotFound')}
        fallback={null}
      >
        {(Component) => <Component />}
      </ClientOnly>
    );
  } else {
    return null;
  }
}
