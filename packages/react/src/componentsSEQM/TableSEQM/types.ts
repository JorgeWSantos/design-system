import { ComponentProps, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { StyledTableSEQM } from './styles';

export interface TableSEQMProps extends ComponentProps<typeof StyledTableSEQM> {
  columns: Array<TableColumnSEQM<any>>;
  data: Record<string, any>[];
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
}

export interface TableColumnSEQM<T> {
  key: string;
  label: string;
  width?: CSSProperties['width'];
  align?: 'left' | 'center' | 'right';
  render?: (row: T) => ReactNode;
  minWidth?: CSSProperties['minWidth'];
}
