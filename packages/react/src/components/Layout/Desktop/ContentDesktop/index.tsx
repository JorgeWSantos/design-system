import React, { ComponentProps } from 'react';
import { ContainerDesktop, ContentBox } from './styles';
import { InforBar } from './InfoBar';
import { LoadingOverlay } from '@components/LoadingOverlay';
import { FooterTypes } from '@components/Layout/GlobalContainer/Footer';

export type ContentDesktopBackgroundVariant = 'light' | 'dark';

export interface ContentDektopProps extends ComponentProps<typeof ContainerDesktop> {
  header?: React.ReactNode;
  headerNavigator?: React.ReactNode;
  children: React.ReactNode;
  count?: number;
  contentBoxStyles?: React.CSSProperties;
  isLoading?: boolean;
  footerType?: FooterTypes;
  backgroundVariant?: ContentDesktopBackgroundVariant;
}

export const ContentDektop = ({
  header,
  children,
  contentBoxStyles,
  headerNavigator,
  count,
  isLoading = false,
  footerType,
  backgroundVariant = 'light',
  ...rest
}: ContentDektopProps) => {
  // This is a workaround to set the height of the content based on the screen height.
  // [heightScreen, percentageHeight] = [1300, 0.93];

  const sumByFooterType = () => {
    switch (footerType) {
      case 'large':
        return 0;
      case 'medium':
        return 0.025;
      case 'small':
        return 0;
      default:
        return 0;
    }
  };

  const heightFactor =
    [
      [1300, 0.93 + sumByFooterType()],
      [1000, 0.92 + sumByFooterType()],
      [900, 0.9 + sumByFooterType()],
      [800, 0.89 + sumByFooterType()],
      [750, 0.89 + sumByFooterType()],
      [700, 0.88 + sumByFooterType()],
      [600, 0.87 + sumByFooterType()],
    ].find(([limit]) => window.innerHeight >= limit)?.[1] ?? 0.84;

  // console.log('heightFactor', heightFactor);
  // console.log('window.innerHeight', window.innerHeight);

  return (
    <ContainerDesktop $maxHeight={`calc(100dvh * ${heightFactor})`} {...rest}>
      {header}
      <ContentBox
        style={contentBoxStyles}
        $removeRoundedBottom={typeof count === 'number'}
        $backgroundVariant={backgroundVariant}
      >
        {isLoading && <LoadingOverlay />}
        <>{headerNavigator}</>
        <>{children}</>
      </ContentBox>
      {typeof count === 'number' && <InforBar count={count} />}
    </ContainerDesktop>
  );
};
