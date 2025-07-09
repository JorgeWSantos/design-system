import { colors, fonts, fontSizes, space } from '@abqm-ds/tokens';
import { CSSProperties, styled } from 'styled-components';

export const StyledTableSEQM = styled.table<{
  $width?: CSSProperties['width'];
  $height?: CSSProperties['height'];
}>`
  border-collapse: collapse;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || 'unset'};

  tbody tr:nth-child(odd) {
    background-color: ${colors.white25};
  }

  tbody tr:nth-child(even) {
    background-color: ${colors.greenTransparent15};
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
    padding: 0.5625rem ${space[2]};
    font-size: ${fontSizes.xxs};
  }

  .aqha-column {
    box-sizing: border-box;
    background-color: ${colors.greenTransparent30} !important;

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
