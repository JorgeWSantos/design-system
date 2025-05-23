import { ComponentProps, ElementType, ReactNode } from 'react';

import { ButtonsWrapper, HeadingWrapper, StyledHeader } from './styles';
import { Heading } from '@components/Heading';
import { ColorBar } from '@components/ColorBar';
import { FontWeightTypes } from 'types/tipography';
import { HeaderButton } from './HeaderButton';

interface ButtonProps {
  icon: ReactNode;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface HeaderProps extends ComponentProps<typeof StyledHeader> {
  as?: ElementType;
  text: string;
  fontWeight?: FontWeightTypes;
  buttons?: ButtonProps[];
}

export const Header = ({ text, fontWeight, buttons, ...rest }: HeaderProps) => {
  return (
    <StyledHeader {...rest}>
      <HeadingWrapper>
        <Heading size="md" weight={fontWeight}>
          {text}
        </Heading>

        {buttons && (
          <ButtonsWrapper>
            {buttons.map((button, index) => (
              <HeaderButton
                label={button.label}
                disabled={button.disabled}
                onClick={button.onClick}
                key={index}
              >
                {button.icon}
              </HeaderButton>
            ))}
          </ButtonsWrapper>
        )}
      </HeadingWrapper>
      <ColorBar />
    </StyledHeader>
  );
};

Header.displayName = 'Header';
