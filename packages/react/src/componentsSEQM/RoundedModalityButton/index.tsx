import { ComponentProps } from 'react';
import {
  ImageModalitie,
  RoundedButton,
  type VariantsRoundedModalityButton,
} from './styles';

export interface RoundedButtonModalitieProps extends ComponentProps<'button'> {
  icon: string;
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
      <ImageModalitie src={icon} alt={text || 'Botão Modalidade'} $variant={variant} />
    </RoundedButton>
  );
};

RoundedModalityButton.displayName = 'RoundedModalityButton';

export { RoundedModalityButton };
