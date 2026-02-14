import React from 'react';

import {
  Cable,
  CropFree,
  Extension,
  FlashOn,
  Memory,
  Reorder,
  RocketLaunch,
  Speed,
  Straighten,
  SvgIconComponent,
  WbSunny,
  Category,
  Save,
  SdStorage,
  Usb,
} from '@mui/icons-material';
import { Chip, Stack } from '@mui/joy';

import { HardwareRow, StorageMedium } from './specs';

type UnionKeys<T> = T extends unknown ? keyof T : never;
type MergeUnion<T> = {
  [K in UnionKeys<T>]-?: T extends unknown ? (K extends keyof T ? NonNullable<T[K]> : never) : never;
};

type HardwareTypes = MergeUnion<HardwareRow>;

interface FieldConfig<T> {
  icon: SvgIconComponent;
  iconProps?: Parameters<SvgIconComponent>[0];
  label: (value: T, count: number, sizeCm: number) => string | null; // Wart
  rainbow?: boolean;
}

type HardwareFieldConfig = {
  [K in keyof HardwareTypes]?: FieldConfig<HardwareTypes[K]>;
};

// Labels

const StorageMediumNames: Record<StorageMedium, string> = {
  [StorageMedium.SataHdd]: 'HDD',
  [StorageMedium.SataSsd]: 'SSD',
  [StorageMedium.NvmeSsd]: 'NVMe',
};

// Config

const CONFIG: HardwareFieldConfig = {
  // Clock
  clockBaseGigahertz: {
    icon: Speed,
    label: v => `${v.toFixed(2)} GHz`,
  },
  clockMaxGigahertz: {
    icon: RocketLaunch,
    label: v => `${v.toFixed(2)} GHz`,
  },
  // RGB
  rgb: {
    icon: WbSunny,
    label: v => (v ? 'ARGB' : null),
    rainbow: true,
  },
  // Case
  widthCm: {
    icon: Straighten,
    label: v => `${v.toFixed(0)} cm`,
  },
  lengthCm: {
    icon: Straighten,
    iconProps: { sx: { transform: 'rotate(45deg)' } },
    label: v => `${v.toFixed(0)} cm`,
  },
  heightCm: {
    icon: Straighten,
    iconProps: { sx: { transform: 'rotate(90deg)' } },
    label: v => `${v.toFixed(0)} cm`,
  },
  // Motherboard
  formFactor: {
    icon: CropFree,
    label: v => v,
  },
  chipset: {
    icon: Memory,
    label: v => v,
  },
  socket: {
    icon: Cable,
    label: v => v,
  },
  // PSU
  watts: {
    icon: FlashOn,
    label: v => `${v.toFixed(0)} W`,
  },
  modular: {
    icon: Extension,
    label: v => (v ? 'Modular' : 'Non-modular'),
  },
  // CPU
  cores: {
    icon: Memory,
    label: v => `${v.toFixed(0)} cores`,
  },
  threads: {
    icon: Reorder,
    label: v => `${v.toFixed(0)} threads`,
  },
  // RAM
  memoryGigabytes: {
    icon: Memory,
    label: (v, count) => `${count > 1 ? `${count.toFixed(0)}×` : ''}${v.toFixed(0)} GB`,
  },
  memoryType: {
    icon: Category,
    label: v => v,
  },
  // GPU
  cudaCores: {
    icon: Memory,
    label: v => `${v.toFixed(0)} CUDA cores`,
  },
  tensorCores: {
    icon: Memory,
    label: v => `${v.toFixed(0)} tensor cores`,
  },
  // Storage
  medium: {
    icon: Save,
    label: v => StorageMediumNames[v],
  },
  capacityTerabytes: {
    icon: SdStorage,
    label: v => (v < 1 ? `${(v * 1000).toFixed(0)} GB` : `${v.toFixed(0)} TB`),
  },
  // AIO / Fan
  sizeCm: {
    icon: Straighten,
    label: v => `${v.toFixed(0)} cm`,
  },
  length: {
    icon: Straighten,
    iconProps: { sx: { transform: 'rotate(90deg)' } },
    label: (v, _, sizeCm) => `${(sizeCm * v).toFixed(0)} cm`,
  },
  // Hub
  ports: {
    icon: Usb,
    label: v => `${v.toFixed(0)} ports`,
  },
};

// Components

const chipRainbowSx = {
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    padding: '1px',
    borderRadius: 'inherit',
    background: 'linear-gradient(-45deg, red, orange, yellow, green, cyan, blue, violet)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
};

interface HardwareSpecDetailProps extends Omit<FieldConfig<unknown>, 'label'> {
  label: string;
}

const HardwareSpecDetail: React.FC<HardwareSpecDetailProps> = ({ label, icon: Icon, iconProps = {}, rainbow }) => {
  return (
    <Chip
      size="sm"
      startDecorator={<Icon color="action" fontSize="small" {...iconProps} />}
      {...(rainbow ? { sx: chipRainbowSx, variant: 'outlined' } : {})}
    >
      {label}
    </Chip>
  );
};

interface HardwareSpecDetailsProps {
  hardware: HardwareRow;
}

export const HardwareSpecDetails: React.FC<HardwareSpecDetailsProps> = ({ hardware }) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={0.5}>
      {Object.entries(hardware).flatMap(([key, value]) => {
        const config = CONFIG[key as keyof HardwareTypes];
        if (key !== undefined && config) {
          const { label: configLabel, ...rest } = config;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const label = configLabel(value as never, (hardware as any).count ?? 1, (hardware as any).sizeCm ?? 0);
          if (label !== null) {
            return [<HardwareSpecDetail key={key} label={label} {...rest} />];
          }
        }
        return [];
      })}
    </Stack>
  );
};
