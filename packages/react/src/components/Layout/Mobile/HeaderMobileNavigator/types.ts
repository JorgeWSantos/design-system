import React from 'react';
import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledNavigatorMobile } from './styles';

export interface HeaderMobileNavigatorButtonProps {
  icon: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}
export interface HeaderMobileNavigatorProps
  extends ComponentProps<typeof StyledNavigatorMobile> {
  as?: ElementType;
  onGoBack?: () => void;
  children?: ReactNode;
  hasBackButton?: boolean;
  hasSearch?: boolean;
  headingText?: string;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  buttons?: HeaderMobileNavigatorButtonProps[];
  isActive?: boolean;
}
