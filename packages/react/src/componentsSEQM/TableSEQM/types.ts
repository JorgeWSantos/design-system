import React, { ComponentProps } from 'react';
import { CSSProperties } from 'styled-components';
import { StyledTableSEQM } from './styles';

export interface TableSEQMProps extends ComponentProps<typeof StyledTableSEQM> {
  columns: Array<TableColumnSEQM<any>>;
  data: Record<string, any>[];
  maxHeight?: CSSProperties['maxHeight'];
  maxWidth?: CSSProperties['maxWidth'];
}

export interface TableColumnSEQM<T> {
  key: string;
  label: string;
  width?: CSSProperties['width'];
  align?: 'left' | 'center' | 'right';
  render?: (value: T, row: T) => React.ReactNode;
}
