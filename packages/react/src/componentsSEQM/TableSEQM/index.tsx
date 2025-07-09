import { Text } from '@components/Text';
import { StyledBodyTableSEQM, StyledHeadTableSEQM, StyledTableSEQM } from './styles';
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
      <StyledHeadTableSEQM>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{ width: col.width, textAlign: col.align || 'left' }}
            >
              <Text fontSize="xxs" fontWeight="semiBold" lineHeight="tight">
                {col.label}
              </Text>
            </th>
          ))}
        </tr>
      </StyledHeadTableSEQM>
      <StyledBodyTableSEQM>
        {data.map((row, idx) => (
          <tr key={idx} className={row.isAQHA ? 'aqha-column' : ''}>
            {columns.map((col) => (
              <td
                key={col.key}
                style={{ width: col.width, textAlign: col.align || 'left' }}
              >
                {col.render ? (
                  col.render(row)
                ) : (
                  <Text fontSize="xxs" fontWeight="regular" lineHeight="tight">
                    {row[col.key]}
                  </Text>
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
