import { colors, radii, space } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled, { css } from 'styled-components';

export const ContainerRoundedButtonWithLabel = styled.div<{ $isActive?: boolean }>`
  display: flex;
  min-width: 4.25rem;
  height: 2.25rem;
  padding: 0 ${space[2]};
  gap: ${space[1]};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  cursor: pointer;

  button {
    background-color: ${colors.white85};
  }

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    button {
      background-color: ${colors.white};
      transition: background-color 0.3s ease-in-out;
    }
    p {
      transition: color 0.3s ease-in-out;
      color: ${colors.white} !important;
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
  top: 0.35rem;
  left: 1.5rem;

  width: 0.5rem;
  height: 0.5rem;

  border-radius: ${radii.full};
  background-color: ${colors.green100};

  box-shadow: 0 0 0 1px ${colors.green100};
  z-index: 1;
`;

export const StyledText = styled(Text).attrs({
  fontSize: 'xxs',
  color: colors.white75,
})<{ $isActive?: boolean }>`
  transition: color 0.3s ease-in-out;

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.white85};
    `}
`;
