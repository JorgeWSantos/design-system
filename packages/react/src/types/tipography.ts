import { fontSizes, fontWeights, lineHeights } from '@abqm-ui2/tokens';

export type WeightTypes = 'regular' | 'medium' | 'semi' | 'bold';

export const fontSizeTypes = {
  x: fontSizes.x,
  xxs: fontSizes.xxs,
  xs: fontSizes.xs,
  ssm: fontSizes.ssm,
  sm: fontSizes.sm,
  smm: fontSizes.smm,
  md: fontSizes.md,
  mdd: fontSizes.mdd,
  lg: fontSizes.lg,
  lgg: fontSizes.lgg,
  xl: fontSizes.xl,
  '2xl': fontSizes['2xl'],
  '4xl': fontSizes['4xl'],
  '5xl': fontSizes['5xl'],
  '6xl': fontSizes['6xl'],
  '7xl': fontSizes['7xl'],
  '8xl': fontSizes['8xl'],
  '9xl': fontSizes['9xl'],
};

export type FontSizeTypes = keyof typeof fontSizeTypes;

export const fontWeightTypes = {
  regular: fontWeights.regular,
  medium: fontWeights.medium,
  semiBold: fontWeights.semiBold,
  bold: fontWeights.bold,
  bolder: fontWeights.bolder,
};

export type FontWeightTypes = keyof typeof fontWeightTypes;

export const lineHeightTypes = {
  initial: lineHeights.initial,
  tight: lineHeights.tight,
  shorter: lineHeights.shorter,
  short: lineHeights.short,
  base: lineHeights.base,
  tall: lineHeights.tall,
};

export type LineHeightTypes = keyof typeof lineHeightTypes;
