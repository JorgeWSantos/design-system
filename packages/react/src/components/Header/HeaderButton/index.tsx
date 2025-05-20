import { ComponentProps, ElementType, ReactNode } from 'react';

import { StyledHeaderButton, ContainerHeaderButton } from './styles';
import { Text } from '@components/Text';
import { RoundedButton } from '@components/RoundedButton';

export interface HeaderButtonProps extends ComponentProps<typeof StyledHeaderButton> {
  as?: ElementType;
  children: ReactNode; //icon
  disabled?: boolean;
  label: string;
}

export const HeaderButton = ({
  children,
  label,
  onClick,
  disabled,
}: HeaderButtonProps) => {
  return (
    <ContainerHeaderButton>
      <RoundedButton disabled={disabled} onClick={onClick}>
        {children}
      </RoundedButton>
      <Text size="xxs" disabled={disabled}>
        {label}
      </Text>
    </ContainerHeaderButton>
  );
};

HeaderButton.displayName = 'HeaderButton';
