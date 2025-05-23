import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledText } from './styles';
import { FontSizeTypes, FontWeightTypes, LineHeightTypes } from 'types/tipography';

export interface TextProps extends ComponentProps<typeof StyledText> {
  as?: ElementType;
  children: ReactNode;
  size?: FontSizeTypes;
  fontWeight?: FontWeightTypes;
  lineHeight?: LineHeightTypes;
}

export function Text({
  children,
  size = 'md',
  fontWeight,
  lineHeight,
  as = 'p',
  ...rest
}: TextProps) {
  return (
    <StyledText
      as={as}
      size={size}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </StyledText>
  );
}

Text.displayName = 'Text';
