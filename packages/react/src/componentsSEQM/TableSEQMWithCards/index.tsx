import { CaretDownFillIcon } from '@abqm-ds/icons';
import {
  Container,
  ContainerCards,
  StyledBodyTableSEQM,
  StyledHeadTableSEQM,
  StyledTableSEQM,
  StyledTableSEQMTextTd,
  StyledTableSEQMTextTh,
  StyledTableSEQMThSortable,
  TableScroll,
} from './styles';

import { TableSEQMWithCardsProps } from './types';
import { CaretUpFillIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';
import { useTableSort } from '@componentsSEQM/TableSEQM/useTableSort';
import { CardTableSEQM } from './Card';

export const TableSEQMWithCards = ({
  columns,
  data,
  width,
  height,
  variant,
  cards,
  tableStyles,
  ...rest
}: TableSEQMWithCardsProps) => {
  const { sortedData, sortKey, sortOrder, handleSort } = useTableSort({ columns, data });

  return (
    <TableScroll {...rest}>
      <Container>
        <ContainerCards>
          {cards.map((card) => (
            <CardTableSEQM key={card.title} {...card} />
          ))}
        </ContainerCards>

        <StyledTableSEQM
          $width={width}
          $height={height}
          $variant={variant}
          style={tableStyles}
        >
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
      </Container>
    </TableScroll>
  );
};

TableSEQMWithCards.displayName = 'TableSEQMWithCards';

export * from './types';
export type { CardTableSEQMProps } from './Card';
