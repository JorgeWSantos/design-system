import { ComponentProps, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { StyledTableSEQM } from './styles';

export interface TableSEQMProps extends ComponentProps<typeof StyledTableSEQM> {
  columns: Array<TableColumnSEQM>;
  data: Array<TableRowSEQM>;
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
}

export type TableRowSEQM = {
  [key: string]: {
    value?: any;
    render?: () => ReactNode;
  };
};

export interface TableColumnSEQM {
  key: string;
  label: string;
  width?: CSSProperties['width'];
  align?: 'left' | 'center' | 'right';
  // render?: (row: T) => ReactNode;
  minWidth?: CSSProperties['minWidth'];
  textBold?: boolean;
  /** Se true, permite ordenação nesta coluna */
  sortable?: boolean;
}
