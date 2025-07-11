import { ComponentProps, ReactNode, useState } from 'react';
import { Input, TextInputBorderedContainer, TextInputBorderedContent } from './styles';
import { TextInputBorderedSizes, TextInputBorderedVariants } from './types';
import { colors } from '@abqm-ds/tokens';
import { Text } from '@components/Text';

export interface TextInputBorderedProps
  extends Omit<ComponentProps<typeof Input>, 'size' | '$variant'> {
  size?: TextInputBorderedSizes;
  variant?: TextInputBorderedVariants;
  icon?: ReactNode;
  label?: string;
  error?: string | null;
}

export const TextInputBordered = ({
  size = 'md',
  variant = 'primary',
  icon,
  ref,
  label,
  error,
  ...rest
}: TextInputBorderedProps) => {
  return (
    <TextInputBorderedContainer>
      <TextInputBorderedContent $size={size} $variant={variant}>
        <Input ref={ref} $variant={variant} {...rest} />
        {icon && icon}
      </TextInputBorderedContent>
      {error && (
        <Text
          color={colors.red600}
          fontSize="xxs"
          lineHeight="shorter"
          style={{ alignSelf: 'flex-start' }}
        >
          {error}
        </Text>
      )}
    </TextInputBorderedContainer>
  );
};

TextInputBordered.displayName = 'TextInputBordered';
