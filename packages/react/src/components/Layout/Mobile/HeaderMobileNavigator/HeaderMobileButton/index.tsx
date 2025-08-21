import { ComponentProps, ElementType, ReactNode } from 'react';

import { StyledHeaderButton, ContainerHeaderButton, ActiveIndicator } from './styles';
import { RoundedButton } from '@components/RoundedButton';

export interface HeaderButtonProps extends ComponentProps<typeof StyledHeaderButton> {
  as?: ElementType;
  children: ReactNode; //icon
  disabled?: boolean;
  isActive?: boolean;
}

export const HeaderMobileButton = ({
  children,
  onClick,
  disabled,
  isActive = false,
}: HeaderButtonProps) => {
  return (
    <ContainerHeaderButton $isActive={isActive} style={{ position: 'relative' }}>
      {isActive && <ActiveIndicator />}
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
