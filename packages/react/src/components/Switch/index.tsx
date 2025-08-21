import { ComponentProps } from 'react';
import { SwitchContainer, SwitchButton, SwitchKnob } from './styles';

export type SwitchVariants = 'primary' | 'filter';
export interface SwitchProps extends ComponentProps<typeof SwitchContainer> {
  checked: boolean;
  onChange: () => void;
  variant?: SwitchVariants;
}

const Switch = ({ checked, onChange, variant = 'primary', ...rest }: SwitchProps) => (
  <SwitchContainer {...rest}>
    <SwitchButton
      onClick={onChange}
      aria-checked={checked}
      role="switch"
      $checked={checked}
      $variant={variant}
    >
      <SwitchKnob $checked={checked} $variant={variant} />
    </SwitchButton>
  </SwitchContainer>
);

Switch.displayName = 'Switch';

export { Switch };
