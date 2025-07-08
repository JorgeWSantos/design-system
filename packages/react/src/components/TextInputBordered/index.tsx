import { ComponentProps, ReactNode } from 'react';
import {
  Input,
  TextInputBorderedContainer,
  TextInputBorderedContent,
  ErrorMessage,
} from './styles';
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
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
  return (
    <TextInputBorderedContainer>
      <TextInputBorderedContent $size={size} $variant={variant}>
        <Input id={id} ref={ref} $variant={variant} {...rest} />
        {icon && icon}
      </TextInputBorderedContent>

      {error && (
        <ErrorMessage>
          <Text
            color={colors.red600}
            fontSize="xxs"
            fontWeight="bold"
            lineHeight="short"
            style={{ alignSelf: 'flex-start' }}
          >
            {error}
          </Text>
        </ErrorMessage>
      )}
    </TextInputBorderedContainer>
  );
};

TextInputBordered.displayName = 'TextInputBordered';
