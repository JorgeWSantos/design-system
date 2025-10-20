import { ComponentProps } from 'react';
import { CSSProperties } from 'styled-components';
import { StyledTableSEQM } from './styles';
import {
  TableColumnSEQM,
  TableRowSEQM,
  TableSEQMVariants,
} from '@componentsSEQM/TableSEQM/types';

export interface TableSEQMHeaderLabelProps
  extends ComponentProps<typeof StyledTableSEQM> {
  columns: Array<TableColumnSEQM>;
  data: Array<TableRowSEQM>;
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  variant?: TableSEQMVariants;
  headerLabel: string;
}
