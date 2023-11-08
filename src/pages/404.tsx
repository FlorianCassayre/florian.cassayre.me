import { PageLayout } from "../components/layout/PageLayout";
import { Stack, Typography } from '@mui/joy';

export function PageNotFound() {
  return (
    <PageLayout>
      <Stack direction="column" sx={{ height: '100%' }}>
        <Typography>
          Not found
        </Typography>
      </Stack>
    </PageLayout>
  )
}
