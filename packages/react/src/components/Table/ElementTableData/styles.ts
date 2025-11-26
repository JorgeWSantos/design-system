import { Text } from '@components/Text';
import { breakpointsPx, fontSizes, fontWeights } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const ElementTableDataContainerType = styled.div``;

export const ElementTableDataContainer = styled(ElementTableDataContainerType)<{
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

export const StyledTextElement = styled(Text).attrs({
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

export const StyledTextElement2 = styled(Text).attrs({
  fontSize: 'x',
})`
  font-weight: ${fontWeights.regular};

  display: flex;

  white-space: nowrap;

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.ssm};
  }
`;
