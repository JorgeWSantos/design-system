// Heading.tsx
import { ComponentProps, ElementType, ReactNode } from 'react';
import { theme } from '../../styles';
import { FontWeightTypes } from 'types/tipography';
import { StyledHeading } from './styles';

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

export interface HeadingProps extends ComponentProps<typeof StyledHeading> {
  as?: ElementType;
  children: ReactNode;
  fontSize?: SizeVariants;
  fontWeight?: FontWeightTypes;
  color?: string;
}

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
