import { colors, radii } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';
import { RoundedButtonVariants } from './types';

export interface RoundedButtonStyleProps {
  disabled?: boolean;
  $width?: string;
  $height?: string;
  $variant?: RoundedButtonVariants;
}

export const StyledRoundedButton = styled.button<RoundedButtonStyleProps>`
  display: flex;
  position: relative;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border: none;
  border-radius: ${radii.half};

  background-color: ${colors.white50};

  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colors.white25};
    `}

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${colors.white85};
          color: ${colors.emeraldGreen75};
          border: none;
        `;
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid ${colors.white50};
          color: ${colors.white50};
        `;
      case 'outline-white-25':
        return css`
          background-color: transparent;
          border: 1px solid ${colors.white25};
          color: ${colors.white25};
        `;
      case 'secondary':
        return css`
          background-color: ${colors.green300};
          color: ${colors.white};
          border: none;
        `;
      case 'tertiary':
        return css`
          background-color: ${colors.white25};
          color: ${colors.white50};
          border: none;
        `;
      default:
        return css``;
    }
  }}
`;

export const ActiveIndicator = styled.span`
  position: absolute;
  top: 0rem;
  right: 0rem;

  width: 0.5rem;
  height: 0.5rem;

  border-radius: ${radii.full};
  background-color: ${colors.green100};

  box-shadow: 0 0 0 1px ${colors.green100};
`;
