// Heading.tsx
import styled, { css } from 'styled-components';
import { ComponentProps, ElementType, ReactNode } from 'react';
import { theme } from '../styles';
import { fontWeightTypes, FontWeightTypes } from 'types/tipography';

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

type SizeVariants = keyof typeof sizeVariants;

interface StyledHeadingProps {
  size?: SizeVariants;
  weight?: FontWeightTypes;
}

const StyledHeading = styled.h2<StyledHeadingProps>`
  font-family: ${theme.fonts.default};
  line-height: ${theme.lineHeights.shorter};
  margin: 0;
  color: ${theme.colors.gray100};
  letter-spacing: -0.075rem;

  // semi default
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${fontWeightTypes[weight]};
    `}

  ${({ size }) =>
    size &&
    css`
      font-size: ${sizeVariants[size]};
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      letter-spacing: -0.105rem;
    `}
`;

export interface HeadingProps extends ComponentProps<typeof StyledHeading> {
  as?: ElementType;
  children: ReactNode;
  size?: SizeVariants;
  weight?: FontWeightTypes;
}

export function Heading({
  children,
  size = 'md',
  as = 'h2',
  weight = 'semiBold',
  ...rest
}: HeadingProps) {
  return (
    <StyledHeading as={as} size={size} weight={weight} {...rest}>
      {children}
    </StyledHeading>
  );
}

Heading.displayName = 'Heading';
