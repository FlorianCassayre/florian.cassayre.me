import { useEffect, useLayoutEffect } from 'react';

// Credit to Nisharg Shah (https://github.com/react-component/overflow/issues/6#issuecomment-819215239)
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
