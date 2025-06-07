import React, { ComponentProps, ElementType, ReactNode } from 'react';
import { Size, StyledButton, Variant } from './styles';

export interface ButtonProps extends ComponentProps<'button'> {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export const Button = ({ variant, children, size, ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.displayName = 'Button';

export * from './types';
