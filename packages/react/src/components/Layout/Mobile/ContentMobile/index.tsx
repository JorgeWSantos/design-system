import React, { ComponentProps } from 'react';
import { ContainerMobile, MobileScroll } from './styles';

interface ContentMobileProps extends ComponentProps<typeof ContainerMobile> {
  headerMobileNavigator?: React.ReactNode;
  children: React.ReactNode;
  headerNoGap?: boolean;
}

export const ContentMobile = ({
  headerMobileNavigator,
  children,
  headerNoGap,
}: ContentMobileProps) => {
  return (
    <ContainerMobile $headerNoGap={!!headerNoGap}>
      {headerMobileNavigator}
      <MobileScroll $headerNoGap={!!headerNoGap}>{children}</MobileScroll>
    </ContainerMobile>
  );
};
