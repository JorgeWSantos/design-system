import React, { ComponentProps } from 'react';
import { StyledGlobalContainer } from './styles.js';
import { Footer, FooterTypes } from '@components/Layout/GlobalContainer/Footer/index.js';

interface GlobalContainerProps extends ComponentProps<typeof StyledGlobalContainer> {
  children: React.ReactNode;
  footerType?: FooterTypes;
}

export const GlobalContainer = ({
  children,
  footerType,
  ...rest
}: GlobalContainerProps) => {
  return (
    <StyledGlobalContainer {...rest}>
      {children}

      <Footer footerType={footerType} />
    </StyledGlobalContainer>
  );
};
