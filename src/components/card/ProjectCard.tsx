import React, { useCallback } from 'react';
import {
  AspectRatio, Box,
  Card,
  CardContent,
  CardOverflow,
  Chip,
  ChipProps,
  Divider,
  IconButton,
  Stack, Tooltip,
  Typography,
  useTheme,
} from '@mui/joy';
import { FiberManualRecord, GitHub, Launch, VisibilityOff } from '@mui/icons-material';
import { IconType } from '@react-icons/all-files';
import { FormattedMessage, useIntl } from 'react-intl';

type Technology = string | {
  name: string;
  icon: IconType;
  color?: ChipProps['color'];
};

interface ProjectCardProps {
  image?: string;
  logo?: string;
  title: string;
  description: string;
  technologies?: Technology[];
  status: boolean | null;
  statusText: string;
  homepage?: string;
  github?: string;
  pro?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, logo, title, description, technologies, status, statusText, homepage, github, pro }) => {
  const { $t } = useIntl();
  const theme = useTheme();
  const renderIcon = useCallback((Icon: IconType) => <Icon />, []);
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardOverflow sx={{ mb: logo ? { xs: 3, sm: 2 } : undefined }}>
        <AspectRatio ratio="2">
          {!!image && (
            <img src={image} alt={$t({ id: 'home.project.illustrationAlt' })} style={{ pointerEvents: 'none', userSelect: 'none' }} />
          )}
        </AspectRatio>
        {!!logo && (
          <Box sx={{ position: 'relative', mx: 'auto' }}>
            <Box sx={{ p: 1, position: 'absolute', transform: 'translate(-50%, -50%)', backgroundColor: 'white', borderRadius: '100%', border: '2px solid #f0f4f8', height: '68px', filter: 'drop-shadow(0px 2px 4px #00000030)' }}>
              <img src={logo} alt={$t({ id: 'home.logoAlt' })} width="48px" height="48px" style={{ pointerEvents: 'none', userSelect: 'none' }} />
            </Box>
          </Box>
        )}
      </CardOverflow>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography level="title-md">{title}</Typography>
          {!!pro && (
            <Tooltip title={$t({ id: 'home.project.types.pro.description' })} sx={{ cursor: 'help' }}>
              <Chip variant="soft" color="primary"><FormattedMessage id="home.project.types.pro.label" /></Chip>
            </Tooltip>
          )}
        </Stack>
        <Typography level="body-sm">{description}</Typography>
        {!!technologies?.length && (
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
            {(technologies ?? []).map((technology, i) => (
              <Chip
                key={i}
                variant="outlined"
                startDecorator={typeof technology === 'string' ? undefined : renderIcon(technology.icon)}
                color={typeof technology === 'string' ? undefined : technology.color}
              >
                {typeof technology === 'string' ? technology : technology.name}
              </Chip>
            ))}
          </Stack>
        )}
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal" sx={{ py: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <FiberManualRecord color={status === true ? 'success' : status === false ? 'error' : 'warning'} sx={{ fontSize: 16 }} />
              <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                {statusText}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              {github ? (
                <IconButton component="a" href={github} target="_blank" rel="noopener" size="sm" aria-label="GitHub">
                  <GitHub color="action" />
                </IconButton>
              ) : (
                <Stack> {/* Ugly hack around https://github.com/mui/material-ui/issues/38943 */}
                  <Box sx={{ p: 0.1 }}>
                    <Tooltip title={$t({ id: 'home.project.closedSource' })}>
                      <VisibilityOff sx={{ color: theme.palette.neutral.outlinedDisabledColor }} />
                    </Tooltip>
                  </Box>
                </Stack>
              )}
              {!!homepage && (
                <IconButton component="a" href={homepage} target="_blank" rel="noopener" size="sm" aria-label={$t({ id: 'common.externalLink' })}>
                  <Launch color="action" />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};
