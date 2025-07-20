import { ElementType, ReactNode, MouseEvent } from 'react';

import { ContainerHeaderButton, StyledText, ActiveIndicator } from './styles';
import { RoundedButton } from '@components/RoundedButton';

export interface HeaderButtonProps {
  as?: ElementType;
  children: ReactNode; //icon
  disabled?: boolean;
  isActive?: boolean;
  label: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const HeaderButton = ({
  children,
  label,
  onClick,
  disabled,
  isActive = false,
}: HeaderButtonProps) => {
  return (
    <ContainerHeaderButton
      $isActive={isActive}
      onClick={disabled ? undefined : onClick}
      style={disabled ? { pointerEvents: 'none', opacity: 0.6 } : undefined}
    >
      {isActive && <ActiveIndicator />}
      <RoundedButton disabled={disabled}>{children}</RoundedButton>
      <StyledText $isActive={isActive} disabled={disabled}>
        {label}
      </StyledText>
    </ContainerHeaderButton>
  );
};

HeaderButton.displayName = 'HeaderButton';
