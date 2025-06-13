import { XIcon, ArrowDownShortIcon } from '@abqm-ds/icons';
import { colors, radii, space } from '@abqm-ds/tokens';
import styled, { css, keyframes } from 'styled-components';
import {
  PropModalHorizontalPositions,
  PropModalSizes,
  PropModalVerticalPositions,
} from './types';

export const ModalOverlay = styled.div<{
  $positionHorizontal?: PropModalHorizontalPositions;
  $positionVertical?: PropModalVerticalPositions;
  $size?: PropModalSizes;
}>`
  display: flex;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  width: 100%;
  height: 100%;

  ${({ $positionVertical }) =>
    $positionVertical === 'top' &&
    css`
      align-items: flex-start;
    `}

  ${({ $positionVertical }) =>
    $positionVertical === 'center' &&
    css`
      align-items: center;
    `}

  ${({ $positionVertical }) =>
    $positionVertical === 'bottom' &&
    css`
      align-items: flex-end;
    `}

  ${({ $positionHorizontal }) =>
    ($positionHorizontal === 'center' || !$positionHorizontal) &&
    css`
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      justify-content: center;
    `}

  ${({ $positionHorizontal }) =>
    $positionHorizontal === 'left' &&
    css`
      top: 0;
      right: 0;
      justify-content: flex-start;
      padding-left: 0;
    `}

  ${({ $positionHorizontal }) =>
    $positionHorizontal === 'right' &&
    css`
      top: 0;
      right: 0;
      justify-content: flex-end;
      padding-right: 0;
    `}
`;

export const ModalContent = styled.div<{
  $positionHorizontal?: PropModalHorizontalPositions;
  $size?: PropModalSizes;
  $maxHeight?: string;
  $positionVertical?: PropModalVerticalPositions; // add prop
}>`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  padding: ${space[6]} ${space[4]} ${space[6]} ${space[4]};
  border-radius: ${radii.md};
  position: relative;
  max-width: 100%;
  z-index: 1060;

  min-height: 80vh;

  ${({ $maxHeight }) =>
    $maxHeight &&
    css`
      height: ${$maxHeight};
      max-height: ${$maxHeight};
    `}

  gap: 1rem;

  ${({ $size }) =>
    $size === 'full' &&
    css`
      background: transparent;
      gap: 0;

      padding: 0;
      height: 100vh;
      max-height: 100vh;
    `}

  ${({ $positionHorizontal }) =>
    $positionHorizontal === 'left' &&
    css`
      padding: ${space[6]} ${space[8]} ${space[4]} ${space[4]};

      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}

  ${({ $positionHorizontal }) =>
    $positionHorizontal === 'right' &&
    css`
      padding: ${space[6]} ${space[4]} ${space[4]} ${space[8]};

      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}

  ${({ $positionVertical }) =>
    $positionVertical === 'bottom' &&
    css`
      margin-bottom: 24px;
    `}
`;

export const DivChildren = styled.div`
  display: flex;
  overflow-y: auto;
  height: 100%;
`;

export const DivCloseButton = styled.div<{
  $size?: PropModalSizes;
}>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-height: 3rem;

  border-bottom: 1px solid ${colors.black25};

  ${({ $size }) =>
    $size === 'full' &&
    css`
      background: inherit;
      height: 1.5rem;
      border: none;
    `}
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledXIcon = styled(XIcon)<{
  $size?: PropModalSizes;
}>`
  path {
    fill: ${colors.black25};

    ${({ $size }) =>
      $size === 'full' &&
      css`
        fill: ${colors.white50};
      `}
  }
`;

// Animação para seta direita
const arrowDownAnim = keyframes`
  0% { transform: translateY(0); opacity: 0.9; }
  50% { transform: translateY(8px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.9; }
`;

export const AnimatedArrowRight = styled(ArrowDownShortIcon)`
  position: absolute;
  top: 90%;
  right: 0;
  left: 45%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  color: ${colors.emeraldGreen75};
  opacity: 0.7;
  animation: ${arrowDownAnim} 1.5s 3;
  pointer-events: none;
  z-index: 1070;

  path {
    fill: ${colors.emeraldGreen92};
  }
`;
