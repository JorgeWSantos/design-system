// Heading.tsx
import { StyledHeading } from './styles';
import { HeadingProps } from './types';

export function Heading({
  children,
  fontSize = 'md',
  as = 'h2',
  fontWeight = 'semiBold',
  color,
  ...rest
}: HeadingProps) {
  return (
    <StyledHeading as={as} $size={fontSize} $weight={fontWeight} $color={color} {...rest}>
      {children}
    </StyledHeading>
  );
}

Heading.displayName = 'Heading';

export * from './types';
