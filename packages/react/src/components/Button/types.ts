import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledButton } from './styles';

export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Size = 'sm' | 'md';

export interface ButtonProps extends ComponentProps<'button'> {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}
