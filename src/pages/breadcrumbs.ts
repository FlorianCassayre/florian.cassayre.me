import { Home } from '@mui/icons-material';
import { IntlShape } from 'react-intl';

import { BreadcrumbArray } from '../route/Breadcrumb';

export const homeBreadcrumbs = ({ $t }: IntlShape): BreadcrumbArray => [
  {
    title: $t({ id: 'home.title' }),
    icon: Home,
    url: '/',
  },
];
