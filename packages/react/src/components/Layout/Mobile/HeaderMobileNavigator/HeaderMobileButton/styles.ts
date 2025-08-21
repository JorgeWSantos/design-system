import { radii, colors } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

interface StyledHeaderButtonProps {
  disabled?: boolean;
}

export const ContainerHeaderButton = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: #737373; */

  cursor: pointer;
  transition: filter 0.5s ease-in-out;

  &:hover {
    button {
      filter: brightness(1.1);
      transition: filter 0.5s ease-in-out;
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      button {
        background-color: ${colors.white75};
      }

      svg {
        color: ${colors.emeraldGreen50};
      }
    `}
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

export const ActiveIndicator = styled.span`
  position: absolute;
  top: 0rem;
  right: 0.25rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: ${radii.full};
  background-color: ${colors.green100};
  box-shadow: 0 0 0 1px ${colors.green100};
  z-index: 1;
`;
