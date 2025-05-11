import React, { Fragment, useMemo } from 'react';

import { Breadcrumbs as JoyBreadcrumbs, Stack, Typography } from '@mui/joy';
import { useIntl } from 'react-intl';

import { SoftLink } from './SoftLink';
import { Breadcrumb, LocalizedBreadcrumbArray } from '../route/Breadcrumb';
import { useUrlGenerator } from '../route/useUrlGenerator';

interface BreadcrumbsProps {
  breadcrumbs: LocalizedBreadcrumbArray;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  const intl = useIntl();
  const urlGenerator = useUrlGenerator();
  const resolvedBreadcrumbs: Breadcrumb[] = useMemo(
    () =>
      (typeof breadcrumbs === 'function' ? breadcrumbs(intl) : breadcrumbs).map(breadcrumb => ({
        ...breadcrumb,
        url: breadcrumb.url !== undefined ? urlGenerator(breadcrumb.url) : undefined,
      })),
    [breadcrumbs, intl, urlGenerator]
  );
  return (
    <JoyBreadcrumbs size="sm" sx={{ px: 0, pt: 2 }}>
      {resolvedBreadcrumbs.map(({ title, icon: Icon, url }, i) => (
        <Fragment key={i}>
          {url !== undefined && i !== breadcrumbs.length - 1 ? (
            <SoftLink href={url}>
              {Icon !== undefined ? (
                <Stack direction="row" spacing={0.25} alignItems="center">
                  <Icon sx={{ fontSize: 16 }} />
                  <span>{title}</span>
                </Stack>
              ) : (
                title
              )}
            </SoftLink>
          ) : (
            <Typography>{title}</Typography>
          )}
        </Fragment>
      ))}
    </JoyBreadcrumbs>
  );
};
