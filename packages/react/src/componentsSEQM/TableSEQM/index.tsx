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
          {columns?.map((col) => (
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
        {data?.map((row, idx) => (
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
