import { colors, space, breakpointsPx, radii } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  align-items: center;
  width: 20rem;
  gap: ${space[3]};

  @media (max-width: ${breakpointsPx.lg}) {
    width: 100%;
    gap: ${space[2]};
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem 0.5rem;
    flex-wrap: wrap;
  }
`;

export const ContainerPageSize = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: ${space[1]};

  @media (max-width: ${breakpointsPx.lg}) {
    /* flex-direction: column; */
    gap: 0;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const ContainerPageNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpointsPx.lg}) {
    justify-content: flex-start;
    gap: ${space[1]};
  }
`;

export const PageButton = styled.button<{ $selected?: boolean }>`
  /* padding: 7px 12px;

  ${({ $selected }) =>
    $selected &&
    css`
      padding: 8px 12px;
    `}; */

  background: transparent;
  cursor: pointer;

  transition: background-color 0.3s, border 0.3s;

  &:hover {
    background-color: ${colors.white05};
  }

  @media (max-width: ${breakpointsPx.lg}) {
    padding: 8px;
    margin: 0 0.15rem;
  }
`;

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 0.5rem;
  width: 1.4375rem;
  height: 1.4375rem;

  border: 1px solid ${colors.white50};
  border-radius: ${radii.full};
  cursor: pointer;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    cursor: pointer;
    fill: ${colors.white50};

    transition: fill 0.3s;

    &:hover {
      path {
        transition: fill 0.3s;
        fill: ${colors.white75};
      }
    }
  }

  @media (max-width: ${breakpointsPx.lg}) {
    margin: 0 4px;
  }
`;

export const ContainerPageOptions = styled.div`
  display: flex;
  min-width: 5rem;
  padding: ${space[1]} ${space[4]};
  justify-content: center;
  align-items: flex-start;
  gap: 0.4375rem;

  border-radius: 0.25rem;
  background-color: ${colors.emeraldGreen25};
`;

export const StyledText = styled(Text).attrs({
  fontSize: 'xxs',
})<{ $selected?: boolean }>`
  min-width: 0.875rem;
  line-height: 0.875rem;
  color: ${({ $selected }) => ($selected ? colors.white : colors.white50)};
`;
