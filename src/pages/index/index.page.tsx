import { CssBaseline, CssVarsProvider } from '@mui/joy';
import { Content } from '../../components/layout/Content';

export function Page() {
  return (
    <CssVarsProvider>
      {/* CssBaseline must appear as the first child */}
      <CssBaseline />

      <Content />
    </CssVarsProvider>
  )
}
