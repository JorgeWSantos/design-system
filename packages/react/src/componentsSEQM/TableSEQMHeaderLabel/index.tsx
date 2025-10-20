import { CaretDownFillIcon } from '@abqm-ds/icons';
import {
  DivTitle,
  StyledBodyTableSEQM,
  StyledHeadTableSEQM,
  StyledTableSEQM,
  StyledTableSEQMTextTd,
  StyledTableSEQMTextTh,
  StyledTableSEQMThSortable,
  TableScroll,
  TextTitle,
} from './styles';

import { TableSEQMHeaderLabelProps } from './types';
import { CaretUpFillIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';
import { useTableSort } from '@componentsSEQM/TableSEQM/useTableSort';

export const TableSEQMHeaderLabel = ({
  columns,
  data,
  width,
  height,
  variant,
  headerLabel = '',
  ...rest
}: TableSEQMHeaderLabelProps) => {
  const { sortedData, sortKey, sortOrder, handleSort } = useTableSort({ columns, data });

  return (
    <TableScroll>
      <DivTitle>
        <TextTitle>{headerLabel}</TextTitle>
      </DivTitle>

      <StyledTableSEQM $width={width} $height={height} $variant={variant} {...rest}>
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
                <StyledTableSEQMTextTh $align={col.align || 'left'} $variant={variant}>
                  {col.label}
                  {col.sortable && (
                    <>
                      {sortKey === col.key ? (
                        sortOrder === 'asc' ? (
                          <CaretDownFillIcon width={6} height={6} />
                        ) : (
                          <CaretUpFillIcon width={6} height={6} />
                        )
                      ) : (
                        <StyledTableSEQMThSortable>
                          <CaretUpFillIcon
                            width={6}
                            height={6}
                            fill={colors.emeraldGreen50}
                          />
                          <CaretDownFillIcon
                            width={6}
                            height={6}
                            fill={colors.emeraldGreen50}
                          />
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
            <tr
              key={idx}
              // className={(() => {
              //   let addClasses = '';

              //   if (row?.isoficial?.value) {
              //     addClasses += 'aqha-styles';
              //   }
              //   return addClasses;
              // })()}
            >
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
    </TableScroll>
  );
};

TableSEQMHeaderLabel.displayName = 'TableSEQMHeaderLabel';

export * from './types';
