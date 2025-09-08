import { Text } from '@components/Text';
import { breakpointsPx, colors, fontSizes, fontWeights } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const CreatorTableDataContainerType = styled.div``;

export const CreatorTableDataContainer = styled(CreatorTableDataContainerType)<{
  $hasClick: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const StyledTextHallOfFameCreator = styled(Text).attrs({
  fontSize: 'xxs',
  fontWeight: 'semiBold',
})<{ $isHallOfFameCreator: boolean | undefined; $bolder: boolean }>`
  /* Remove flex from root, use inline-flex on span for better icon alignment */
  color: ${({ $isHallOfFameCreator }) =>
    $isHallOfFameCreator ? colors.brown700 : 'inherit'};
  /* margin-bottom: -0.1rem; */

  font-weight: ${({ $bolder }) => ($bolder ? fontWeights.semiBold : fontWeights.regular)};

  span {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.25rem;
  }

  svg {
    min-width: 0.8rem;
    min-height: 0.8rem;
  }

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.ssm};
  }
`;

export const StyledSubTextHallOfFame = styled(Text)<{
  $bolder: boolean;
}>`
  font-size: 5.5pt;
  font-weight: ${({ $bolder }) => ($bolder ? fontWeights.semiBold : fontWeights.regular)};
  color: ${colors.brown700};
  text-transform: uppercase;
  margin-bottom: -0.2rem;

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.x};
  }
`;

export const MedalImg = styled.img`
  width: 1rem;
  height: 1rem;
  aspect-ratio: 1/1;
  margin-top: -0.15rem;
`;
