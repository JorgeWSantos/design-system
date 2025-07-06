import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledNavigatorDesktop } from './styles';

export interface HeaderNavigatorDesktopProps
  extends ComponentProps<typeof StyledNavigatorDesktop> {
  as?: ElementType;
  onGoBack?: () => void;
  children?: ReactNode;
  hasBackButton?: boolean;
  title: string;
  subtitle?: string;
}
