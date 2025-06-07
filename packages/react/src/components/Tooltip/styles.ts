import { colors } from '@abqm-ui2/tokens';
import styled, { css } from 'styled-components';
import type { ArrowType } from './types';

// Container that holds the Tooltip and content
export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
`;

// Tooltip text that will show on hover
export const TooltipDiv = styled.div<{ $visible: boolean; $arrowType: ArrowType }>`
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  background-color: ${colors.white};
  color: ${colors.black};
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  right: 8px;
  z-index: 10;

  /* Animating opacity and transform for smoother transitions */
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out,
    visibility 0.2s linear 0.2s; /* Delay visibility change until opacity completes */

  &::after {
    content: '';
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  ${(props) =>
    props.$arrowType === 'topRight' &&
    css`
      &::after {
        top: -5px;
        right: 10%;
        transform: translateX(50%);
        border-bottom: 5px solid ${colors.white};
      }
    `}

  ${(props) =>
    props.$arrowType === 'bottomRight' &&
    css`
      &::after {
        bottom: -5px;
        left: 90%;
        border-top: 5px solid ${colors.white};
      }
    `}

  ${(props) =>
    props.$arrowType === 'bottomCentralized' &&
    css`
      &::after {
        bottom: -5px;
        right: 50%;
        transform: translateX(-50%);
        border-top: 5px solid ${colors.white};
      }
    `}
`;
