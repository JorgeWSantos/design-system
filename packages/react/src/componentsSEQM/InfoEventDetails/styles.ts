import {
  breakpointsPx,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
} from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const InfoEvent = styled.div`
  width: 100%;
  display: flex;
  gap: 1.125rem;
  min-height: 3.75rem;

  @media (max-width: ${breakpointsPx.md}) {
    gap: 0.5rem;
  }
`;

export const ImageContainer = styled.div<{ $light?: boolean }>`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  min-width: 70px;
  max-width: 70px;
  min-height: 60px;
  max-height: 60px;

  img,
  svg {
    min-width: 70px !important;
    max-width: 70px;
    min-height: 60px !important;
    max-height: 60px;
  }

  @media (max-width: ${breakpointsPx.lg}) {
    border: ${radii.px} solid ${colors.emeraldGreen25};
    background-color: transparent;

    ${({ $light }) =>
      $light &&
      css`
        border: none;
        background-color: transparent;
      `}
  }
`;

export const InfoEventDetailed = styled.div<{ $wrapped: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  ${({ $wrapped }) =>
    $wrapped &&
    css`
      gap: 0.25rem;
    `}

  @media (max-width: ${breakpointsPx.lg}) {
    gap: 0.1rem;
  }
`;

export const Information = styled.div<{ $wrapped: boolean; $light?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 0.125rem;
  flex-wrap: wrap;

  ${({ $wrapped }) =>
    $wrapped &&
    css`
      flex-direction: column;
      gap: 0;
    `}

  .title {
    min-width: 4.4rem;
    color: ${({ $light }) => ($light ? colors.white50 : colors.emeraldGreen75)};
    font-size: ${fontSizes.xxs};
    font-weight: ${fontWeights.regular};
    line-height: ${lineHeights.shorter};
  }

  .subtitle {
    color: ${({ $light }) => ($light ? colors.white50 : colors.emeraldGreen75)};
    font-size: ${fontSizes.xxs};
    font-weight: ${fontWeights.regular};
    line-height: ${lineHeights.shorter};

    &.organizer {
      color: ${({ $light }) => ($light ? colors.white75 : colors.emeraldGreen75)};
      font-weight: ${fontWeights.semiBold};
    }
  }

  /* @media (max-width: 1400px) {
    flex-direction: column;
  } */

  @media (max-width: ${breakpointsPx.lg}) {
    .title {
      display: none;
    }
    .subtitle {
      font-size: ${fontSizes.ssm};
      line-height: ${lineHeights.shorter};

      &.organizer {
        line-height: ${lineHeights.short};
      }
    }
  }
`;
