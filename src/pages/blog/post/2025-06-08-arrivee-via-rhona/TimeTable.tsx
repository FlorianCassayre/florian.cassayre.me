import React, { useState } from 'react';

import { UnfoldLess, UnfoldMore } from '@mui/icons-material';
import { Chip, Grid, IconButton, Table, Tooltip, styled } from '@mui/joy';
import { useIntl } from 'react-intl';

const AlignedTable = styled(Table)({
  'th, td, th': {
    textAlign: 'center',
  },
});

interface Stage {
  day: number;
  afternoon: boolean;
  destination: string;
  distance: number; // Km
  elevation: number; // Meters
  duration: number; // Minutes
}

interface TimeTableLayoutProps {
  start: string;
  stages: Stage[];
  collapsed: boolean;
  onCollapseToggle: () => void;
}

const TimeTableLayout: React.FC<TimeTableLayoutProps> = ({ start, stages, collapsed, onCollapseToggle }) => {
  const intl = useIntl();
  const zippedStages = stages.map((stage, i) => ({ ...stage, start: i > 0 ? stages[i - 1].destination : start }));
  const formatKm = (totalKm: number): string =>
    intl.formatNumber(totalKm, { style: 'unit', unit: 'kilometer', maximumFractionDigits: 0 });
  const formatKmHour = (kmHour: number): string =>
    intl.formatNumber(kmHour, {
      style: 'unit',
      unit: 'kilometer-per-hour',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  const formatMeters = (totalMeters: number): string =>
    intl.formatNumber(totalMeters, { style: 'unit', unit: 'meter', maximumFractionDigits: 0 });
  const formatDuration = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes.toString().padStart(2, '0')}`;
  };
  const sum = (property: (stage: Stage) => number, filter: (stage: Stage) => boolean = () => true): number =>
    stages
      .filter(filter)
      .map(property)
      .reduce((a, b) => a + b, 0);
  return (
    <AlignedTable borderAxis="x" variant="outlined" sx={{ minWidth: 700 }}>
      <thead>
        <tr>
          <th colSpan={7}>
            <Tooltip title={!collapsed ? 'Simplifier' : 'Détailler'}>
              <IconButton onClick={onCollapseToggle}>{!collapsed ? <UnfoldLess /> : <UnfoldMore />}</IconButton>
            </Tooltip>
          </th>
        </tr>
        <tr>
          <th>Jour</th>
          <th>Départ</th>
          <th>Arrivée</th>
          <th>Distance</th>
          <th>Dénivelé</th>
          <th>Durée</th>
          <th>Vitesse</th>
        </tr>
      </thead>
      <tbody>
        {zippedStages.map(({ day, afternoon, start, destination }) => (
          <tr key={`${day}-${afternoon}`}>
            {!afternoon && (
              <td rowSpan={2}>
                <Chip variant="soft" color="primary">
                  <strong>{day}</strong>
                </Chip>
              </td>
            )}
            {(!collapsed || !afternoon) && (
              <>
                <td rowSpan={collapsed ? 2 : undefined}>{start}</td>
                <td rowSpan={collapsed ? 2 : undefined}>
                  {collapsed
                    ? zippedStages
                        .filter(s => s.day === day)
                        .map(s => s.destination)
                        .reverse()[0]
                    : destination}
                </td>
                <td rowSpan={collapsed ? 2 : undefined}>
                  <Chip variant="outlined">
                    {formatKm(
                      sum(
                        s => s.distance,
                        s => s.day === day && (collapsed || s.afternoon === afternoon)
                      )
                    )}
                  </Chip>
                </td>
                <td rowSpan={collapsed ? 2 : undefined}>
                  <Chip variant="outlined">
                    {formatMeters(
                      sum(
                        s => s.elevation,
                        s => s.day === day && (collapsed || s.afternoon === afternoon)
                      )
                    )}
                  </Chip>
                </td>
                <td rowSpan={collapsed ? 2 : undefined}>
                  <Chip variant="outlined">
                    {formatDuration(
                      sum(
                        s => s.duration,
                        s => s.day === day && (collapsed || s.afternoon === afternoon)
                      )
                    )}
                  </Chip>
                </td>
                <td rowSpan={collapsed ? 2 : undefined}>
                  <Chip variant="outlined">
                    {formatKmHour(
                      (60 *
                        sum(
                          s => s.distance,
                          s => s.day === day && (collapsed || s.afternoon === afternoon)
                        )) /
                        sum(
                          s => s.duration,
                          s => s.day === day && (collapsed || s.afternoon === afternoon)
                        )
                    )}
                  </Chip>
                </td>
              </>
            )}
          </tr>
        ))}
        <tr>
          <td>
            <strong>{new Set(stages.map(s => s.day)).size} jours</strong>
          </td>
          <td colSpan={2}>
            <strong>{stages.length} étapes</strong>
          </td>
          <td>
            <Chip variant="outlined">
              <strong>{formatKm(sum(s => s.distance))}</strong>
            </Chip>
          </td>
          <td>
            <Chip variant="outlined">
              <strong>{formatMeters(sum(s => s.elevation))}</strong>
            </Chip>
          </td>
          <td>
            <Chip variant="outlined">
              <strong>{formatDuration(sum(s => s.duration))}</strong>
            </Chip>
          </td>
          <td>
            <Chip variant="outlined">
              <strong>{formatKmHour((60 * sum(s => s.distance)) / sum(s => s.duration))}</strong>
            </Chip>
          </td>
        </tr>
      </tbody>
    </AlignedTable>
  );
};

interface TimeTableToggleableProps extends Omit<TimeTableLayoutProps, 'collapsed' | 'onCollapseToggle'> {}

const TimeTableToggleable: React.FC<TimeTableToggleableProps> = props => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Grid container justifyContent="center" sx={{ my: 2 }}>
      <Grid xs={12} md={11} lg={10} sx={{ overflowX: 'auto' }}>
        <TimeTableLayout {...props} collapsed={collapsed} onCollapseToggle={() => setCollapsed(!collapsed)} />
      </Grid>
    </Grid>
  );
};

export const TimeTable: React.FC = () => {
  return (
    <TimeTableToggleable
      start="Saint-Genis-Pouilly"
      stages={[
        {
          day: 1,
          afternoon: false,
          destination: 'Seyssel',
          distance: 72.48,
          elevation: 782,
          duration: 3 * 60 + 56,
        },
        {
          day: 1,
          afternoon: true,
          destination: 'Glandieu',
          distance: 66.32,
          elevation: 352,
          duration: 3 * 60 + 44,
        },
        {
          day: 2,
          afternoon: false,
          destination: 'Hières-sur-Amby',
          distance: 78.38,
          elevation: 415,
          duration: 4 * 60 + 3,
        },
        {
          day: 2,
          afternoon: true,
          destination: 'Écully',
          distance: 62.45,
          elevation: 392,
          duration: 3 * 60 + 37,
        },
        {
          day: 3,
          afternoon: false,
          destination: 'Montagny',
          distance: 30.31,
          elevation: 265,
          duration: 60 + 46,
        },
        {
          day: 3,
          afternoon: true,
          destination: 'Sablons',
          distance: 63.96,
          elevation: 358,
          duration: 3 * 60 + 36,
        },
        {
          day: 4,
          afternoon: false,
          destination: 'Soyons',
          distance: 70.29,
          elevation: 341,
          duration: 4 * 60 + 4,
        },
        {
          day: 4,
          afternoon: true,
          destination: 'Viviers',
          distance: 67.86,
          elevation: 292,
          duration: 3 * 60 + 52,
        },
        {
          day: 5,
          afternoon: false,
          destination: 'Châteauneuf-du-Pape',
          distance: 75.15,
          elevation: 270,
          duration: 4 * 60 + 4,
        },
        {
          day: 5,
          afternoon: true,
          destination: 'Beaucaire',
          distance: 73.85,
          elevation: 276,
          duration: 4 * 60 + 1,
        },
        {
          day: 6,
          afternoon: false,
          destination: 'Port-Saint-Louis-du-Rhône',
          distance: 68.33,
          elevation: 197,
          duration: 3 * 60 + 46,
        },
        {
          day: 6,
          afternoon: true,
          destination: 'Marseille',
          distance: 80.84,
          elevation: 789,
          duration: 4 * 60 + 56,
        },
      ]}
    />
  );
};
