import React, { ComponentProps, ElementType } from 'react';
import { StyledDropdown } from './styles';

export type VariantsTypesDropdown = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

export interface DataDropdown {
  value: string;
  label: string;
  id: string;
}

export interface DropdownProps extends ComponentProps<typeof StyledDropdown> {
  as?: ElementType;
  setValue?: (item: DataDropdown) => void;
  value?: DataDropdown | null;
  data: DataDropdown[];
  label?: string | null;
  variant?: VariantsTypesDropdown;
  maxHeight?: string;
  maxWidth?: string;
  openToTop?: boolean;
  stylesContainerOptions?: React.CSSProperties;
}
