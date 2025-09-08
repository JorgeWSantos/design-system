import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledText } from './styles';
import {
  FontFamilyTypes,
  FontSizeTypes,
  FontWeightTypes,
  LineHeightTypes,
} from 'types/tipography';

export interface TextProps extends ComponentProps<typeof StyledText> {
  as?: ElementType;
  children: ReactNode;
  color?: string;
  fontSize?: FontSizeTypes;
  fontFamily?: FontFamilyTypes;
  fontWeight?: FontWeightTypes;
  lineHeight?: LineHeightTypes;
  disabled?: boolean;
}
