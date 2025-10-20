import { ComponentProps } from 'react';
import { CSSProperties } from 'styled-components';
import { StyledTableSEQM } from './styles';
import {
  TableColumnSEQM,
  TableRowSEQM,
  TableSEQMVariants,
} from '@componentsSEQM/TableSEQM/types';
import { CardTableSEQMProps } from './Card';

export interface TableSEQMWithCardsProps extends ComponentProps<typeof StyledTableSEQM> {
  columns: Array<TableColumnSEQM>;
  data: Array<TableRowSEQM>;
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  variant?: TableSEQMVariants;
  cards: Array<CardTableSEQMProps>;
  tableStyles?: Partial<CSSProperties>;
}
