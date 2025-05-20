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
  gap: ${theme.space[1]};

  background: ${theme.colors.white25};
  border-radius: ${theme.space[2]} ${theme.space[2]} 0px 0px;

  padding-top: ${theme.space[1]};
`;

export const HeadingWrapper = styled.div<HeaderWrapperStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  height: 100%;
  padding: 0rem ${theme.space[6]};

  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 0rem ${theme.space[3]};
    `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${theme.space[2]};
`;
