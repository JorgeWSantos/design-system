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
import { css, CSSProperties, styled } from 'styled-components';
import { TableSEQMVariants } from './types';
import { aqhaRowStyles } from './aqhaRowStyles';

export const TableScroll = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  min-width: 100%;

  @media (max-width: ${breakpointsPx.lg}) {
    display: flex;
    flex-direction: row;
    height: 100%;

    &::before {
      content: '\\00a0';
      display: block;
      min-width: 0.5rem;
      height: 16px;
    }
    &::after {
      content: '\\00a0';
      display: block;
      min-width: 0.5rem;
      height: 16px;
    }
  }
`;

export const StyledTableSEQM = styled.table<{
  $width?: CSSProperties['width'];
  $height?: CSSProperties['height'];
  $variant?: TableSEQMVariants;
}>`
  display: table;
  border-collapse: collapse;
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'unset'};
  table-layout: auto;

  font-family: ${fonts.default};
  color: ${colors.emeraldGreen75};

  tbody tr:nth-child(odd) {
    background-color: ${colors.white25};

    ${({ $variant }) =>
      $variant === 'dark' &&
      css`
        background-color: ${colors.white10};
        color: ${colors.white75};
      `}
  }
`;

export const StyledHeadTableSEQM = styled.thead`
  display: table-header-group;

  tr {
    display: table-row;
  }

  tr th {
    display: table-cell;
    padding: ${space[1]} ${space[3]} ${space[1]} ${space[2]};
    font-size: ${fontSizes.xxs};
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
  }

  @media (max-width: ${breakpointsPx.lg}) {
    tr th {
      white-space: nowrap;
    }
  }
`;

export const StyledTableSEQMTextTh = styled(Text).attrs({
  fontSize: 'xxs',
  fontWeight: 'semiBold',
  lineHeight: 'tight',
})<{
  $align?: 'left' | 'center' | 'right';
  $variant?: TableSEQMVariants;
}>`
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
  overflow: visible;
  justify-content: ${({ $align }) =>
    $align === 'center' ? 'center' : $align === 'right' ? 'flex-end' : 'flex-start'};
  text-align: ${({ $align }) => $align || 'left'};

  ${({ $variant }) =>
    $variant === 'dark' &&
    css`
      color: ${colors.white75};
    `}
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
  display: table-row-group;

  tr {
    display: table-row;
    height: auto;
  }

  tr td {
    display: table-cell;
    vertical-align: middle;
    padding: ${space[2]} ${space[3]} ${space[2]} ${space[2]};
    gap: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .aqha-styles {
    ${aqhaRowStyles}
  }

  .classified-row {
    ${aqhaRowStyles}
  }

  @media (max-width: ${breakpointsPx.lg}) {
    tr td {
      padding: ${space[2]};
      white-space: nowrap;
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
