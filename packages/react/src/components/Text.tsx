import { ComponentProps, ElementType, ReactNode } from 'react'
import { css, styled } from 'styled-components'
import { theme } from '../styles'

const sizeVariants = {
  xxs: theme.fontSizes.xxs,
  xs: theme.fontSizes.xs,
  sm: theme.fontSizes.sm,
  md: theme.fontSizes.md,
  lg: theme.fontSizes.lg,
  xl: theme.fontSizes.xl,
  '2xl': theme.fontSizes['2xl'],
  '4xl': theme.fontSizes['4xl'],
  '5xl': theme.fontSizes['5xl'],
  '6xl': theme.fontSizes['6xl'],
  '7xl': theme.fontSizes['7xl'],
  '8xl': theme.fontSizes['8xl'],
  '9xl': theme.fontSizes['9xl'],
}

type SizeVariants = keyof typeof sizeVariants

interface StyledHeadingProps {
  size?: SizeVariants
}

const StyledText = styled.p<StyledHeadingProps>`
  font-family: ${theme.fonts.default};
  line-height: ${theme.lineHeights.base};
  margin: 0;
  color: ${theme.colors.gray100};

  ${({ size }) =>
    size &&
    css`
      font-size: ${sizeVariants[size]};
    `}
`

export interface TextProps extends ComponentProps<typeof StyledText> {
  as?: ElementType
  children: ReactNode
  size?: SizeVariants
}

export function Text({ children, size = 'md', as = 'p', ...rest }: TextProps) {
  return (
    <StyledText as={as} size={size} {...rest}>
      {children}
    </StyledText>
  )
}


Text.displayName = 'Text'
