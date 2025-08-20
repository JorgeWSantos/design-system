import { ComponentProps, ElementType, ReactNode } from 'react';

import { StyledHeaderButton, ContainerHeaderButton } from './styles';
import { RoundedButton } from '@components/RoundedButton';

export interface HeaderButtonProps extends ComponentProps<typeof StyledHeaderButton> {
  as?: ElementType;
  children: ReactNode; //icon
  disabled?: boolean;
}

export const HeaderMobileButton = ({
  children,
  onClick,
  disabled,
}: HeaderButtonProps) => {
  return (
    <ContainerHeaderButton>
      <RoundedButton
        disabled={disabled}
        onClick={onClick}
        variant="tertiary"
        width="2rem"
        height="2rem"
      >
        {children}
      </RoundedButton>
    </ContainerHeaderButton>
  );
};

HeaderMobileButton.displayName = 'HeaderMobileButton';
