import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledLink } from './styles';
import { FontSizeTypes, FontWeightTypes, LineHeightTypes } from 'types/tipography';

export interface LinkProps extends ComponentProps<typeof StyledLink> {
  as?: ElementType;
  children: ReactNode;
  color?: string;
  fontSize?: FontSizeTypes;
  fontWeight?: FontWeightTypes;
  lineHeight?: LineHeightTypes;
  disabled?: boolean;
}
