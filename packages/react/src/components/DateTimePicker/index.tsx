import React, { useState } from 'react';
import { DateTimePickerContainer, DateTimeInput } from './styles';
import { convertToBrazilDate } from 'utils/formatDate';

export interface DateTimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  onChange,
  label,
  placeholder = '',
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange?.(value);
  };

  return (
    <DateTimePickerContainer>
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
