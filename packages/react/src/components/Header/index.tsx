import { ButtonsWrapper, HeadingWrapper, StyledHeader } from './styles';
import { Heading } from '@components/Heading';
import { ColorBar } from '@components/ColorBar';
import { HeaderButton } from './HeaderButton';
import { HeaderProps } from './types';

export const Header = ({ text, fontWeight, buttons, ...rest }: HeaderProps) => {
  return (
    <StyledHeader {...rest}>
      <HeadingWrapper>
        <Heading fontSize="md" fontWeight={fontWeight}>
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

export * from './types';
