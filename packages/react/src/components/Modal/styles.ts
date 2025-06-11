import { XIcon } from '@abqm-ds/icons';
import { colors, radii, space } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';
import { PropModalPositions, PropModalSizes } from './types';

export const ModalOverlay = styled.div<{ $position?: PropModalPositions }>`
  display: flex;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  width: 100%;
  height: 100%;

  ${({ $position }) =>
    $position === 'center' &&
    css`
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      justify-content: center;
      align-items: center;
    `}

  ${({ $position }) =>
    $position === 'left' &&
    css`
      justify-content: flex-start;
      padding: 12px;
    `}

  ${({ $position }) =>
    $position === 'right' &&
    css`
      top: 0;
      right: 0;
      justify-content: flex-end;
      padding: 12px;
      padding-right: 0;
      max-height: 97vh;
    `}
`;

export const ModalContent = styled.div<{
  $position?: PropModalPositions;
  $size?: PropModalSizes;
}>`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  padding: ${space[6]} ${space[4]} ${space[4]} ${space[8]};
  border-radius: ${radii.md};
  position: relative;
  max-width: 100%;
  z-index: 1060;

  gap: 1rem;

  ${({ $size }) =>
    $size === 'full' &&
    css`
      background: transparent;
      gap: 0;

      padding: 0;
    `}

  ${({ $position }) =>
    $position === 'left' &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}

  ${({ $position }) =>
    $position === 'right' &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

export const DivCloseButton = styled.div<{
  $size?: PropModalSizes;
}>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3rem;

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
