import React, { ComponentProps } from 'react';
import { ContainerMobile, MobileScroll } from './styles';
import { LoadingOverlay } from '@components/LoadingOverlay';

interface ContentMobileProps extends ComponentProps<typeof ContainerMobile> {
  headerMobileNavigator?: React.ReactNode;
  children: React.ReactNode;
  headerNoGap?: boolean;
  contentMobileBoxStyles?: React.CSSProperties;
  hasFooterButtons?: boolean;
  isLoading?: boolean;
  backgroundVariant?: 'light' | 'dark' | 'medium';
}

export const ContentMobile = ({
  headerMobileNavigator,
  children,
  headerNoGap,
  contentMobileBoxStyles,
  //usado quando existem botões no footer e é substituído pelo footer padrão
  hasFooterButtons,
  isLoading,
  backgroundVariant = 'light',
  ...rest
}: ContentMobileProps) => {
  return (
    <ContainerMobile
      $headerNoGap={!!headerNoGap}
      $hasFooterButtons={!!hasFooterButtons}
      {...rest}
    >
      {headerMobileNavigator}
      <MobileScroll
        $headerNoGap={!!headerNoGap}
        $backgroundVariant={backgroundVariant}
        style={contentMobileBoxStyles}
      >
        {isLoading && <LoadingOverlay />}
        {children}
      </MobileScroll>
    </ContainerMobile>
  );
};
