import { ComponentProps, ElementType, ReactElement } from 'react';
import { BoxContainer } from './styles';

export interface BoxProps extends ComponentProps<typeof BoxContainer> {
  as?: ElementType;
  children?: ReactElement;
}

export const Box = ({ children, style, ...rest }: BoxProps) => {
  return (
    <BoxContainer style={style} {...rest}>
      {children}
    </BoxContainer>
  );
};

Box.displayName = 'Box';
