import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledRoundedButton } from './styles';

export type RoundedButtonVariants =
  | 'primary'
  | 'outline'
  | 'secondary'
  | 'tertiary'
  | 'outline-white-25';

export interface RoundedButtonProps extends ComponentProps<typeof StyledRoundedButton> {
  as?: ElementType;
  children: ReactNode;
  disabled?: boolean;
  width?: string;
  height?: string;
  isActive?: boolean;
  variant?: RoundedButtonVariants;
}
