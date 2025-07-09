import { StyledTableSEQM } from './styles';
import { TableSEQMProps } from './types';

export const TableSEQM = ({ columns, data, ...rest }: TableSEQMProps) => {
  return (
    <StyledTableSEQM {...rest}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} style={{ width: col.width }}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col.key} style={{ width: col.width }}>
                {col.render ? col.render(row[col.key], row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTableSEQM>
  );
};

TableSEQM.displayName = 'TableSEQM';
