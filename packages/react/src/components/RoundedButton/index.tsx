import { ComponentProps, ElementType, ReactNode } from 'react';

import { ActiveIndicator, StyledRoundedButton } from './styles';

export interface RoundedButtonProps extends ComponentProps<typeof StyledRoundedButton> {
  as?: ElementType;
  children: ReactNode;
  disabled?: boolean;
  width?: string;
  height?: string;
  isActive?: boolean;
}

export const RoundedButton = ({
  children,
  disabled,
  width = '1.375rem',
  height = '1.375rem',
  isActive,
  ...rest
}: RoundedButtonProps) => {
  return (
    <StyledRoundedButton disabled={disabled} $width={width} $height={height} {...rest}>
      {isActive && <ActiveIndicator />}
      {children}
    </StyledRoundedButton>
  );
};

RoundedButton.displayName = 'RoundedButton';
