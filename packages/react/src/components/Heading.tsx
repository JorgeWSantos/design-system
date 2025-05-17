// Heading.tsx
import styled, { css } from 'styled-components';
import { ComponentProps, ElementType, ReactNode } from 'react';
import { theme } from '../styles';

const sizeVariants = {
  sm: theme.fontSizes.xl,
  md: theme.fontSizes['2xl'],
  lg: theme.fontSizes['4xl'],
  '2xl': theme.fontSizes['5xl'],
  '3xl': theme.fontSizes['6xl'],
  '4xl': theme.fontSizes['7xl'],
  '5xl': theme.fontSizes['8xl'],
  '6xl': theme.fontSizes['9xl'],
};

const weightVariants = {
  regular: theme.fontWeights.regular,
  medium: theme.fontWeights.medium,
  semi: theme.fontWeights.semiBold,
  bold: theme.fontWeights.bold,
};

type SizeVariants = keyof typeof sizeVariants;
type WeightVariants = keyof typeof weightVariants;

interface StyledHeadingProps {
  size?: SizeVariants;
  weight?: WeightVariants;
}

const StyledHeading = styled.h2<StyledHeadingProps>`
  font-family: ${theme.fonts.default};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.shorter};
  margin: 0;
  color: ${theme.colors.gray100};

  ${({ size }) =>
    size &&
    css`
      font-size: ${sizeVariants[size]};
    `}

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weightVariants[weight]};
    `}
`;

export interface HeadingProps extends ComponentProps<typeof StyledHeading> {
  as?: ElementType;
  children: ReactNode;
  size?: SizeVariants;
  weight?: WeightVariants;
}

export function Heading({
  children,
  size = 'md',
  as = 'h2',
  weight,
  ...rest
}: HeadingProps) {
  return (
    <StyledHeading as={as} size={size} weight={weight} {...rest}>
      {children}
    </StyledHeading>
  );
}

Heading.displayName = 'Heading';
