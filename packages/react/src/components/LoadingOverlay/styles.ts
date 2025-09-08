import { breakpointsPx } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const StyledOverlayLoading = styled.div<{
  $withoutBackground?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$withoutBackground &&
    css`
      background: transparent;
    `}
`;
