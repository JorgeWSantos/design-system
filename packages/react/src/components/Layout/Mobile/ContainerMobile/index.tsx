import React from 'react';
import { StyledContainerMobile } from './styles.js';

interface ContainerMobileProps {
  children: React.ReactNode;
}

export const ContainerMobile = ({ children }: ContainerMobileProps) => {
  return <StyledContainerMobile>{children}</StyledContainerMobile>;
};
