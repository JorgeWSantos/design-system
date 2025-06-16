import React from 'react';
import { StyledContainerDesktop } from './styles';

interface ContainerDesktopProps {
  children: React.ReactNode;
}

export const ContainerDesktop = ({ children }: ContainerDesktopProps) => {
  return <StyledContainerDesktop>{children}</StyledContainerDesktop>;
};
