import { CssBaseline, CssVarsProvider } from '@mui/joy';
import { Content } from './components/layout/Content.tsx';

export const App = () => {
  return (
    <CssVarsProvider>
      {/* CssBaseline must appear as the first child */}
      <CssBaseline />

      <Content />
    </CssVarsProvider>
  )
};
