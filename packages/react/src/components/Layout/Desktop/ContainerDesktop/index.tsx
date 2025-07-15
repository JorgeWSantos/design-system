import React, { ComponentProps } from 'react';
import { StyledContainerDesktop } from './styles';

interface ContainerDesktopProps extends ComponentProps<typeof StyledContainerDesktop> {
  children: React.ReactNode;
}

export const ContainerDesktop = ({ children, ...rest }: ContainerDesktopProps) => {
  return <StyledContainerDesktop {...rest}>{children}</StyledContainerDesktop>;
};
