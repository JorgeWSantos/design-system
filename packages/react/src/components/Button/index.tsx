import { StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button = ({ variant, children, size, ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.displayName = 'Button';
