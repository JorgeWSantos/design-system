import React, {
  type ComponentProps,
  forwardRef,
  type ReactNode,
  useState,
  useCallback,
  useRef,
  useEffect, // ADICIONE ESTE IMPORT
} from 'react';
import {
  Input,
  Prefix,
  type AutocompleteSizeVariants,
  TextInputContainer,
  TextInputWithLabelContainer,
  SuggestionsList,
  SuggestionItem,
} from './styles';
import type { variantsTextInputTypes } from './styles';
import { SpinnerRingResizeIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';
import { Text, useDebouncedCallback } from '@abqm-ds/react';

export interface AutocompleteProps extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string;
  size?: AutocompleteSizeVariants;
  variant?: variantsTextInputTypes;
  icon?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  debounceDelay?: number;
  label?: string;
  suggestions?: string[];
  onSelectSuggestion?: (value: string) => void;
}

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      prefix,
      size = 'sm',
      variant = 'primary',
      icon,
      onChange,
      debounceDelay,
      label = '',
      suggestions = [],
      onSelectSuggestion,
      value,
      ...rest
    },
    ref
  ) => {
    const [isDebouncing, setIsDebouncing] = useState(false);
    const [inputValue, setInputValue] = useState(value ?? '');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Sincroniza inputValue com value externo
    useEffect(() => {
      setInputValue(value ?? '');
    }, [value]);

    // Debounced change handler
    const debouncedOnChange = useDebouncedCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(event);
        setIsDebouncing(false);
      },
      debounceDelay ?? 0
    );

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setShowSuggestions(true);
        if (debounceDelay && onChange) {
          setIsDebouncing(true);
          debouncedOnChange(event);
        } else if (onChange) {
          onChange(event);
        }
      },
      [debounceDelay, onChange, debouncedOnChange]
    );

    const handleSuggestionClick = (value: string) => {
      setInputValue(value);
      setShowSuggestions(false);
      if (onSelectSuggestion) onSelectSuggestion(value);
      if (inputRef.current) inputRef.current.blur();
    };

    const handleBlur = () => {
      // Esconde sugestões após um pequeno delay para permitir clique
      setTimeout(() => setShowSuggestions(false), 100);
    };

    const handleFocus = () => {
      if (suggestions.length > 0) setShowSuggestions(true);
    };

    const loaderIconColor = () => {
      switch (variant) {
        case 'primary':
          return colors.emeraldGreen75;
        // case 'secondary':
        //   return colors.neutralWhite;
        // case 'tertiary':
        //   return colors.neutralBlack;
        default:
          return colors.emeraldGreen75;
      }
    };

    // const filteredSuggestions = suggestions.filter(
    //   (s) =>
    //     String(s).toLowerCase().includes(String(inputValue).toLowerCase()) &&
    //     String(s) !== String(inputValue)
    // );

    return (
      <TextInputWithLabelContainer>
        {label && (
          <Text
            color={colors.emeraldGreen50}
            fontWeight="regular"
            fontSize="ssm"
            lineHeight="tight"
          >
            {label}
          </Text>
        )}
        <TextInputContainer
          $size={size}
          $variant={variant}
          style={{ position: 'relative' }}
        >
          {!!prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
          <Input
            ref={(node) => {
              if (ref) {
                if (typeof ref === 'function') ref(node);
                else
                  (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
              }
              inputRef.current = node;
            }}
            $variant={variant}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            autoComplete="off"
            {...rest}
          />
          {isDebouncing ? (
            <SpinnerRingResizeIcon width={16} height={16} stroke={loaderIconColor()} />
          ) : (
            icon && icon
          )}
          {showSuggestions && suggestions.length > 0 && (
            <SuggestionsList>
              {suggestions.map((s) => (
                <SuggestionItem key={s} onMouseDown={() => handleSuggestionClick(s)}>
                  {s}
                </SuggestionItem>
              ))}
            </SuggestionsList>
          )}
        </TextInputContainer>
      </TextInputWithLabelContainer>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';
