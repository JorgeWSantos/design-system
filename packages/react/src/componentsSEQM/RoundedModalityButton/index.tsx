import { ComponentProps, ReactElement } from 'react';
import { IconWrapper, RoundedButton, type VariantsRoundedModalityButton } from './styles';

export interface RoundedButtonModalitieProps extends ComponentProps<'button'> {
  icon: ReactElement;
  text: string;
  variant?: VariantsRoundedModalityButton;
  svgFullWidth?: boolean;
}

const RoundedModalityButton = ({
  icon,
  text,
  variant = 'default',
  svgFullWidth,
  ...rest
}: RoundedButtonModalitieProps) => {
  return (
    <RoundedButton className="rounded-button" $variant={variant} {...rest}>
      <IconWrapper $svgFullWidth={svgFullWidth}>{icon}</IconWrapper>
    </RoundedButton>
  );
};

RoundedModalityButton.displayName = 'RoundedModalityButton';

export { RoundedModalityButton, VariantsRoundedModalityButton };
