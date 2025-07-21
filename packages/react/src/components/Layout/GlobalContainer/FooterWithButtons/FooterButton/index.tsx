import { ElementType, ReactNode, MouseEvent } from 'react';

import { ContainerFooterButton, StyledText } from './styles';
import { RoundedButton } from '@components/RoundedButton';
import { RoundedButtonVariants } from '@components/RoundedButton/types';

export interface FooterButtonProps {
  children: ReactNode; //icon
  disabled?: boolean;
  isActive?: boolean;
  label: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  variant?: RoundedButtonVariants | string;
}

export const FooterButton = ({
  children,
  label,
  onClick,
  disabled,
  variant,
  isActive = false,
}: FooterButtonProps) => {
  return (
    <ContainerFooterButton
      $isActive={isActive}
      onClick={disabled ? undefined : onClick}
      style={disabled ? { pointerEvents: 'none', opacity: 0.6 } : undefined}
    >
      {/* {isActive && <ActiveIndicator />} */}
      <RoundedButton disabled={disabled} variant={variant}>
        {children}
      </RoundedButton>
      <StyledText disabled={disabled}>{label}</StyledText>
    </ContainerFooterButton>
  );
};

FooterButton.displayName = 'FooterButton';
