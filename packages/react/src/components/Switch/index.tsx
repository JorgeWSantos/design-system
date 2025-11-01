import { ComponentProps } from 'react';
import { SwitchContainer, SwitchButton, SwitchKnob, Label } from './styles';

export type SwitchVariants = 'primary' | 'filter';
export interface SwitchProps extends ComponentProps<typeof SwitchContainer> {
  checked: boolean;
  onChange: () => void;
  variant?: SwitchVariants;
  label?: string;
  labelOnLeft?: boolean;
}

const Switch = ({
  checked,
  onChange,
  variant = 'primary',
  label,
  labelOnLeft,
  ...rest
}: SwitchProps) => (
  <SwitchContainer {...rest}>
    {label && labelOnLeft && <Label $variant={variant}>{label}</Label>}
    <SwitchButton
      onClick={onChange}
      aria-checked={checked}
      role="switch"
      $checked={checked}
      $variant={variant}
    >
      <SwitchKnob $checked={checked} $variant={variant} />
    </SwitchButton>
    {label && !labelOnLeft && <Label $variant={variant}>{label}</Label>}
  </SwitchContainer>
);

Switch.displayName = 'Switch';

export { Switch };
