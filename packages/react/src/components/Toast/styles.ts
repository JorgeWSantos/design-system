import styled, { css } from 'styled-components';
import { colors } from '@abqm-ds/tokens';

export const ToastContainer = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ToastMessage = styled.div<{ $type?: string }>`
  display: flex;
  width: 22.5rem;
  height: 2.5rem !important;

  padding: 0.625rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  border-radius: 0.25rem 0rem 0rem 0.25rem;
  color: ${colors.white85};
  background: ${colors.emeraldGreen75};
  font-size: 1rem;
  box-shadow: -4px 4px 12px 0px rgba(0, 0, 0, 0.25);

  ${({ $type }) =>
    $type === 'success' &&
    css`
      background: ${colors.green300};
      color: ${colors.white85};

      border-top: 1px solid ${colors.green400};
      border-bottom: 1px solid ${colors.green400};
      border-left: 1px solid ${colors.green400};
    `}

  ${({ $type }) =>
    $type === 'error' &&
    css`
      background: ${colors.rose700};
      color: ${colors.white85};

      border-top: 1px solid ${colors.rose400};
      border-bottom: 1px solid ${colors.rose400};
      border-left: 1px solid ${colors.rose400};
    `}

  ${({ $type }) =>
    $type === 'info' &&
    css`
      background: ${colors.blue700};
      color: ${colors.white85};

      border-top: 1px solid ${colors.blue900};
      border-bottom: 1px solid ${colors.blue900};
      border-left: 1px solid ${colors.blue900};
    `}

  ${({ $type }) =>
    $type === 'warning' &&
    css`
      background: ${colors.yellow200};
      color: ${colors.black};
    `}
`;

export const ToastCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem;

  /* position: absolute;
  top: -16px;
  right: 0; */

  background: transparent;
  border: none;
  color: ${colors.white};
  height: 100%;

  cursor: pointer;

  svg {
    display: block;
    width: 0.656rem;
    height: 0.656rem;
    aspect-ratio: 1/1;
  }
`;
