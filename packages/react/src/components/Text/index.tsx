import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledText } from './styles';
import { FontSizeTypes, FontWeightTypes, LineHeightTypes } from 'types/tipography';

export interface TextProps extends ComponentProps<typeof StyledText> {
  as?: ElementType;
  children: ReactNode;
  fontSize?: FontSizeTypes;
  fontWeight?: FontWeightTypes;
  lineHeight?: LineHeightTypes;
}

export function Text({
  children,
  fontSize = 'md',
  fontWeight,
  lineHeight,
  color,
  as = 'p',
  ...rest
}: TextProps) {
  return (
    <StyledText
      as={as}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      color={color}
      {...rest}
    >
      {children}
    </StyledText>
  );
}

Text.displayName = 'Text';
