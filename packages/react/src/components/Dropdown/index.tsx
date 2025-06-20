import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  StyledDropdown,
  ContainerOptions,
  Option,
  StyledTextSelect,
} from './styles';
import { Text } from '@components/Text';
import { colors } from '@abqm-ds/tokens';
import { useClickOutside } from 'hooks/useClickOutside';
import { DropdownProps, DataDropdown } from './types';
import { CaretDownFillIcon } from '@abqm-ds/icons';

export function Dropdown({
  data,
  setValue,
  label = null,
  variant = 'primary',
  ...rest
}: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState(data.length > 0 ? data[0] : null);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setSelectedOption(data.length > 0 ? data[0] : null);
  }, [data]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, () => setShowOptions(false));

  const selectAnOption = useCallback(
    (item: DataDropdown) => {
      setSelectedOption(item);
      setShowOptions(false);

      if (setValue) {
        setValue(item);
      }
    },
    [setValue]
  );

  return (
    <Container $hasLabel={!!label} ref={dropdownRef}>
      {label && (
        <Text
          lineHeight="tight"
          fontWeight="regular"
          fontSize="ssm"
          color={colors.emeraldGreen75}
          style={{ marginLeft: '0.5rem' }}
        >
          {label}
        </Text>
      )}

      <StyledDropdown
        {...rest}
        onClick={() => {
          if (selectedOption !== null) {
            setShowOptions((prev) => !prev);
          }
        }}
        $variant={variant}
      >
        <StyledTextSelect>{selectedOption?.label || null}</StyledTextSelect>
        <CaretDownFillIcon width={12} height={12} fill={colors.white50} />
      </StyledDropdown>

      {showOptions && (
        <ContainerOptions $variant={variant}>
          {data.map((item) => (
            <Option $variant={variant} key={item.id} onClick={() => selectAnOption(item)}>
              {item.label}
            </Option>
          ))}
        </ContainerOptions>
      )}
    </Container>
  );
}

Dropdown.displayName = 'Dropdown';

export * from './types';
