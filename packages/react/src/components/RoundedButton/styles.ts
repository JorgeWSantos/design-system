import { theme } from '@styles/index';
import styled, { css } from 'styled-components';

export interface RoundedButtonStyleProps {
  disabled?: boolean;
}

export const StyledRoundedButton = styled.button<RoundedButtonStyleProps>`
  display: flex;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;

  width: 1.375rem;
  height: 1.375rem;

  border: none;
  border-radius: ${theme.radii.half};

  background-color: ${theme.colors.white50};

  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.white25};
    `}
`;
