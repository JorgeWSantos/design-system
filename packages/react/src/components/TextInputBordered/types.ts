import { space } from '@abqm-ds/tokens';

export type TextInputBorderedVariants = 'primary' | 'secondary';

export const textInputBorderedSizes = {
  md: `${space[2]} ${space[3]}`,
};

export type TextInputBorderedSizes = keyof typeof textInputBorderedSizes;
