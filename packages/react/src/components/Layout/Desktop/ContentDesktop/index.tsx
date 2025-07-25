import React, { ComponentProps } from 'react';
import { ContainerDesktop, ContentBox } from './styles';
import { InforBar } from './InfoBar';

interface ContentDektopProps extends ComponentProps<typeof ContainerDesktop> {
  header?: React.ReactNode;
  headerNavigator?: React.ReactNode;
  children: React.ReactNode;
  count?: number;
  contentBoxStyles?: React.CSSProperties;
}

export const ContentDektop = ({
  header,
  children,
  contentBoxStyles,
  headerNavigator,
  count,
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
      <ContentBox
        style={contentBoxStyles}
        $hideOverflow={!!headerNavigator}
        $removeRoundedBottom={typeof count === 'number'}
      >
        <>{headerNavigator}</>
        <>{children}</>
      </ContentBox>
      {typeof count === 'number' && <InforBar count={count} />}
    </ContainerDesktop>
  );
};
