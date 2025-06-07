import { ComponentProps, ElementType, useCallback, useRef, useState } from 'react';
import { Container, StyledDropdown, ContainerOptions, Option } from './styles';
import { Text } from '@components/Text';
import { CaretDownIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';
import { useClickOutside } from 'hooks/useClickOutside';
import { DropdownProps, DataDropdown } from './types';

export function Dropdown({ data, setValue, label = null, ...rest }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState(data.length > 0 ? data[0] : null);
  const [showOptions, setShowOptions] = useState(false);

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
    <Container hasLabel={!!label} ref={dropdownRef}>
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
      >
        <Text
          lineHeight="initial"
          fontWeight="regular"
          fontSize="ssm"
          color={colors.white75}
        >
          {selectedOption?.label || null}
        </Text>

        <CaretDownIcon width={12} height={12} />
      </StyledDropdown>

      {showOptions && (
        <ContainerOptions>
          {data.map((item) => (
            <Option key={item.id} onClick={() => selectAnOption(item)}>
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
