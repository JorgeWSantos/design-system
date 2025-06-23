import { StyledLink } from './styles';
import { LinkProps } from './types';

export function Link({
  children,
  fontSize = 'md',
  fontWeight,
  lineHeight,
  color,
  as = 'a',
  disabled,
  ...rest
}: LinkProps) {
  return (
    <StyledLink
      as={as}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $disabled={disabled}
      $color={color}
      {...rest}
    >
      {children}
    </StyledLink>
  );
}

Link.displayName = 'Link';

export * from './types';
