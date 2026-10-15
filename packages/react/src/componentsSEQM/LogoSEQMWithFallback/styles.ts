import { breakpointsPx, colors, radii } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const ImageContainer = styled.div<{ $light?: boolean; $small?: boolean }>`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  min-width: 60px;
  max-width: 60px;
  min-height: 50px;
  max-height: 50px;

  img,
  svg {
    min-width: 60px !important;
    max-width: 60px;
    min-height: 50px !important;
    max-height: 50px;
  }

  ${({ $small }) =>
    $small &&
    css`
      min-width: 48px;
      max-width: 48px;
      min-height: 40px;
      max-height: 40px;

      img,
      svg {
        min-width: 48px !important;
        max-width: 48px;
        min-height: 40px !important;
        max-height: 40px;
      }
    `}

  @media (max-width: ${breakpointsPx.lg}) {
    /* border: ${radii.px} solid ${colors.emeraldGreen25};
    background-color: transparent; */

    ${({ $light }) =>
      $light &&
      css`
        border: none;
        background-color: transparent;
      `}
  }
`;
