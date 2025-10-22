import { colors, space, breakpointsPx, radii, fontSizes } from '@abqm-ds/tokens';
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
    height: 3.375rem;
    min-height: 3.375rem;
    max-height: 3.375rem;
    gap: ${space[2]};
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    padding: ${space[2]};
    align-self: stretch;

    border-top: ${radii.px} solid ${colors.white25};
    background: ${colors.emeraldGreen15};
    box-shadow: 0 0 8px 0 rgba(0, 26, 0, 0.16);
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
  border: none;
  cursor: pointer;

  transition: background-color 0.3s, border 0.3s;

  &:hover {
    background-color: ${colors.white05};
  }

  @media (max-width: ${breakpointsPx.lg}) {
    padding: 4px;
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
  background-color: transparent;
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
  align-items: center;
  gap: 0.4375rem;

  border-radius: 0.25rem;
  background-color: ${colors.emeraldGreen25};

  @media (max-width: ${breakpointsPx.md}) {
    padding: ${space[1]} ${space[2]};
    gap: 0.13rem;
  }
`;

export const StyledText = styled(Text).attrs({
  fontSize: 'xxs',
})<{ $selected?: boolean }>`
  min-width: 0.875rem;
  line-height: 0.875rem;
  color: ${({ $selected }) => ($selected ? colors.white : colors.white50)};

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.ssm};
  }
`;
