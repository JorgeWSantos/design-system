import { CaretDownFillIcon } from '@abqm-ds/icons';
import {
  StyledBodyTableSEQM,
  StyledHeadTableSEQM,
  StyledTableSEQM,
  StyledTableSEQMTextTd,
  StyledTableSEQMTextTh,
  StyledTableSEQMThSortable,
} from './styles';

import { TableSEQMProps } from './types';
import { useState } from 'react';
import { CaretUpFillIcon } from '@abqm-ds/icons';

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

      // Strings numéricas ordinais (ex: '1°', '10°')
      const ordinalRegex = /^\s*(\d+)[°º]?\s*$/;
      const aMatch = typeof aValue === 'string' && aValue.match(ordinalRegex);
      const bMatch = typeof bValue === 'string' && bValue.match(ordinalRegex);

      // Strings numéricas ordinais (ex: '1°', '10°')
      if (aMatch && bMatch) {
        const aNum = parseInt(aMatch[1], 10);
        const bNum = parseInt(bMatch[1], 10);
        return sortOrder === 'asc' ? aNum - bNum : bNum - aNum;
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
                // textAlign: col.align || 'left',
                cursor: col.sortable ? 'pointer' : undefined,
                display: 'flex',
                justifyContent:
                  col.align === 'center'
                    ? 'center'
                    : col.align === 'right'
                    ? 'flex-end'
                    : 'flex-start',
              }}
              onClick={col.sortable ? () => handleSort(col.key) : undefined}
            >
              <StyledTableSEQMTextTh>
                {col.label}
                {col.sortable && (
                  <>
                    {sortKey === col.key ? (
                      sortOrder === 'asc' ? (
                        <CaretDownFillIcon
                          style={{ minWidth: '0.5rem' }}
                          width={7}
                          height={7}
                        />
                      ) : (
                        <CaretUpFillIcon
                          style={{ minWidth: '0.5rem' }}
                          width={7}
                          height={7}
                        />
                      )
                    ) : (
                      <StyledTableSEQMThSortable>
                        <CaretUpFillIcon width={6} height={6} />
                        <CaretDownFillIcon width={6} height={6} />
                      </StyledTableSEQMThSortable>
                    )}
                  </>
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
