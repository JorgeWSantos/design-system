import React, { JSX } from 'react';
import { StyledOverlayLoading } from './styles';
import { ActivityIndicator } from '@components/ActivityIndicator';
import { colors } from '@abqm-ds/tokens';
import { useDeviceType } from 'hooks/useDeviceType';

export function LoadingOverlay(): JSX.Element {
  const { isTabletOrMobile } = useDeviceType();

  const size = isTabletOrMobile ? 30 : 40;

  return (
    <StyledOverlayLoading>
      <ActivityIndicator width={size} height={size} color={colors.white75} />
    </StyledOverlayLoading>
  );
}

LoadingOverlay.displayName = 'LoadingOverlay';
