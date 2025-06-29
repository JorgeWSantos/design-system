import { theme } from '@styles/index';
import styled, { css } from 'styled-components';

interface StyledHeaderButtonProps {
  disabled?: boolean;
}

export const ContainerHeaderButton = styled.div`
  display: flex;
  width: 4.25rem;
  height: 2.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: #737373; */
`;

export const StyledHeaderButton = styled.button<StyledHeaderButtonProps>`
  display: flex;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;

  border: none;

  width: 1.375rem;
  height: 1.375rem;

  border-radius: ${theme.radii.half};

  p {
    line-height: 0.875rem;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: red;
    `}
`;
