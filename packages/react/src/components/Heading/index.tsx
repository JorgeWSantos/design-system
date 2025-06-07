// Heading.tsx
import { theme } from '../../styles';
import { StyledHeading } from './styles';
import { HeadingProps } from './types';

export const sizeVariants = {
  sm: theme.fontSizes.xl,
  md: theme.fontSizes['2xl'],
  lg: theme.fontSizes['4xl'],
  '2xl': theme.fontSizes['5xl'],
  '3xl': theme.fontSizes['6xl'],
  '4xl': theme.fontSizes['7xl'],
  '5xl': theme.fontSizes['8xl'],
  '6xl': theme.fontSizes['9xl'],
};

export type SizeVariants = keyof typeof sizeVariants;

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
