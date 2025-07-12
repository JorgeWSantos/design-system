import { Radio } from './Radio';
import { RadioGroupProps } from './types';
import { ContainerRadioGroup, ContentRadioGroup } from './styles';

const RadioGroup = ({
  options,
  selectedOption,
  setSelectedOption,
  direction = 'horizontal',
}: RadioGroupProps) => (
  <ContainerRadioGroup>
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

export { RadioGroup };

export * from './types';
