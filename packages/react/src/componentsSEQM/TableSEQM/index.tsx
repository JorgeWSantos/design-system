import { useEffect } from 'react';
import {
  StyledBodyTableSEQM,
  StyledHeadTableSEQM,
  StyledTableSEQM,
  StyledTableSEQMTd,
  StyledTableSEQMTextTh,
} from './styles';
import { TableSEQMProps } from './types';

export const TableSEQM = ({
  columns,
  data,
  width,
  height,
  align,
  ...rest
}: TableSEQMProps) => {
  console.log('data', data);
  console.log('columns', columns);

  useEffect(() => {
    console.log('columns', columns);
  }, [columns]);

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
                  <StyledTableSEQMTd {...(col.textBold && { $bold: true })}>
                    {row[col.key]}
                  </StyledTableSEQMTd>
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
export { StyledTableSEQMTd, StyledTableSEQMTextTh } from './styles';
