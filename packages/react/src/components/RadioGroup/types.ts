import { ComponentProps } from 'react';
import { ContainerRadioGroup } from './styles';

export interface RadioGroupProps extends ComponentProps<typeof ContainerRadioGroup> {
  selectedOption: RadioGroupOption | null;
  setSelectedOption: (option: RadioGroupOption) => void;
  options: Array<RadioGroupOption>;
  direction?: RadioGroupDirections;
}

export type RadioGroupOption = {
  label: string;
  value: string;
  id: string;
};

export type RadioGroupDirections = 'vertical' | 'horizontal';

export type RadioProps = {
  option: RadioGroupOption;
  checked: boolean;
  onChange: () => void;
  name?: string;
  value?: string;
};
