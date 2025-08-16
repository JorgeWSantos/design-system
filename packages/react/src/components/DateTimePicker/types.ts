export interface DateTimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  options?: string[];
  placeholder?: string;
  disabled?: boolean;
}
