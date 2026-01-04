import React from 'react';

import { NeofetchCard } from '../../../components/card/NeofetchCard';

// $ neofetch --disable uptime packages icons

const NEOFETCH_RAW: string = `[?25l[?7l[0m[31m[1m            .-/+oossssoo+/-.
        \`:+ssssssssssssssssss+:\`
      -+ssssssssssssssssssyyssss+-
    .ossssssssssssssssss[37m[0m[1mdMMMNy[0m[31m[1msssso.
   /sssssssssss[37m[0m[1mhdmmNNmmyNMMMMh[0m[31m[1mssssss/
  +sssssssss[37m[0m[1mhm[0m[31m[1myd[37m[0m[1mMMMMMMMNddddy[0m[31m[1mssssssss+
 /ssssssss[37m[0m[1mhNMMM[0m[31m[1myh[37m[0m[1mhyyyyhmNMMMNh[0m[31m[1mssssssss/
.ssssssss[37m[0m[1mdMMMNh[0m[31m[1mssssssssss[37m[0m[1mhNMMMd[0m[31m[1mssssssss.
+ssss[37m[0m[1mhhhyNMMNy[0m[31m[1mssssssssssss[37m[0m[1myNMMMy[0m[31m[1msssssss+
oss[37m[0m[1myNMMMNyMMh[0m[31m[1mssssssssssssss[37m[0m[1mhmmmh[0m[31m[1mssssssso
oss[37m[0m[1myNMMMNyMMh[0m[31m[1msssssssssssssshmmmh[0m[31m[1mssssssso
+ssss[37m[0m[1mhhhyNMMNy[0m[31m[1mssssssssssss[37m[0m[1myNMMMy[0m[31m[1msssssss+
.ssssssss[37m[0m[1mdMMMNh[0m[31m[1mssssssssss[37m[0m[1mhNMMMd[0m[31m[1mssssssss.
 /ssssssss[37m[0m[1mhNMMM[0m[31m[1myh[37m[0m[1mhyyyyhdNMMMNh[0m[31m[1mssssssss/
  +sssssssss[37m[0m[1mdm[0m[31m[1myd[37m[0m[1mMMMMMMMMddddy[0m[31m[1mssssssss+
   /sssssssssss[37m[0m[1mhdmNNNNmyNMMMMh[0m[31m[1mssssss/
    .ossssssssssssssssss[37m[0m[1mdMMMNy[0m[31m[1msssso.
      -+sssssssssssssssss[37m[0m[1myyy[0m[31m[1mssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.[0m
[20A[9999999D[43C[0m[1m[31m[1mflorian[0m@[31m[1mflorian-PC-Linux[0m 
[43C[0m------------------------[0m 
[43C[0m[31m[1mOS[0m[0m:[0m Ubuntu 24.04.3 LTS x86_64[0m 
[43C[0m[31m[1mHost[0m[0m:[0m MS-7E49 1.0[0m 
[43C[0m[31m[1mKernel[0m[0m:[0m 6.8.0-90-generic[0m 
[43C[0m[31m[1mShell[0m[0m:[0m bash 5.2.21[0m 
[43C[0m[31m[1mResolution[0m[0m:[0m 1920x1080[0m 
[43C[0m[31m[1mDE[0m[0m:[0m GNOME[0m 
[43C[0m[31m[1mWM[0m[0m:[0m Mutter[0m 
[43C[0m[31m[1mWM Theme[0m[0m:[0m Adwaita[0m 
[43C[0m[31m[1mTheme[0m[0m:[0m Yaru [GTK2/3][0m 
[43C[0m[31m[1mTerminal[0m[0m:[0m gnome-terminal[0m 
[43C[0m[31m[1mCPU[0m[0m:[0m AMD Ryzen 9 9950X3D (32) @ 5.752GHz[0m 
[43C[0m[31m[1mGPU[0m[0m:[0m AMD ATI 77:00.0 Device 13c0[0m 
[43C[0m[31m[1mMemory[0m[0m:[0m 61828MiB[0m 

[43C[30m[40m   [31m[41m   [32m[42m   [33m[43m   [34m[44m   [35m[45m   [36m[46m   [37m[47m   [m
[43C[38;5;8m[48;5;8m   [38;5;9m[48;5;9m   [38;5;10m[48;5;10m   [38;5;11m[48;5;11m   [38;5;12m[48;5;12m   [38;5;13m[48;5;13m   [38;5;14m[48;5;14m   [38;5;15m[48;5;15m   [m


[?25h[?7h`;

export const NeofetchCardContent: React.FC = () => {
  return <NeofetchCard neofetchRaw={NEOFETCH_RAW} />;
};
