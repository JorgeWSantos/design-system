import { colors, radii } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled, { css } from 'styled-components';

interface StyledHeaderButtonProps {
  disabled?: boolean;
}

export const ContainerHeaderButton = styled.div<{ $isActive?: boolean }>`
  display: flex;
  width: 4.25rem;
  height: 2.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  cursor: pointer;

  transition: filter 0.5s ease-in-out;

  &:hover {
    p,
    button {
      filter: brightness(1.1);
      transition: filter 0.5s ease-in-out;
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      button {
        background-color: ${colors.white85};
      }
    `}
`;

export const ActiveIndicator = styled.span`
  position: absolute;
  top: 0rem;
  right: 1.25rem;

  width: 0.5rem;
  height: 0.5rem;

  border-radius: ${radii.full};
  background-color: ${colors.green100};

  box-shadow: 0 0 0 1px ${colors.green100};
  z-index: 1;
`;

export const StyledHeaderButton = styled.button<StyledHeaderButtonProps>`
  display: flex;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;

  border: none;

  width: 1.375rem;
  height: 1.375rem;

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

export const StyledText = styled(Text).attrs({
  fontSize: 'xxs',
  color: colors.white50,
})<{ $isActive?: boolean }>`
  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.white85};
    `}
`;
