import React, { useMemo } from 'react';

import { SoftLink } from '../../components/SoftLink';
import { useUrlGenerator } from '../../route/useUrlGenerator';

type LinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  const urlGenerator = useUrlGenerator();
  const props = useMemo(() => {
    if (href === undefined) {
      return {};
    }
    if (href.startsWith('/')) {
      // Internal link
      return { href: urlGenerator(href) };
    } else {
      // External link
      return { href, target: '_blank', rel: 'noopener' };
    }
  }, [href, urlGenerator]);
  return <SoftLink {...props}>{children}</SoftLink>;
};
