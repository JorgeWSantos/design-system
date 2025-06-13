import { breakpoints } from '@abqm-ds/tokens';
import { useEffect, useState } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'mini_desktop' | 'desktop' | 'wide';

interface DeviceInfo {
  deviceType: DeviceType;
  isTablet: boolean;
  isTabletOrMobile: boolean;
  isMiniDesktop: boolean;
  isDesktop: boolean;
  isWide: boolean;
}

export function useDeviceType(): DeviceInfo {
  const getDeviceType = (width: number): DeviceType => {
    if (width <= breakpoints.md) return 'mobile';
    if (width <= breakpoints.lg) return 'tablet';
    if (width <= breakpoints.xl) return 'mini_desktop';
    if (width <= breakpoints.xxl) return 'desktop';
    return 'wide';
  };

  const [deviceType, setDeviceType] = useState<DeviceType>(
    getDeviceType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    deviceType,
    isTablet: deviceType === 'tablet',
    isTabletOrMobile: ['tablet', 'mobile'].includes(deviceType),
    isMiniDesktop: deviceType === 'mini_desktop',
    isDesktop: deviceType === 'desktop',
    isWide: deviceType === 'wide',
  };
}
