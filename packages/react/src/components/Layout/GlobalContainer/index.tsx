import React from 'react';
import { StyledGlobalContainer } from './styles.js';

interface GlobalContainerProps {
  children: React.ReactNode;
}

export const GlobalContainer = ({ children }: GlobalContainerProps) => {
  return <StyledGlobalContainer>{children}</StyledGlobalContainer>;
};
