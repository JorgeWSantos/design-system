import React from 'react';
import { StyledContainerMobile } from './styles.js';

interface ContainerMobileProps
  extends React.ComponentProps<typeof StyledContainerMobile> {
  children: React.ReactNode;
}

export const ContainerMobile = ({ children, ...rest }: ContainerMobileProps) => {
  return <StyledContainerMobile {...rest}>{children}</StyledContainerMobile>;
};
