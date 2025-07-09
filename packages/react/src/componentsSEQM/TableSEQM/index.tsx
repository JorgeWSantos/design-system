import { StyledTableSEQM } from './styles';
import { TableSEQMProps } from './types';

export const TableSEQM = ({
  columns,
  data,
  width,
  height,
  align,
  ...rest
}: TableSEQMProps) => {
  return (
    <StyledTableSEQM $width={width} $height={height} {...rest}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{ width: col.width, textAlign: col.align || 'left' }}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td
                key={col.key}
                style={{ width: col.width, textAlign: col.align || 'left' }}
              >
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTableSEQM>
  );
};

TableSEQM.displayName = 'TableSEQM';

export * from './types';
