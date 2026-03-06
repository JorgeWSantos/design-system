import React, { ComponentProps } from 'react';
import { StyledContainerDesktop } from './styles';

interface ContainerDesktopProps extends ComponentProps<typeof StyledContainerDesktop> {
  children: React.ReactNode;
  isSidebarCollapsed?: boolean;
}

export const ContainerDesktop = ({
  children,
  isSidebarCollapsed,
  ...rest
}: ContainerDesktopProps) => {
  return (
    <StyledContainerDesktop $isSidebarCollapsed={isSidebarCollapsed} {...rest}>
      {children}
    </StyledContainerDesktop>
  );
};
