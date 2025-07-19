import { ComponentProps } from 'react';
import { SwitchContainer, SwitchButton, SwitchKnob } from './styles';

export interface SwitchProps extends ComponentProps<typeof SwitchContainer> {
  checked: boolean;
  onChange: () => void;
}

const Switch = ({ checked, onChange, ...rest }: SwitchProps) => (
  <SwitchContainer {...rest}>
    <SwitchButton
      onClick={onChange}
      aria-checked={checked}
      role="switch"
      $checked={checked}
    >
      <SwitchKnob $checked={checked} />
    </SwitchButton>
  </SwitchContainer>
);

Switch.displayName = 'Switch';

export { Switch };
