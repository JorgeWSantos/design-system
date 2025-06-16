import React, { ComponentProps } from 'react';
import { ContainerDesktop, ContentBox } from './styles';

interface ContentDektopProps extends ComponentProps<typeof ContainerDesktop> {
  header?: React.ReactNode;
  children: React.ReactNode;
}

export const ContentDektop = ({ header, children }: ContentDektopProps) => {
  const heightFactor =
    window.innerHeight < 800
      ? 0.86
      : window.innerHeight >= 1300
      ? 0.9
      : window.innerHeight >= 900
      ? 0.9
      : window.innerHeight >= 800
      ? 0.88
      : 0.84;

  return (
    <ContainerDesktop $maxHeight={`calc(100dvh * ${heightFactor})`}>
      {header}
      <ContentBox>{children}</ContentBox>
    </ContainerDesktop>
  );
};
