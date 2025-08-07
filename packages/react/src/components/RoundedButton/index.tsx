import { ActiveIndicator, StyledRoundedButton } from './styles';
import { RoundedButtonProps } from './types';

export const RoundedButton = ({
  children,
  disabled,
  width = '1.375rem',
  height = '1.375rem',
  isActive,
  variant,
  ...rest
}: RoundedButtonProps) => {
  return (
    <StyledRoundedButton
      disabled={disabled}
      $width={width}
      $height={height}
      $variant={variant}
      {...rest}
    >
      {isActive && <ActiveIndicator />}
      {children}
    </StyledRoundedButton>
  );
};

RoundedButton.displayName = 'RoundedButton';

export * from './types';
