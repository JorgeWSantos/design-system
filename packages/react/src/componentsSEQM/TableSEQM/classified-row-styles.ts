import { colors } from '@abqm-ds/tokens';
import { css } from 'styled-components';

export const classifiedRowStyles = css`
  box-sizing: border-box;

  &:nth-child(even) {
    td:first-child {
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 1.75px;
        left: 0;
        width: 1.5px;
        height: calc(100% - 4px);
        background: ${colors.yellow400};
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
        top: 1.75px;
        right: 0;
        width: 2px;
        height: calc(100% - 4px);
        background: ${colors.yellow400};
        pointer-events: none;
        z-index: 1;
      }

      box-sizing: border-box;
    }
  }

  &:nth-child(odd) {
    td:first-child {
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 1.5px;
        height: 100%;
        background: ${colors.yellow400};
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
        width: 2px;
        height: 100%;
        background: ${colors.yellow400};
        pointer-events: none;
        z-index: 1;
      }

      box-sizing: border-box;
    }
  }
`;
