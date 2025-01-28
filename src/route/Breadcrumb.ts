import SvgIcon from '@mui/material/SvgIcon';
import { IntlShape } from 'react-intl';

export interface Breadcrumb {
  title: string;
  icon?: typeof SvgIcon;
  url?: string;
}

export type BreadcrumbArray = [...Breadcrumb[], Breadcrumb];

export type LocalizedBreadcrumbArray = BreadcrumbArray | ((intl: IntlShape) => BreadcrumbArray);
