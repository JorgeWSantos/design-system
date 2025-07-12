import { Text } from '@components/Text';
import { Radio } from './Radio';
import { colors } from '@abqm-ds/tokens';
import { RadioGroupProps } from './types';
import { ContainerRadioGroup, ContentRadioGroup } from './styles';

const RadioGroup = ({
  options,
  selectedOption,
  setSelectedOption,
  direction = 'horizontal',
  labelRadioGroup,
}: RadioGroupProps) => (
  <ContainerRadioGroup>
    {labelRadioGroup && (
      <Text
        color={colors.green900}
        fontWeight="semiBold"
        fontSize="smm"
        lineHeight="tight"
      >
        {labelRadioGroup}
      </Text>
    )}

    <ContentRadioGroup direction={direction}>
      {options.map((option) => (
        <Radio
          key={option.id}
          option={option}
          checked={option.value === selectedOption.value}
          onChange={() => setSelectedOption(option)}
        />
      ))}
    </ContentRadioGroup>
  </ContainerRadioGroup>
);

RadioGroup.displayName = 'RadioGroup';
