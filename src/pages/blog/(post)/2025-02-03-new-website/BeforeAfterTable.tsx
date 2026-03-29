import React from 'react';

import { GitHub } from '@mui/icons-material';
import { Grid, IconButton, Table, styled } from '@mui/joy';

import { SoftLink } from '../../../../components/SoftLink';

const AlignedTable = styled(Table)({
  '& thead th, td': {
    textAlign: 'center',
  },
  '& tbody th': {
    textAlign: 'right',
  },
});

export const BeforeAfterTable = () => {
  return (
    <Grid container justifyContent="center" sx={{ my: 2 }}>
      <Grid xs={12} sm={10} md={7} lg={6}>
        <AlignedTable borderAxis="x" variant="outlined">
          <thead>
            <tr>
              <th />
              <th>New</th>
              <th>Old</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Web server</th>
              <td>Static</td>
              <td>Dynamic</td>
            </tr>
            <tr>
              <th scope="row">Languages</th>
              <td>
                <SoftLink href="https://www.typescriptlang.org/" target="_blank" rel="noopener">
                  Typescript
                </SoftLink>
              </td>
              <td>
                <SoftLink href="https://www.php.net/" target="_blank" rel="noopener">
                  PHP
                </SoftLink>{' '}
                +{' '}
                <SoftLink href="https://www.mysql.com/" target="_blank" rel="noopener">
                  MySQL
                </SoftLink>{' '}
                +{' '}
                <SoftLink href="https://twig.symfony.com/" target="_blank" rel="noopener">
                  Twig
                </SoftLink>{' '}
                + JavaScript
              </td>
            </tr>
            <tr>
              <th scope="row">Framework</th>
              <td>
                <SoftLink href="https://vike.dev/" target="_blank" rel="noopener">
                  Vike
                </SoftLink>
              </td>
              <td>
                <SoftLink href="https://symfony.com/" target="_blank" rel="noopener">
                  Symfony
                </SoftLink>{' '}
                + Bare JS
              </td>
            </tr>
            <tr>
              <th scope="row">Frontend library</th>
              <td>
                <SoftLink href="https://react.dev/" target="_blank" rel="noopener">
                  React
                </SoftLink>
              </td>
              <td>
                <SoftLink href="https://jquery.com/" target="_blank" rel="noopener">
                  jQuery
                </SoftLink>
              </td>
            </tr>
            <tr>
              <th scope="row">UI kit</th>
              <td>
                <SoftLink href="https://mui.com/joy-ui/getting-started/" target="_blank" rel="noopener">
                  Joy UI
                </SoftLink>
              </td>
              <td>
                <SoftLink href="https://getbootstrap.com/docs/3.4/" target="_blank" rel="noopener">
                  Bootstrap 3
                </SoftLink>
              </td>
            </tr>
            <tr>
              <th scope="row">Bundling</th>
              <td>
                <SoftLink href="https://rollupjs.org/" target="_blank" rel="noopener">
                  Rollup
                </SoftLink>
              </td>
              <td>CDN</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>
                <IconButton
                  component="a"
                  href="https://github.com/FlorianCassayre/florian.cassayre.me"
                  target="_blank"
                  rel="noopener"
                >
                  <GitHub color="action" />
                </IconButton>
              </td>
              <td>
                <IconButton
                  component="a"
                  href="https://github.com/FlorianCassayre/Website"
                  target="_blank"
                  rel="noopener"
                >
                  <GitHub color="action" />
                </IconButton>
              </td>
            </tr>
          </tbody>
        </AlignedTable>
      </Grid>
    </Grid>
  );
};
