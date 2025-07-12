import { Text } from '@abqm-ds/react';
import { Label } from './styles';
import { colors } from '@abqm-ds/tokens';
import type { RadioProps } from '../types';

const Radio = ({ option, checked, onChange }: RadioProps) => (
  <Label className="custom-radio">
    <input type="radio" checked={checked} name="option" onChange={onChange} />
    <span className="radio-mark"></span>

    <Text fontSize="smm" color={colors.green900} lineHeight="tight">
      {option.label}
    </Text>
  </Label>
);

export { Radio };
