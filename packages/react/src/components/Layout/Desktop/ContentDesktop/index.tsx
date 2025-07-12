import React, { ComponentProps } from 'react';
import { ContainerDesktop, ContentBox } from './styles';

interface ContentDektopProps extends ComponentProps<typeof ContainerDesktop> {
  header?: React.ReactNode;
  headerNavigator?: React.ReactNode;
  children: React.ReactNode;
  contentBoxStyles?: React.CSSProperties;
}

export const ContentDektop = ({
  header,
  children,
  contentBoxStyles,
  headerNavigator,
  ...rest
}: ContentDektopProps) => {
  // This is a workaround to set the height of the content based on the screen height.
  // [heightScreen, percentageHeight] = [1300, 0.93];
  const heightFactor =
    [
      [1300, 0.93],
      [1000, 0.92],
      [900, 0.9],
      [800, 0.89],
      [700, 0.88],
      [600, 0.87],
    ].find(([limit]) => window.innerHeight >= limit)?.[1] ?? 0.84;

  return (
    <ContainerDesktop $maxHeight={`calc(100dvh * ${heightFactor})`} {...rest}>
      {header}
      <ContentBox style={contentBoxStyles} $hideOverflow={!!headerNavigator}>
        <>{headerNavigator}</>
        <>{children}</>
      </ContentBox>
    </ContainerDesktop>
  );
};
