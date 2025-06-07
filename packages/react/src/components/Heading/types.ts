import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledHeading } from './styles';
import { FontWeightTypes } from 'types/tipography';
import { SizeVariants } from '.';

export interface HeadingProps extends ComponentProps<typeof StyledHeading> {
  as?: ElementType;
  children: ReactNode;
  fontSize?: SizeVariants;
  fontWeight?: FontWeightTypes;
  color?: string;
}
