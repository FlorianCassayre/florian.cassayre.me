import React, { useMemo } from 'react';

import { EmojiEvents } from '@mui/icons-material';
import { Box, Chip, Table, useTheme } from '@mui/joy';

import { HardwareSpecDetails } from './HardwareSpecDetails';
import { HardwarePrebuiltRow, HardwareType } from './specs';
import { Link } from '../../../../blog/mdx/Link';

const HardwareTypeNames: Record<HardwareType, string> = {
  [HardwareType.Case]: 'Case',
  [HardwareType.Psu]: 'PSU',
  [HardwareType.Motherboard]: 'Motherboard',
  [HardwareType.Cpu]: 'CPU',
  [HardwareType.Ram]: 'RAM',
  [HardwareType.Gpu]: 'GPU',
  [HardwareType.Storage]: 'Storage',
  [HardwareType.Aio]: 'AIO',
  [HardwareType.Fan]: 'Fan',
  [HardwareType.Cd]: 'CD/DVD',
  [HardwareType.Hub]: 'Hub',
};

interface PriceChipProps {
  count?: number;
  price: number;
  highlighted?: boolean;
}

const PriceChip: React.FC<PriceChipProps> = ({ count, price, highlighted }) => {
  return (
    <Chip variant={!highlighted ? 'outlined' : 'solid'}>
      {count !== undefined && `${count} × `}
      {price}
      {' €'}
    </Chip>
  );
};

interface HardwareSpecTableProps {
  hardware: HardwarePrebuiltRow[];
  price?: number;
}

export const HardwareSpecTable: React.FC<HardwareSpecTableProps> = ({ hardware, price }) => {
  const theme = useTheme();
  const hardwareSorted = useMemo(() => hardware.slice().sort(({ type: a }, { type: b }) => a - b), [hardware]);
  const columnWidths = [100, 30, 300, 400, 90];
  return (
    <Box display="flex" justifyContent="center" sx={{ my: 1 }}>
      <Box sx={{ overflowX: 'auto' }}>
        <Table borderAxis="x" variant="outlined" sx={{ width: `${columnWidths.reduce((a, b) => a + b, 0)}px` }}>
          <colgroup>
            {columnWidths.map((columnWidth, i) => (
              <col key={i} style={{ width: `${columnWidth}px` }} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th />
              <th></th>
              <th>Reference</th>
              <th>Characteristics</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {hardwareSorted.map((hardware, i) => (
              <tr
                key={i}
                style={{
                  backgroundColor: hardware.added
                    ? theme.palette.success.softBg
                    : hardware.removed
                      ? theme.palette.danger.softBg
                      : undefined,
                }}
              >
                <td>
                  <strong>{HardwareTypeNames[hardware.type]}</strong>
                </td>
                <td>{'count' in hardware && hardware.count !== undefined ? `×${hardware.count}` : null}</td>
                <td>
                  {hardware.pcPartId ? (
                    <Link href={`https://pcpartpicker.com/product/${encodeURIComponent(hardware.pcPartId)}`}>
                      {hardware.name}
                    </Link>
                  ) : (
                    hardware.name
                  )}
                </td>
                <td>
                  <HardwareSpecDetails hardware={hardware} />
                </td>
                <td>
                  {hardware.priceEuro !== undefined && (
                    <>
                      {hardware.priceEuro !== 0 ? (
                        <Box textAlign="right">
                          <PriceChip
                            price={hardware.priceEuro}
                            count={'count' in hardware ? hardware.count : undefined}
                          />
                        </Box>
                      ) : (
                        <Box sx={{ textAlign: 'center' }}>
                          <EmojiEvents color="action" />
                        </Box>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4} />
              <td style={{ textAlign: 'right' }}>
                <PriceChip
                  price={
                    (price ?? 0) +
                    hardwareSorted
                      .map(
                        hardware =>
                          (('count' in hardware ? hardware.count : undefined) ?? 1) * (hardware.priceEuro ?? 0)
                      )
                      .reduce((a, b) => a + b, 0)
                  }
                  highlighted
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Box>
    </Box>
  );
};
