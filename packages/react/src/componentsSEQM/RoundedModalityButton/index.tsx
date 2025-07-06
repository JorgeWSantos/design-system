import { ComponentProps, ReactElement } from 'react';
import { IconWrapper, RoundedButton, type VariantsRoundedModalityButton } from './styles';

export interface RoundedButtonModalitieProps extends ComponentProps<'button'> {
  icon: string | ReactElement;
  text: string;
  variant?: VariantsRoundedModalityButton;
}

const RoundedModalityButton = ({
  icon,
  text,
  variant = 'default',
  ...rest
}: RoundedButtonModalitieProps) => {
  return (
    <RoundedButton className="rounded-button" $variant={variant} {...rest}>
      <IconWrapper>{icon}</IconWrapper>
    </RoundedButton>
  );
};

RoundedModalityButton.displayName = 'RoundedModalityButton';

export { RoundedModalityButton };
