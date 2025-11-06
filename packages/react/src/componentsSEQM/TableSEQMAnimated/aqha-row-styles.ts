import { colors } from '@abqm-ds/tokens';
import { css } from 'styled-components';

export const aqhaRowStyles = css`
  box-sizing: border-box;
  background-color: ${colors.greenTransparent30} !important;

  + .aqha-styles {
    border-top: 1px solid ${colors.green500};
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
      background: ${colors.green500};
      pointer-events: none;
      z-index: 1;
    }

    box-sizing: border-box;
  }
`;
