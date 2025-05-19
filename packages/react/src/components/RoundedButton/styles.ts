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

  width: 22px;
  height: 22px;

  border: none;
  border-radius: ${theme.radii.half};

  background-color: ${theme.colors.white};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.white50};
    `}
`;
