import styled, { css } from 'styled-components';
import { colors } from '@abqm-ui2/tokens';

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
  min-width: 200px;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  color: ${colors.white};
  background: ${colors.emeraldGreen75};
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  ${({ $type }) =>
    $type === 'success' &&
    css`
      background: ${colors.green500};
      color: ${colors.white};
    `}

  ${({ $type }) =>
    $type === 'error' &&
    css`
      background: ${colors.blue900};
      color: ${colors.white};
    `}

  ${({ $type }) =>
    $type === 'info' &&
    css`
      background: ${colors.blue900};
      color: ${colors.white};
    `}

  ${({ $type }) =>
    $type === 'warning' &&
    css`
      background: ${colors.yellow200};
      color: ${colors.black};
    `}
`;
