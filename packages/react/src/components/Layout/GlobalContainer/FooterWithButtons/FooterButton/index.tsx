import { ElementType, ReactNode, MouseEvent } from 'react';

import { ContainerFooterButton, StyledText } from './styles';
import { RoundedButton } from '@components/RoundedButton';
import { RoundedButtonVariants } from '@components/RoundedButton/types';
import { ShareOptions } from '@components/ShareOptions';

export interface FooterButtonProps {
  children: ReactNode; //icon
  disabled?: boolean;
  isActive?: boolean;
  label: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  variant?: RoundedButtonVariants;
  showOptionsToShare?: {
    children: ReactNode;
    show?: boolean;
  };
}

export const FooterButton = ({
  children,
  label,
  onClick,
  disabled,
  variant,
  isActive = false,
  showOptionsToShare, //used on mobile to show share options like Facebook, Twitter, etc.
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

      {showOptionsToShare?.show && showOptionsToShare.children}
    </ContainerFooterButton>
  );
};

FooterButton.displayName = 'FooterButton';
