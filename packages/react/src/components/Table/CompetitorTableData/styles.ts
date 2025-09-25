import { Text } from '@components/Text';
import { breakpointsPx, fontSizes, fontWeights } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const CompetitorTableDataContainerType = styled.div``;

export const CompetitorTableDataContainer = styled(CompetitorTableDataContainerType)<{
  $hasClick: boolean;
}>`
  display: flex;
  align-items: center;
  height: 1.25rem;

  transition: filter 0.3s;

  ${({ $hasClick }) =>
    $hasClick &&
    css`
      cursor: pointer;

      &:hover {
        filter: brightness(1.2) contrast(1.2);
      }
    `}

  @media (max-width: ${breakpointsPx.lg}) {
    height: 2rem;
  }
`;

export const StyledTextCompetitor = styled(Text).attrs({
  fontSize: 'xxs',
  fontWeight: 'semiBold',
})<{ $bolder: boolean }>`
  font-weight: ${({ $bolder }) => ($bolder ? fontWeights.semiBold : fontWeights.regular)};

  display: flex;

  white-space: nowrap;

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.ssm};
  }
`;
