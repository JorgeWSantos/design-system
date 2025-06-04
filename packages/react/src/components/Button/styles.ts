import { radii } from '@abqm-ui2/tokens';
import { theme } from '@styles/index';
import styled, { css } from 'styled-components';

export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Size = 'sm' | 'md';

export interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
}

export const StyledButton = styled.button<ButtonStyleProps>`
  all: unset;
  border-radius: ${theme.radii.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  font-family: ${theme.fonts.default};
  text-align: center;
  /* min-width: 8.438rem; */
  height: 2.75rem;
  box-sizing: border-box;
  padding: ${theme.space[2]} ${theme.space[8]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.space[2]};

  cursor: pointer;

  svg {
    width: ${theme.space[4]};
    height: ${theme.space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
  }

  ${({ variant }) =>
    (variant === 'primary' || !variant) &&
    css`
      color: ${theme.colors.white};
      background: ${theme.colors.green500};
      transition: 0.3s;

      &:not(:disabled):hover {
        /* background: ${theme.colors.green300}; */
        filter: brightness(120%);
        transition: 0.3s;
      }

      &:disabled {
        background-color: ${theme.colors.gray200};
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${theme.colors.green500};
      border: ${radii.pxx} solid ${theme.colors.green500};
      transition: 0.3s;

      &:not(:disabled):hover {
        background: ${theme.colors.green500};
        color: ${theme.colors.white};
        transition: 0.3s;
      }

      &:disabled {
        color: ${theme.colors.gray200};
        border-color: ${theme.colors.gray200};
      }
    `}

  ${({ variant }) =>
    variant === 'tertiary' &&
    css`
      color: ${theme.colors.gray100};

      &:not(:disabled):hover {
        color: ${theme.colors.white};
      }

      &:disabled {
        color: ${theme.colors.gray600};
      }
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      height: 2.125rem;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      height: 2.35rem;
    `}
`;
