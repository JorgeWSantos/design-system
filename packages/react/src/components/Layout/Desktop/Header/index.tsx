import {
  ButtonsWrapper,
  DivTextWrapper,
  HeadingWrapper,
  StyledHeader,
  StyledHeading,
  StyledHeadingSubTitle,
} from './styles';
import { ColorBar } from '@components/ColorBar';
import { HeaderButton } from './HeaderButton';
import { HeaderProps } from './types';

export const Header = ({ text, subTitle, fontWeight, buttons, ...rest }: HeaderProps) => {
  return (
    <StyledHeader {...rest}>
      <HeadingWrapper>
        <DivTextWrapper>
          <StyledHeading fontSize="md" fontWeight={fontWeight}>
            {text}
          </StyledHeading>
          <StyledHeadingSubTitle fontSize="md" fontWeight="regular">
            {subTitle}
          </StyledHeadingSubTitle>
        </DivTextWrapper>

        {buttons && (
          <ButtonsWrapper>
            {buttons.map((button, index) => (
              <HeaderButton
                label={button.label}
                disabled={button.disabled}
                onClick={button.onClick}
                key={index}
                isActive={button.isActive}
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
