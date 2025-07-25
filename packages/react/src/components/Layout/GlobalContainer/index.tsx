import React, { ComponentProps } from 'react';
import { StyledGlobalContainer } from './styles.js';
import { Footer } from '@components/Layout/GlobalContainer/Footer/index.js';
import {
  FooterWithButtons,
  FooterWithButtonsPropsType,
} from './FooterWithButtons/index.js';

interface GlobalContainerProps extends ComponentProps<typeof StyledGlobalContainer> {
  children: React.ReactNode;
  footerButtonsMobile?: FooterWithButtonsPropsType;
}

export const GlobalContainer = ({
  children,
  footerButtonsMobile,
  ...rest
}: GlobalContainerProps) => {
  // renderiza botões no footer se houver, mudando o footer padrão
  const hasFooterButtons = footerButtonsMobile && footerButtonsMobile.length > 0;

  return (
    <StyledGlobalContainer {...rest} $hasFooterButtons={hasFooterButtons}>
      {children}

      {hasFooterButtons ? (
        <FooterWithButtons footerButtonsMobile={footerButtonsMobile} />
      ) : (
        <Footer />
      )}
    </StyledGlobalContainer>
  );
};

export type { FooterWithButtonsPropsType };
