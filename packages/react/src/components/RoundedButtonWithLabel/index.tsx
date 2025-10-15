import React, { ElementType, ReactNode, MouseEvent } from 'react';

import { ContainerRoundedButtonWithLabel, StyledText, ActiveIndicator } from './styles';
import { RoundedButton } from '@components/RoundedButton';

export interface RoundedButtonWithLabelProps {
  as?: ElementType;
  children: ReactNode; //icon
  disabled?: boolean;
  isActive?: boolean;
  label: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  styleRoundedButton?: React.CSSProperties;
}

export const RoundedButtonWithLabel = ({
  children,
  label,
  onClick,
  disabled,
  isActive = false,
  style = {},
  styleRoundedButton = {},
  ...rest
}: RoundedButtonWithLabelProps) => {
  return (
    <ContainerRoundedButtonWithLabel
      $isActive={isActive}
      onClick={disabled ? undefined : onClick}
      style={disabled ? { pointerEvents: 'none', opacity: 0.6 } : style}
      {...rest}
    >
      {isActive && <ActiveIndicator />}
      <RoundedButton disabled={disabled} style={styleRoundedButton}>
        {children}
      </RoundedButton>
      <StyledText $isActive={isActive} disabled={disabled}>
        {label}
      </StyledText>
    </ContainerRoundedButtonWithLabel>
  );
};

RoundedButtonWithLabel.displayName = 'RoundedButtonWithLabel';
