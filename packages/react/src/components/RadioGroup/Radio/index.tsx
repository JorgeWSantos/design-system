import { Text } from '@components/Text';
import { Label, StyledRadio, CustomRadio } from './styles';
import { colors } from '@abqm-ds/tokens';
import type { RadioProps } from '../types';

const Radio = ({ option, checked, onChange, name, value }: RadioProps) => {
  return (
    <Label className="custom-radio">
      <StyledRadio
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
        aria-checked={checked}
      />
      <CustomRadio checked={checked} />
      <Text fontSize="smm" color={colors.green900} lineHeight="tight">
        {option.label}
      </Text>
    </Label>
  );
};

export { Radio };
