import React, { ComponentProps } from 'react';
import { ContainerMobile, MobileScroll } from './styles';

interface ContentMobileProps extends ComponentProps<typeof ContainerMobile> {
  headerMobileNavigator?: React.ReactNode;
  children: React.ReactNode;
  headerNoGap?: boolean;
  contentMobileBoxStyles?: React.CSSProperties;
  hasFooterButtons?: boolean;
}

export const ContentMobile = ({
  headerMobileNavigator,
  children,
  headerNoGap,
  contentMobileBoxStyles,
  //usado quando existem botões no footer e é substituído pelo footer padrão
  hasFooterButtons,
  ...rest
}: ContentMobileProps) => {
  return (
    <ContainerMobile
      $headerNoGap={!!headerNoGap}
      $hasFooterButtons={!!hasFooterButtons}
      {...rest}
    >
      {headerMobileNavigator}
      <MobileScroll $headerNoGap={!!headerNoGap} style={contentMobileBoxStyles}>
        {children}
      </MobileScroll>
    </ContainerMobile>
  );
};
