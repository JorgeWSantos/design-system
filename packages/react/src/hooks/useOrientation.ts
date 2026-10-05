import { useEffect, useState } from 'react';

const LANDSCAPE_QUERY = '(orientation: landscape)';

interface OrientationInfo {
  isLandscape: boolean;
  isPortrait: boolean;
}

const getIsLandscape = () => globalThis.matchMedia(LANDSCAPE_QUERY).matches;

/**
 * Observa a orientação da tela. Diferente de `useDeviceType`, que só reavalia
 * quando o device type muda de faixa, aqui o estado acompanha a rotação.
 *
 * Escuta os três eventos porque nenhum é confiável sozinho: `change` da media
 * query não dispara em viewport emulada (DevTools), `orientationchange` não
 * existe em desktop e `resize` não dispara em alguns browsers mobile na rotação.
 */
export function useOrientation(): OrientationInfo {
  const [isLandscape, setIsLandscape] = useState(getIsLandscape);

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia(LANDSCAPE_QUERY);
    const syncOrientation = () => setIsLandscape(getIsLandscape());

    syncOrientation();

    mediaQuery.addEventListener('change', syncOrientation);
    globalThis.addEventListener('resize', syncOrientation);
    globalThis.addEventListener('orientationchange', syncOrientation);

    return () => {
      mediaQuery.removeEventListener('change', syncOrientation);
      globalThis.removeEventListener('resize', syncOrientation);
      globalThis.removeEventListener('orientationchange', syncOrientation);
    };
  }, []);

  return { isLandscape, isPortrait: !isLandscape };
}
