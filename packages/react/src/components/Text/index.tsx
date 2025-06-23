import { StyledText } from './styles';
import { TextProps } from './types';

export function Text({
  children,
  fontSize = 'md',
  fontWeight,
  lineHeight,
  color,
  as = 'p',
  disabled,
  ...rest
}: TextProps) {
  return (
    <StyledText
      as={as}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $disabled={disabled}
      $color={color}
      {...rest}
    >
      {children}
    </StyledText>
  );
}

Text.displayName = 'Text';

export * from './types';
