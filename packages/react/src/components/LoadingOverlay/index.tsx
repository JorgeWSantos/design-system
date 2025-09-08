import React, { ComponentProps, JSX } from 'react';
import { StyledOverlayLoading } from './styles';
import { ActivityIndicator } from '@components/ActivityIndicator';
import { colors } from '@abqm-ds/tokens';
import { useDeviceType } from 'hooks/useDeviceType';

export interface LoadingOverlayProps extends ComponentProps<typeof StyledOverlayLoading> {
  withoutBackground?: boolean;
  sizes?: {
    mobile: number;
    desktop: number;
  };
}

export function LoadingOverlay({
  withoutBackground,
  sizes,
}: LoadingOverlayProps): JSX.Element {
  const { isTabletOrMobile } = useDeviceType();

  let size = isTabletOrMobile ? 30 : 40;

  if (sizes) {
    size = isTabletOrMobile ? sizes.mobile : sizes.desktop;
  }

  return (
    <StyledOverlayLoading $withoutBackground={withoutBackground}>
      <ActivityIndicator width={size} height={size} color={colors.white75} />
    </StyledOverlayLoading>
  );
}

LoadingOverlay.displayName = 'LoadingOverlay';
