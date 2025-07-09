import { CSSProperties, styled } from 'styled-components';

export const StyledTableSEQM = styled.table<{
  $width?: CSSProperties['width'];
  $height?: CSSProperties['height'];
}>`
  max-width: ${({ $width }) => $width || '100%'};
  max-height: ${({ $height }) => $height || '100%'};
`;
