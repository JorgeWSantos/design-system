import { Text } from '@components/Text';
import { breakpointsPx, colors, fontSizes, fontWeights } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const OwnerTableDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1.25rem;

  @media (max-width: ${breakpointsPx.lg}) {
    height: 2rem;
  }
`;

export const StyledTextHallOfFameOwner = styled(Text).attrs({
  fontSize: 'xxs',
  fontWeight: 'semiBold',
})<{ $isHallOfFameOwner: boolean | undefined }>`
  display: flex;
  gap: 0.25rem;
  justify-content: flex-start;
  align-items: flex-start;
  /* white-space: nowrap; */

  /* white-space: nowrap; */
  color: ${({ $isHallOfFameOwner }) =>
    $isHallOfFameOwner ? colors.brown700 : 'inherit'};

  margin-bottom: -0.115rem;

  svg {
    min-width: 0.8rem;
    min-height: 0.8rem;
  }

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.ssm};
  }
`;

export const StyledSubTextHallOfFame = styled(Text)`
  font-size: 5.5pt;
  font-weight: ${fontWeights.semiBold};
  color: ${colors.brown700};
  text-transform: uppercase;
  margin-top: -0.05rem;

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
