import React, { ComponentProps } from 'react';
import { ContainerDesktop, ContentBox } from './styles';

interface ContentDektopProps extends ComponentProps<typeof ContainerDesktop> {
  header?: React.ReactNode;
  children: React.ReactNode;
}

export const ContentDektop = ({ header, children }: ContentDektopProps) => {
  // This is a workaround to set the height of the content based on the screen height.
  //[heightScreen, percentageHeight] = [1300, 0.93];
  const heightFactor =
    [
      [1300, 0.93],
      [1000, 0.92],
      [850, 0.9],
      [800, 0.89],
      [700, 0.88],
      [600, 0.87],
    ].find(([limit]) => window.innerHeight >= limit)?.[1] ?? 0.84;

  return (
    <ContainerDesktop $maxHeight={`calc(100dvh * ${heightFactor})`}>
      {header}
      <ContentBox>{children}</ContentBox>
    </ContainerDesktop>
  );
};
