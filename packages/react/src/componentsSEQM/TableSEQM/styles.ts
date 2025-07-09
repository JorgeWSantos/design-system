import { colors, fonts, fontSizes, space } from '@abqm-ds/tokens';
import { CSSProperties, styled } from 'styled-components';

export const StyledTableSEQM = styled.table<{
  $width?: CSSProperties['width'];
  $height?: CSSProperties['height'];
}>`
  border-collapse: collapse;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '100%'};

  tbody tr:nth-child(even) {
    background-color: ${colors.greenTransparent15};
  }
  tbody tr:nth-child(odd) {
    background-color: ${colors.greenTransparent30};
  }

  font-family: ${fonts.default};
  color: ${colors.emeraldGreen75};
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
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: ${colors.green500}; // Exemplo de cor, ajuste conforme necessário
        pointer-events: none; // Para não bloquear interações
        z-index: 1;
      }

      box-sizing: border-box;
    }
  }
`;
