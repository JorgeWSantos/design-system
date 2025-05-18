import { ComponentProps, ElementType } from 'react';

import { HeadingWrapper, Size, StyledHeader, Variant } from './styles';
import { Heading } from '@components/Heading';
import { ColorBar } from '@components/ColorBar';
import { WeightTypes } from 'types/tipography';

export interface HeaderProps extends ComponentProps<typeof StyledHeader> {
  as?: ElementType;
  variant?: Variant;
  size?: Size;
  text: string;
  fontWeight: WeightTypes;
}

export const Header = ({ variant, size, text, fontWeight, ...rest }: HeaderProps) => {
  return (
    <StyledHeader variant={variant} size={size} {...rest}>
      <HeadingWrapper size={size}>
        <Heading size="md" weight={fontWeight}>
          {text}
        </Heading>
      </HeadingWrapper>
      <ColorBar />
    </StyledHeader>
  );
};

Header.displayName = 'Header';
