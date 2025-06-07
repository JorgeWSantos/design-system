import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledHeader } from './styles';
import { FontWeightTypes } from 'types/tipography';

export interface ButtonProps {
  icon: ReactNode;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface HeaderProps extends ComponentProps<typeof StyledHeader> {
  as?: ElementType;
  text: string;
  fontWeight?: FontWeightTypes;
  buttons?: ButtonProps[];
}
