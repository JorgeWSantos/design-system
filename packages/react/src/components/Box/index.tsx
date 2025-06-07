import { BoxContainer } from './styles';
import { BoxProps } from './types';

export const Box = ({ children, style, ...rest }: BoxProps) => {
  return (
    <BoxContainer style={style} {...rest}>
      {children}
    </BoxContainer>
  );
};

Box.displayName = 'Box';

export * from './types';
