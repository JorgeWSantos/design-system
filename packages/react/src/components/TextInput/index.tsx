import React, {
  ComponentProps,
  forwardRef,
  ReactNode,
  useState,
  useCallback,
} from 'react';
import { useDebouncedCallback } from '../../hooks/useDebounce.hook';
import {
  Input,
  Prefix,
  SizeVariants,
  TextInputContainer,
  variantsTextInputTypes,
} from './styles';
import { SpinnerRingResizeIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';

export interface TextInputProps extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string;
  size?: SizeVariants;
  variant?: variantsTextInputTypes;
  icon?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  debounceDelay?: number;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { prefix, size = 'sm', variant = 'primary', icon, onChange, debounceDelay, ...rest },
    ref
  ) => {
    const [isDebouncing, setIsDebouncing] = useState(false);

    // Cria um callback que desativa o loading após o debounce
    const debouncedOnChange =
      debounceDelay && onChange
        ? useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event);
            setIsDebouncing(false);
          }, debounceDelay)
        : onChange ?? (() => {});

    // Handler para ativar o loading e chamar o debounced
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (debounceDelay && onChange) {
          setIsDebouncing(true);
          debouncedOnChange(event);
        } else if (onChange) {
          onChange(event);
        }
      },
      [debounceDelay, onChange, debouncedOnChange]
    );

    return (
      <TextInputContainer $size={size} $variant={variant}>
        {!!prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
        <Input ref={ref} $variant={variant} onChange={handleChange} {...rest} />
        {isDebouncing ? (
          <SpinnerRingResizeIcon width={16} height={16} stroke={colors.white75} />
        ) : (
          icon && icon
        )}
      </TextInputContainer>
    );
  }
);

TextInput.displayName = 'TextInput';
