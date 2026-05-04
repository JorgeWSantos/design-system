import { colors, fontWeights } from '@abqm-ds/tokens';
import { css } from 'styled-components';

export const currentPlayerRowStyles = css`
  box-sizing: border-box;
  background-color: ${colors.yellow100}33 !important;
  color: ${colors.brown400};

  p,
  span {
    color: ${colors.brown400} !important;
    font-weight: ${fontWeights.semiBold} !important;
  }

  td:first-child {
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: ${colors.brown400};
      pointer-events: none;
      z-index: 1;
    }

    box-sizing: border-box;
  }

  td:last-child {
    position: relative;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 100%;
      background: ${colors.brown400};
      pointer-events: none;
      z-index: 1;
    }

    box-sizing: border-box;
  }
`;
