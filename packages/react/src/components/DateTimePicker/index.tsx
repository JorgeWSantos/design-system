import React, { ComponentProps, CSSProperties, useState } from 'react';
import { DateTimePickerContainer, DateTimeInput } from './styles';

type DateTimerPickerProps = Omit<
  ComponentProps<typeof DateTimePickerContainer>,
  'onChange'
> & {
  style?: CSSProperties;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};

export const DateTimePicker = ({
  value,
  onChange,
  label,
  placeholder = '',
  disabled = false,
  ...rest
}: DateTimerPickerProps) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange?.(value);
  };

  return (
    <DateTimePickerContainer {...rest}>
      {label && <label>{label}</label>}

      <DateTimeInput
        type="date"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </DateTimePickerContainer>
  );
};

export default DateTimePicker;
