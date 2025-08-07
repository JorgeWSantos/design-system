import {
  StyledBodyTableSEQM,
  StyledHeadTableSEQM,
  StyledTableSEQM,
  StyledTableSEQMTextTd,
  StyledTableSEQMTextTh,
} from './styles';

import { TableSEQMProps } from './types';
import { useState } from 'react';

export const TableSEQM = ({ columns, data, width, height, ...rest }: TableSEQMProps) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Função para ordenar os dados
  const getSortedData = () => {
    if (!sortKey) return data;

    const col = columns.find((c) => c.key === sortKey);

    if (!col) return data;

    const sorted = [...(data || [])].sort((a, b) => {
      const aValue = a[sortKey]?.value;
      const bValue = b[sortKey]?.value;

      // Tratar nulos/undefined sempre no final
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return sortOrder === 'asc' ? 1 : -1;
      if (bValue == null) return sortOrder === 'asc' ? -1 : 1;

      // Números
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      // Datas
      if (aValue instanceof Date && bValue instanceof Date) {
        return sortOrder === 'asc'
          ? aValue.getTime() - bValue.getTime()
          : bValue.getTime() - aValue.getTime();
      }

      // Strings (case insensitive)
      const aStr = String(aValue).toLocaleLowerCase();
      const bStr = String(bValue).toLocaleLowerCase();
      if (aStr < bStr) return sortOrder === 'asc' ? -1 : 1;
      if (aStr > bStr) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  };

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = getSortedData();

  return (
    <StyledTableSEQM $width={width} $height={height} {...rest}>
      <StyledHeadTableSEQM>
        <tr>
          {columns?.map((col) => (
            <th
              key={col.key}
              style={{
                width: col.width,
                maxWidth: col.width,
                minWidth: col.minWidth,
                textAlign: col.align || 'left',
                cursor: col.sortable ? 'pointer' : undefined,
              }}
              onClick={col.sortable ? () => handleSort(col.key) : undefined}
            >
              <StyledTableSEQMTextTh>
                {col.label}
                {col.sortable && (
                  <span style={{ marginLeft: 4, fontSize: 12 }}>
                    {sortKey === col.key ? (sortOrder === 'asc' ? '▲' : '▼') : '↕'}
                  </span>
                )}
              </StyledTableSEQMTextTh>
            </th>
          ))}
        </tr>
      </StyledHeadTableSEQM>
      <StyledBodyTableSEQM>
        {sortedData?.map((row, idx) => (
          <tr key={idx} className={row?.isoficial?.value ? 'aqha-column' : ''}>
            {columns?.map((col) => (
              <td
                key={col.key}
                style={{
                  width: col.width,
                  maxWidth: col.width,
                  minWidth: col.minWidth,
                  textAlign: col.align || 'left',
                }}
              >
                {row[col.key]?.render && typeof row[col.key].render === 'function' ? (
                  row[col.key]?.render?.()
                ) : (
                  <StyledTableSEQMTextTd {...(col.textBold && { $bold: true })}>
                    {row[col.key]?.value}
                  </StyledTableSEQMTextTd>
                )}
              </td>
            ))}
          </tr>
        ))}
      </StyledBodyTableSEQM>
    </StyledTableSEQM>
  );
};

TableSEQM.displayName = 'TableSEQM';

export * from './types';
export * from './ColumnOficial';
export { StyledTableSEQMTextTd, StyledTableSEQMTextTh } from './styles';
