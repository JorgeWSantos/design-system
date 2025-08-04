import { Radio } from './Radio';
import { RadioGroupProps } from './types';
import { ContainerRadioGroup, ContentRadioGroup } from './styles';

const RadioGroup = ({
  options,
  selectedOption,
  setSelectedOption,
  direction = 'horizontal',
}: RadioGroupProps) => {
  // Garante um nome único para o grupo
  const groupName = `radio-group-${options.map((o) => o.id).join('-')}`;
  return (
    <ContainerRadioGroup>
      <ContentRadioGroup direction={direction}>
        {options.map((option) => (
          <Radio
            key={option.id}
            option={option}
            checked={option.value === selectedOption.value}
            name={groupName}
            value={option.value}
            onChange={() => setSelectedOption(option)}
          />
        ))}
      </ContentRadioGroup>
    </ContainerRadioGroup>
  );
};

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };

export * from './types';
