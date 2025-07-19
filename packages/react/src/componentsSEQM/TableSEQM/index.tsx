import { useEffect } from 'react';
import {
  StyledBodyTableSEQM,
  StyledHeadTableSEQM,
  StyledTableSEQM,
  StyledTableSEQMTextTd,
  StyledTableSEQMTextTh,
} from './styles';
import { TableSEQMProps } from './types';

export const TableSEQM = ({ columns, data, width, height, ...rest }: TableSEQMProps) => {
  return (
    <StyledTableSEQM $width={width} $height={height} {...rest}>
      <StyledHeadTableSEQM>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{
                width: col.width,
                maxWidth: col.width,
                minWidth: col.minWidth,
                textAlign: col.align || 'left',
              }}
            >
              <StyledTableSEQMTextTh>{col.label}</StyledTableSEQMTextTh>
            </th>
          ))}
        </tr>
      </StyledHeadTableSEQM>
      <StyledBodyTableSEQM>
        {data.map((row, idx) => (
          <tr key={idx} className={row.isOficial ? 'aqha-column' : ''}>
            {columns.map((col) => (
              <td
                key={col.key}
                style={{
                  width: col.width,
                  maxWidth: col.width,
                  minWidth: col.minWidth,
                  textAlign: col.align || 'left',
                }}
              >
                {col.render ? (
                  col.render(row)
                ) : (
                  <StyledTableSEQMTextTd {...(col.textBold && { $bold: true })}>
                    {row[col.key]}
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
