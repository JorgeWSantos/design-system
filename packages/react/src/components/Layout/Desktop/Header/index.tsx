import { ButtonsWrapper, HeadingWrapper, StyledHeader, StyledHeading } from './styles';
import { ColorBar } from '@components/ColorBar';
import { HeaderButton } from './HeaderButton';
import { HeaderProps } from './types';

export const Header = ({ text, fontWeight, buttons, ...rest }: HeaderProps) => {
  return (
    <StyledHeader {...rest}>
      <HeadingWrapper>
        <StyledHeading fontSize="md" fontWeight={fontWeight}>
          {text}
        </StyledHeading>

        {buttons && (
          <ButtonsWrapper>
            {buttons.map((button, index) => (
              <HeaderButton
                label={button.label}
                disabled={button.disabled}
                onClick={button.onClick}
                key={index}
                isFiltered={button.isFiltered}
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
