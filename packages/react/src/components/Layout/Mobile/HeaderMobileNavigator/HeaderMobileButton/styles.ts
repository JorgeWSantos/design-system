import { radii } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

interface StyledHeaderButtonProps {
  disabled?: boolean;
}

export const ContainerHeaderButton = styled.div`
  display: flex;
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

  width: 2rem;
  height: 2rem;

  border-radius: ${radii.half};

  p {
    line-height: 0.875rem;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: red;
    `}
`;
