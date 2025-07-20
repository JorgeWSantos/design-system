import { StyledHeading } from './styles';
import { HeadingProps } from './types';

export function Heading({
  children,
  fontSize = 'md',
  lineHeight = 'shorter',
  fontWeight = 'semiBold',
  fontFamily = 'default',
  as = 'h2',
  color,
  ...rest
}: HeadingProps) {
  return (
    <StyledHeading
      as={as}
      $size={fontSize}
      $weight={fontWeight}
      $color={color}
      $lineHeight={lineHeight}
      $fontFamily={fontFamily}
      {...rest}
    >
      {children}
    </StyledHeading>
  );
}

Heading.displayName = 'Heading';

export * from './types';
