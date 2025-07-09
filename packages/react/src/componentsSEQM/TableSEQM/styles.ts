import { colors, fonts, fontSizes, space } from '@abqm-ds/tokens';
import { CSSProperties, styled } from 'styled-components';

export const StyledTableSEQM = styled.table<{
  $width?: CSSProperties['width'];
  $height?: CSSProperties['height'];
}>`
  border-collapse: collapse;
  max-width: ${({ $width }) => $width || '100%'};
  max-height: ${({ $height }) => $height || '100%'};

  /* thead tr {
    background-color: ${colors.greenTransparent30};
  } */

  tbody tr:nth-child(even) {
    background-color: ${colors.greenTransparent30};
  }
  tbody tr:nth-child(odd) {
    background-color: ${colors.green900};
  }

  font-family: ${fonts.default};
`;

export const StyledHeadTableSEQM = styled.thead`
  tr th {
    padding: ${space[1]} ${space[2]};
    font-size: ${fontSizes.xxs};
  }
`;

export const StyledBodyTableSEQM = styled.tbody`
  tr td {
    padding: ${space[2]};
    font-size: ${fontSizes.xxs};
  }

  .aqha-column {
    box-sizing: border-box;

    td:first-child {
      border-left: 4px solid ${colors.brown500};
      box-sizing: border-box;
    }
  }
`;
