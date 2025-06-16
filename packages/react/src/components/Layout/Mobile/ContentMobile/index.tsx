import React, { ComponentProps } from 'react';
import { ContainerMobile, MobileScroll } from './styles';

interface ContentMobileProps extends ComponentProps<typeof ContainerMobile> {
  headerMobileNavigator?: React.ReactNode;
  children: React.ReactNode;
}

export const ContentMobile = ({
  headerMobileNavigator,
  children,
}: ContentMobileProps) => {
  return (
    <ContainerMobile>
      {headerMobileNavigator}
      <MobileScroll>{children}</MobileScroll>
    </ContainerMobile>
  );
};
