import { IntlShape } from 'react-intl';

import { BreadcrumbArray } from '../../route/Breadcrumb';
import { homeBreadcrumbs } from '../breadcrumbs';

export const blogBreadcrumbs = (intl: IntlShape): BreadcrumbArray => [
  ...homeBreadcrumbs(intl),
  {
    title: intl.$t({ id: 'blog.title' }),
    url: '/blog',
  },
];
