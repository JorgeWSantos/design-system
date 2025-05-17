import { ComponentProps, ElementType, ReactNode } from 'react'

import { Size, StyledButton, Variant } from './styles'


export interface ButtonProps extends ComponentProps<'button'> {
  as?: ElementType
  variant?: Variant
  size?: Size
  children: ReactNode
}

export const Button = ({ variant, children, size }: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
    >
      {children}
    </StyledButton>
  )
}

Button.displayName = 'Button'
