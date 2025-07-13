import { Text } from '@components/Text';
import { Label, StyledRadio } from './styles';
import { colors } from '@abqm-ds/tokens';
import type { RadioProps } from '../types';

const Radio = ({ option, checked, onChange }: RadioProps) => (
  <Label className="custom-radio">
    <StyledRadio type="radio" checked={checked} name="option" onChange={onChange} />
    <Text fontSize="smm" color={colors.green900} lineHeight="tight">
      {option.label}
    </Text>
  </Label>
);

export { Radio };
