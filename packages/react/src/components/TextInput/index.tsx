import React, { ComponentProps, forwardRef, ReactNode } from 'react';
import {
  Input,
  Prefix,
  SizeVariants,
  TextInputContainer,
  variantsTextInputTypes,
} from './styles';

export interface TextInputProps extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string;
  size?: SizeVariants;
  variant?: variantsTextInputTypes;
  icon?: ReactNode;
}

export const TextInput = ({
  prefix,
  size = 'sm',
  variant = 'primary',
  icon,
  ref,
  ...rest
}: TextInputProps) => {
  return (
    <TextInputContainer $size={size} $variant={variant}>
      {!!prefix && <Prefix $variant={variant}>{prefix}</Prefix>}
      <Input ref={ref} $variant={variant} {...rest} />
      {icon && icon}
    </TextInputContainer>
  );
};

TextInput.displayName = 'TextInput';
