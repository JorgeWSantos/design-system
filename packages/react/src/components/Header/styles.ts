import { theme } from '@styles/index';
import styled, { css } from 'styled-components';

export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Size = 'sm' | 'md';

export interface StyledHeaderProps {
  variant?: Variant;
}

export interface HeaderWrapperStyleProps {
  size?: Size;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: red;
  height: 2.875rem;

  background: ${theme.colors.white25};
  border-radius: ${theme.space[2]} ${theme.space[2]} 0px 0px;

  padding-top: ${theme.space[4]};
`;

export const HeadingWrapper = styled.div<HeaderWrapperStyleProps>`
  display: flex;
  height: 100%;
  padding: 0rem ${theme.space[6]};

  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 0rem ${theme.space[3]};
    `}
`;
