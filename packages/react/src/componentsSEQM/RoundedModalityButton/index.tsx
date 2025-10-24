import { ComponentProps, ReactElement } from 'react';
import { IconWrapper, RoundedButton, type VariantsRoundedModalityButton } from './styles';

export interface RoundedButtonModalitieProps extends ComponentProps<'button'> {
  icon: ReactElement;
  text?: string;
  variant?: VariantsRoundedModalityButton;
  svgFullWidth?: boolean;
  bordered?: boolean;
}

const RoundedModalityButton = ({
  icon,
  variant = 'default',
  svgFullWidth,
  bordered,
  ...rest
}: RoundedButtonModalitieProps) => {
  return (
    <RoundedButton
      className="rounded-button"
      $variant={variant}
      $bordered={bordered}
      {...rest}
    >
      <IconWrapper $svgFullWidth={svgFullWidth}>{icon}</IconWrapper>
    </RoundedButton>
  );
};

RoundedModalityButton.displayName = 'RoundedModalityButton';

export { RoundedModalityButton, VariantsRoundedModalityButton };
