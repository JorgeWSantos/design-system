import { ComponentProps, ElementType } from 'react';
import { StyledDropdown } from './styles';

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
}
