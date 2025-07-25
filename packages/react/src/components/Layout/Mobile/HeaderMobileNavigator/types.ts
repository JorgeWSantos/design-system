import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledNavigatorMobile } from './styles';

export interface HeaderMobileNavigatorProps
  extends ComponentProps<typeof StyledNavigatorMobile> {
  as?: ElementType;
  onGoBack?: () => void;
  children?: ReactNode;
  hasBackButton?: boolean;
  hasSearch?: boolean;
  headingText?: string;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
