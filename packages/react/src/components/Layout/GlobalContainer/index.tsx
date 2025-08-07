import React, { ComponentProps } from 'react';
import { StyledGlobalContainer } from './styles.js';
import { Footer } from '@components/Layout/GlobalContainer/Footer/index.js';

interface GlobalContainerProps extends ComponentProps<typeof StyledGlobalContainer> {
  children: React.ReactNode;
}

export const GlobalContainer = ({ children, ...rest }: GlobalContainerProps) => {
  return (
    <StyledGlobalContainer {...rest}>
      {children}

      <Footer />
    </StyledGlobalContainer>
  );
};
