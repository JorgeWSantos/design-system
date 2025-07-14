import { colors, radii } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled, { css } from 'styled-components';

interface StyledHeaderButtonProps {
  disabled?: boolean;
}

export const ContainerHeaderButton = styled.div<{ $isFiltered?: boolean }>`
  display: flex;
  width: 4.25rem;
  height: 2.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  cursor: pointer;

  ${({ $isFiltered }) =>
    $isFiltered &&
    css`
      button {
        background-color: ${colors.white85};
      }
    `}
`;

export const FilteredIndicator = styled.span`
  position: absolute;
  top: 0rem;
  right: 1.25rem;

  width: 0.5rem;
  height: 0.5rem;

  border-radius: ${radii.full};
  background-color: ${colors.green100};

  box-shadow: 0 0 0 1px ${colors.green100};
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
})<{ $isFiltered?: boolean }>`
  ${({ $isFiltered }) =>
    $isFiltered &&
    css`
      color: ${colors.white85};
    `}
`;
