import { ComponentProps, ElementType, ReactNode } from 'react';
import { StyledButton, StyledButtonText, StyledSpinner } from './styles';
import { ButtonSize, ButtonVariants, ButtonTextSize } from './types';

export interface ButtonProps extends ComponentProps<'button'> {
  as?: ElementType;
  variant?: ButtonVariants;
  size?: ButtonSize;
  // fontSize?: FontSizeTypes;
  // fontWeight?: FontWeightTypes;
  text: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isLoading?: boolean;
  sizeText?: ButtonTextSize;
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
  sizeText = 'md',
  // fontSize,
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

          <StyledButtonText $sizeText={sizeText}>{text}</StyledButtonText>

          {iconRight && <>{iconRight}</>}
        </>
      )}
    </StyledButton>
  );
};

Button.displayName = 'Button';

export * from './types';
