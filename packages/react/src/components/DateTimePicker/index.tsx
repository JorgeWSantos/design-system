import React, { useState } from 'react';
import { DateTimePickerContainer, DateTimeInput } from './styles';

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
  placeholder = 'Select date and time',
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
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
