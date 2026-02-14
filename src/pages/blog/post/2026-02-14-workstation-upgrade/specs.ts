export enum HardwareType {
  Case,
  Psu,
  Motherboard,
  Cpu,
  Ram,
  Gpu,
  Storage,
  Aio,
  Fan,
  Cd,
  Hub,
}

interface BaseHardware {
  type: HardwareType;
  name: string;
  weightKg?: number;
  priceEuro?: number;
  pcPartId?: string;
}

interface ClockedHardware {
  clockBaseGigahertz: number;
  clockMaxGigahertz?: number;
}

interface RgbHardware {
  rgb: boolean;
}

interface CountableHardware {
  count?: number;
}

export type MotherboardFormFactor = 'ATX';

export enum StorageMedium {
  SataHdd,
  SataSsd,
  NvmeSsd,
}

export type RamType = 'DDR3' | 'DDR5';

type FanSize = 120 | 140;

export type HardwareRow = BaseHardware &
  (
    | ({ type: HardwareType.Case; widthCm: number; lengthCm: number; heightCm: number } & RgbHardware)
    | { type: HardwareType.Psu; watts: number; modular: boolean }
    | ({
        type: HardwareType.Motherboard;
        formFactor: MotherboardFormFactor;
        chipset: string;
        socket: string;
      } & RgbHardware)
    | ({ type: HardwareType.Cpu; cores: number; threads: number } & ClockedHardware)
    | ({ type: HardwareType.Ram; memoryGigabytes: number; memoryType: RamType } & ClockedHardware &
        RgbHardware &
        CountableHardware)
    | ({ type: HardwareType.Gpu; memoryGigabytes: number; cudaCores: number; tensorCores?: number } & ClockedHardware)
    | { type: HardwareType.Storage; medium: StorageMedium; capacityTerabytes: number }
    | ({ type: HardwareType.Aio; sizeCm: FanSize; length: number } & RgbHardware)
    | ({ type: HardwareType.Fan; sizeCm: FanSize } & RgbHardware & CountableHardware)
    | { type: HardwareType.Cd }
    | { type: HardwareType.Hub; ports: number }
  );

// For pre-built configs only
export type HardwarePrebuiltRow = HardwareRow & {
  added?: boolean;
  removed?: boolean;
};

export const OLD_HARDWARE: HardwarePrebuiltRow[] = [
  {
    type: HardwareType.Case,
    name: 'Antec P280',
    weightKg: 10.2,
    rgb: false,
    widthCm: 231,
    lengthCm: 561,
    heightCm: 526,
    pcPartId: 'L2dqqs',
  },
  {
    type: HardwareType.Psu,
    name: 'Corsair CX600',
    weightKg: 2.06,
    watts: 600,
    modular: false,
    pcPartId: 'Cfw323',
  },
  {
    type: HardwareType.Motherboard,
    name: 'Asus Z87-A-C2',
    weightKg: 1.5,
    formFactor: 'ATX',
    chipset: 'Z87',
    socket: 'H3 (LGA 1150)',
    rgb: false,
    pcPartId: 'NhCwrH',
  },
  {
    type: HardwareType.Cpu,
    name: 'Intel core i7 4770K',
    weightKg: 0.1,
    cores: 4,
    threads: 8,
    clockBaseGigahertz: 3.5,
    clockMaxGigahertz: 3.9,
    pcPartId: 'yT2kcf',
  },
  {
    type: HardwareType.Ram,
    name: 'Kingston HyperX Genesis Grey',
    memoryGigabytes: 4,
    memoryType: 'DDR3',
    clockBaseGigahertz: 1.6,
    rgb: false,
    count: 2,
    pcPartId: 'BDR48d',
  },
  {
    type: HardwareType.Ram,
    name: 'Corsair Value Select',
    memoryGigabytes: 8,
    memoryType: 'DDR3',
    clockBaseGigahertz: 1.6,
    rgb: false,
    count: 2,
    priceEuro: 37,
    added: true,
    pcPartId: '8TQypg',
  },
  {
    type: HardwareType.Gpu,
    name: 'NVIDIA Geforce GTX 770',
    memoryGigabytes: 2,
    cudaCores: 1536,
    clockBaseGigahertz: 1.046,
    clockMaxGigahertz: 1.085,
    pcPartId: 'JsqdnQ',
  },
  {
    type: HardwareType.Storage,
    name: 'Seagate Barracuda 7200.14',
    medium: StorageMedium.SataHdd,
    capacityTerabytes: 2,
    removed: true,
    pcPartId: 'CVNp99',
  },
  {
    type: HardwareType.Storage,
    name: 'Crucial M500',
    medium: StorageMedium.SataSsd,
    capacityTerabytes: 0.25,
    pcPartId: 'vfqdnQ',
  },
  {
    type: HardwareType.Storage,
    name: 'Samsung 860 EVO',
    medium: StorageMedium.SataSsd,
    capacityTerabytes: 0.5,
    priceEuro: 71,
    added: true,
    removed: true,
    pcPartId: '6yKcCJ',
  },
  {
    type: HardwareType.Storage,
    name: 'Samsung 870 EVO',
    medium: StorageMedium.SataSsd,
    capacityTerabytes: 2,
    priceEuro: 180,
    added: true,
    pcPartId: '3CmmP6',
  },
  {
    type: HardwareType.Aio,
    name: 'Corsair Hydro series H60',
    sizeCm: 120,
    length: 1,
    rgb: false,
    pcPartId: 'KkjJ7P',
  },
  { type: HardwareType.Fan, name: '(from AIO)', sizeCm: 120, rgb: false },
  { type: HardwareType.Fan, name: 'Antec TwoCool 120 mm', sizeCm: 120, rgb: false, count: 2, pcPartId: 'MqjG3C' },
  { type: HardwareType.Cd, name: '' },
];

export const OLD_HARDWARE_PRICE = 1150;

export const NEW_HARDWARE: HardwarePrebuiltRow[] = [
  {
    type: HardwareType.Case,
    name: 'Lian Li O11 Dynamic EVO XL Black',
    widthCm: 304,
    lengthCm: 522,
    heightCm: 532,
    rgb: true,
    weightKg: 17,
    priceEuro: 240,
    pcPartId: 'jwDQzy',
  },
  {
    type: HardwareType.Psu,
    name: 'Corsair HX1000i 80PLUS Platinum',
    watts: 1000,
    modular: true,
    priceEuro: 234,
    pcPartId: 'LTmNnQ',
  },
  {
    type: HardwareType.Motherboard,
    name: 'MSI MPG X870E Carbon WiFi',
    formFactor: 'ATX',
    chipset: 'X870E',
    socket: 'AM5 (LGA 1718)',
    rgb: true,
    priceEuro: 469,
    pcPartId: 'dGWJ7P',
  },
  {
    type: HardwareType.Cpu,
    name: 'AMD Ryzen 9 9950X3D',
    cores: 16,
    threads: 32,
    clockBaseGigahertz: 4.3,
    clockMaxGigahertz: 5.7,
    //multiThread: 70204,
    //singleThread: 4738,
    priceEuro: 679,
    pcPartId: 'Pk62FT',
  },
  {
    type: HardwareType.Ram,
    name: 'Corsair Vengeance RGB Black',
    memoryType: 'DDR5',
    memoryGigabytes: 32,
    clockBaseGigahertz: 4.8,
    rgb: true,
    count: 2,
    //capacity: 64,
    //latency: 'CL30',
    priceEuro: 254 / 2, // Per count
    pcPartId: 'V4grxr',
  },
  {
    type: HardwareType.Gpu,
    name: 'NVIDIA PNY RTX A-Series RTX A5000',
    memoryGigabytes: 24,
    cudaCores: 8192,
    tensorCores: 256,
    clockBaseGigahertz: 1.17,
    clockMaxGigahertz: 1.695,
    //rating: 22922,
    priceEuro: 0,
    pcPartId: 'B2ddnQ',
  },
  {
    type: HardwareType.Storage,
    name: 'Crucial P310',
    medium: StorageMedium.NvmeSsd,
    capacityTerabytes: 2,
    priceEuro: 117,
    pcPartId: 'hh4Zxr',
  },
  {
    type: HardwareType.Aio,
    name: 'Arctic Liquid Freezer III Pro',
    sizeCm: 140,
    length: 3,
    rgb: true,
    priceEuro: 110,
    pcPartId: 'd3n9TW',
  },
  {
    type: HardwareType.Fan,
    name: 'Lian Li Uni FAN SL-Infinity',
    sizeCm: 140,
    rgb: true,
    priceEuro: 30,
    count: 9,
    pcPartId: 'CVQKHx',
  },
  {
    type: HardwareType.Fan,
    name: 'Lian Li Uni FAN SL-Infinity',
    sizeCm: 120,
    rgb: true,
    priceEuro: 30,
    pcPartId: '2hzhP6',
  },
  {
    type: HardwareType.Hub,
    name: 'Lian Li Uni HUB SL-Infinity',
    ports: 4,
    priceEuro: 40,
    pcPartId: 'kjh2FT',
  },
];
