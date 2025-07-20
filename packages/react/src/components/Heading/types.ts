import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledHeading } from './styles';
import { FontFamilyTypes, FontWeightTypes, LineHeightTypes } from 'types/tipography';
import { fontSizes } from '@abqm-ds/tokens';

export interface HeadingProps extends ComponentProps<typeof StyledHeading> {
  as?: ElementType;
  children: ReactNode;
  fontSize?: SizeVariants;
  fontWeight?: FontWeightTypes;
  lineHeight?: LineHeightTypes;
  fontFamily?: FontFamilyTypes;
  color?: string;
}

export const sizeVariants = {
  ssm: fontSizes.lg,
  sm: fontSizes.xl,
  md: fontSizes['2xl'],
  lg: fontSizes['4xl'],
  '2xl': fontSizes['5xl'],
  '3xl': fontSizes['6xl'],
  '4xl': fontSizes['7xl'],
  '5xl': fontSizes['8xl'],
  '6xl': fontSizes['9xl'],
};

export type SizeVariants = keyof typeof sizeVariants;
