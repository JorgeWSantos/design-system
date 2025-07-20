import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  StyledDropdown,
  ContainerOptions,
  Option,
  StyledTextSelect,
  StyledCaretDownFillIcon,
} from './styles';
import { Text } from '@components/Text';
import { colors } from '@abqm-ds/tokens';
import { useClickOutside } from 'hooks/useClickOutside';
import { DropdownProps, DataDropdown } from './types';

export function Dropdown({
  data,
  setValue,
  value = null,
  label = null,
  variant = 'primary',
  maxHeight = 'unset',
  maxWidth = '100%',
  ...rest
}: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState(
    value ? value : data.length > 0 ? data[0] : null
  );
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (value) {
      setSelectedOption(value);
    } else {
      setSelectedOption(data.length > 0 ? data[0] : null);
    }
  }, [value, data]);

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
        $maxWidth={maxWidth}
      >
        <StyledTextSelect $variant={variant}>
          {selectedOption?.label || null}
        </StyledTextSelect>

        <StyledCaretDownFillIcon
          // width={12}
          // height={12}
          // fill={colors.white50}
          $variant={variant}
        />
      </StyledDropdown>

      {showOptions && (
        <ContainerOptions $variant={variant} $maxHeight={maxHeight} $maxWidth={maxWidth}>
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
