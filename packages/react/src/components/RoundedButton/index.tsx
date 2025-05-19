import { ComponentProps, ElementType, ReactNode } from 'react';

import { Size, StyledRoundedButton, ContainerRoundedButton, Variant } from './styles';
import { Text } from '@components/Text';

export interface RoundedButtonProps extends ComponentProps<typeof StyledRoundedButton> {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  disabled?: boolean;
  label: string;
}

export const RoundedButton = ({ variant, children, size, label }: RoundedButtonProps) => {
  return (
    <ContainerRoundedButton>
      <StyledRoundedButton variant={variant} size={size}>
        {children}
      </StyledRoundedButton>
      <Text size="xxs">{label}</Text>
    </ContainerRoundedButton>
  );
};

RoundedButton.displayName = 'RoundedButton';
