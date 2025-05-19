import { ComponentProps, ElementType, ReactNode } from 'react';

import { StyledRoundedButton } from './styles';

export interface RoundedButtonProps extends ComponentProps<typeof StyledRoundedButton> {
  as?: ElementType;
  children: ReactNode;
  disabled?: boolean;
}

export const RoundedButton = ({
  children,
  disabled,
  // onClick,
  ...rest
}: RoundedButtonProps) => {
  return (
    <StyledRoundedButton disabled={disabled} {...rest}>
      {children}
    </StyledRoundedButton>
  );
};

RoundedButton.displayName = 'RoundedButton';
