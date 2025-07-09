import { CSSProperties, styled } from 'styled-components';

export const StyledTableSEQM = styled.table<{
  $maxWidth?: CSSProperties['maxWidth'];
  $maxHeight?: CSSProperties['maxHeight'];
}>`
  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};
  max-height: ${({ $maxHeight }) => $maxHeight || '100%'};
`;
