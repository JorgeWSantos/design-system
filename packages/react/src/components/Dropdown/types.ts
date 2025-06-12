import { ComponentProps, ElementType } from 'react';
import { StyledDropdown } from './styles';

export type VariantsTypesDropdown = 'primary' | 'secondary';

export interface DataDropdown {
  value: string;
  label: string;
  id: string;
}

export interface DropdownProps extends ComponentProps<typeof StyledDropdown> {
  as?: ElementType;
  setValue?: (item: DataDropdown) => void;
  data: DataDropdown[];
  label?: string | null;
  variant?: VariantsTypesDropdown;
}
