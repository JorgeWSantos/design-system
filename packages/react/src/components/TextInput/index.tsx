import React, { ComponentProps, forwardRef, ReactNode } from 'react';
import { Input, Prefix, SizeVariants, TextInputContainer } from './styles';

export type variantsTextInputTypes = 'primary' | 'secondary';

export interface TextInputProps extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string;
  size?: SizeVariants;
  variant: variantsTextInputTypes;
  icon: ReactNode;
}

export const TextInput = forwardRef<React.ComponentRef<typeof Input>, TextInputProps>(
  ({ prefix, size = 'sm', variant, icon, ...props }: TextInputProps, ref) => {
    // Remova $variant do Input se já estiver em props
    const { $variant, ...inputProps } = props as any;
    return (
      <TextInputContainer $size={size} $variant={variant}>
        {!!prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
        <Input ref={ref} $variant={variant} {...inputProps} />
        {icon && icon}
      </TextInputContainer>
    );
  }
);

TextInput.displayName = 'TextInput';
