import { colors, fonts, fontSizes, fontWeights, radii, space } from '@abqm-ds/tokens';
import {} from '@styles/index';
import styled, { css } from 'styled-components';
import { Size, Variant } from './types';
import { Text } from '@components/Text';

export interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
}

export const StyledButton = styled.button<ButtonStyleProps>`
  all: unset;
  border-radius: ${radii.sm};
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeights.medium};
  font-family: ${fonts.default};
  text-align: center;
  /* min-width: 8.438rem; */
  height: 2.75rem;
  box-sizing: border-box;
  padding: ${space[2]} ${space[8]};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${space[2]};

  cursor: pointer;

  svg {
    width: ${space[4]};
    height: ${space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
  }

  ${({ variant }) =>
    (variant === 'primary' || !variant) &&
    css`
      color: ${colors.white};
      background: ${colors.green500};
      transition: 0.3s;

      &:not(:disabled):hover {
        /* background: ${colors.green300}; */
        filter: brightness(120%);
        transition: 0.3s;
      }

      &:disabled {
        background-color: ${colors.gray200};
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      border: ${radii.pxx} solid ${colors.green500};
      transition: 0.3s;

      &:not(:disabled):hover {
        background: ${colors.green500};
        transition: 0.3s;
      }

      &:not(:disabled):hover p {
        color: ${colors.white};
      }

      &:disabled {
        border-color: ${colors.gray200};
      }

      p {
        color: ${colors.green500};
        transition: color 0.3s;
      }

      p:disabled {
        color: ${colors.gray200};
      }
    `}

  ${({ variant }) =>
    variant === 'tertiary' &&
    css`
      p {
        color: ${colors.gray100};

        &:not(:disabled):hover {
          color: ${colors.white};
        }

        &:disabled {
          color: ${colors.gray600};
        }
      }
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: ${space[2]} ${space[6]};

      height: 2rem;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      padding: ${space[2]} ${space[8]};
      height: 2.125rem;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      padding: ${space[3]} ${space[6]};
      height: 2.625rem;
    `}
`;

export const StyledButtonText = styled(Text).attrs({
  fontSize: 'smm',
  fontWeight: 'semiBold',
  lineHeight: 'tight',
})<ButtonStyleProps>`
  color: ${colors.white85};

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: ${fontSizes.ssm};
      line-height: 1rem;
    `}
`;
