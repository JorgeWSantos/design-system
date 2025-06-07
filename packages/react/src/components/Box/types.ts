import { ComponentProps, ElementType, ReactNode } from 'react';
import { BoxContainer } from './styles';

export interface BoxProps extends ComponentProps<typeof BoxContainer> {
  as?: ElementType;
  children?: ReactNode;
}
