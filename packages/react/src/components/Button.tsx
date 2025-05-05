import styled, { css } from 'styled-components'
import { theme } from '../styles/global.css'
import { ComponentProps, ElementType, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary'
type Size = 'sm' | 'md'

interface ButtonStyleProps {
  variant?: Variant
  size?: Size
}

export const Button = styled.button<ButtonStyleProps>`
  all: unset;
  border-radius: ${theme.radii.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  font-family: ${theme.fonts.default};
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  padding: 0 ${theme.space[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.space[2]};
  cursor: pointer;

  svg {
    width: ${theme.space[4]};
    height: ${theme.space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ variant }) =>
    (variant === 'primary' || !variant) &&
    css`
      color: ${theme.colors.white};
      background: ${theme.colors.ignite300};

      &:not(:disabled):hover {
        background: ${theme.colors.ignite300};
      }

      &:disabled {
        background-color: ${theme.colors.gray200};
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${theme.colors.ignite300};
      border: 2px solid ${theme.colors.ignite500};

      &:not(:disabled):hover {
        background: ${theme.colors.ignite500};
        color: ${theme.colors.white};
      }

      &:disabled {
        color: ${theme.colors.gray200};
        border-color: ${theme.colors.gray200};
      }
    `}

  ${({ variant }) =>
    variant === 'tertiary' &&
    css`
      color: ${theme.colors.gray100};

      &:not(:disabled):hover {
        color: ${theme.colors.white};
      }

      &:disabled {
        color: ${theme.colors.gray600};
      }
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      height: 38px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      height: 46px;
    `}
`

export interface ButtonProps extends ComponentProps<'button'> {
  as?: ElementType
  variant?: Variant
  size?: Size
  children: ReactNode
}
