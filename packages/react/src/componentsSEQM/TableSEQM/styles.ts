import {
  breakpointsPx,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
} from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import { CSSProperties, styled } from 'styled-components';

export const StyledTableSEQM = styled.table<{
  $width?: CSSProperties['width'];
  $height?: CSSProperties['height'];
}>`
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;

  tr {
    display: flex;
    width: 100%;
    /* max-height: 2rem; */
  }

  tr th {
    padding: ${space[1]} ${space[2]};
    font-size: ${fontSizes.xxs};
  }
`;

export const StyledTableSEQMTextTh = styled(Text).attrs({
  fontSize: 'xxs',
  fontWeight: 'semiBold',
  lineHeight: 'tight',
})`
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
  overflow: visible;
`;

export const StyledTableSEQMThSortable = styled.span`
  min-width: 0.5rem;

  :first-child {
    margin-top: 0.05rem;
  }

  :nth-child(2) {
    margin-top: -0.05rem;
  }
`;

export const StyledBodyTableSEQM = styled.tbody`
  display: flex;
  flex-direction: column;

  tr {
    display: flex;
    height: auto;
    width: 100%;
  }

  tr td {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem ${space[2]};
    gap: 0.25rem;
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

  @media (max-width: ${breakpointsPx.lg}) {
    tr td {
      padding: ${space[2]};
    }
  }
`;

export const StyledTableSEQMTextTd = styled(Text).attrs({
  fontSize: 'xxs',
  fontWeight: 'regular',
  lineHeight: 'tight',
})<{ $bold?: Boolean }>`
  font-weight: ${({ $bold }) => ($bold ? fontWeights.semiBold : fontWeights.regular)};

  @media (max-width: ${breakpointsPx.lg}) {
    font-size: ${fontSizes.ssm};
    line-height: ${lineHeights.short};
  }
`;
