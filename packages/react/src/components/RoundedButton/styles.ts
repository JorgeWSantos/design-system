import { colors, radii } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export interface RoundedButtonStyleProps {
  disabled?: boolean;
  $width?: string;
  $height?: string;
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
