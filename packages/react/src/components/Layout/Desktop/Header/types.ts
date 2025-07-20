import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledHeader } from './styles';
import { FontWeightTypes } from 'types/tipography';

export interface HeaderButtonProps {
  icon: ReactNode;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}

export interface HeaderProps extends ComponentProps<typeof StyledHeader> {
  as?: ElementType;
  text: string;
  subTitle?: string;
  isActive?: boolean;
  fontWeight?: FontWeightTypes;
  buttons?: HeaderButtonProps[];
}
