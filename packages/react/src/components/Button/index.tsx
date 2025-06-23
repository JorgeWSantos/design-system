import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledButton, StyledButtonText, StyledSpinner } from './styles';
import { Size, Variant } from './types';

export interface ButtonProps extends ComponentProps<'button'> {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  text: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  variant,
  children,
  size = 'md',
  text,
  iconLeft,
  iconRight,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <StyledSpinner />
      ) : (
        <>
          {iconLeft && <>{iconLeft}</>}

          <StyledButtonText $variant={variant} $size={size}>
            {text}
          </StyledButtonText>

          {iconRight && <>{iconRight}</>}
        </>
      )}
    </StyledButton>
  );
};

Button.displayName = 'Button';

export * from './types';
