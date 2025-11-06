import { CaretDownFillIcon } from '@abqm-ds/icons';
import {
  StyledBodyTableSEQMAnimated,
  StyledHeadTableSEQMAnimated,
  StyledTableSEQMAnimated,
  StyledTableSEQMAnimatedTextTd,
  StyledTableSEQMAnimatedTextTh,
  StyledTableSEQMAnimatedThSortable,
  TableScroll,
} from './styles';

import { TableSEQMAnimatedProps } from './types';
import { useRef } from 'react';
import { CaretUpFillIcon } from '@abqm-ds/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { colors } from '@abqm-ds/tokens';
import { useTableSort } from './useTableSort';
import { useAutoScroll } from './useAutoScroll';

export const TableSEQMAnimated = ({
  columns,
  data,
  width,
  height,
  variant,
  autoScroll = false,
  setAutoScroll = () => {},
  ...rest
}: TableSEQMAnimatedProps) => {
  const { sortedData, sortKey, sortOrder, handleSort } = useTableSort({ columns, data });

  const tableRef = useRef<HTMLTableElement | null>(null);

  useAutoScroll({ tableRef, autoScroll, setAutoScroll });

  return (
    <TableScroll ref={tableRef}>
      <StyledTableSEQMAnimated
        $width={width}
        $height={height}
        $variant={variant}
        {...rest}
      >
        <StyledHeadTableSEQMAnimated>
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
                <StyledTableSEQMAnimatedTextTh
                  $align={col.align || 'left'}
                  $variant={variant}
                >
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
                        <StyledTableSEQMAnimatedThSortable>
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
                        </StyledTableSEQMAnimatedThSortable>
                      )}
                    </>
                  )}
                </StyledTableSEQMAnimatedTextTh>
              </th>
            ))}
          </tr>
        </StyledHeadTableSEQMAnimated>

        <StyledBodyTableSEQMAnimated>
          <AnimatePresence>
            {sortedData?.map((row, idx) => (
              <motion.tr
                key={row?.key.value || idx}
                className={(() => {
                  let addClasses = '';
                  if (row?.isoficial?.value) addClasses += 'aqha-styles';
                  if (row?.isclassified?.value) addClasses += ' classified-styles';
                  if (row?.iscurrentplayer?.value) addClasses += ' currentplayer-styles';
                  if (row?.ispassedplayer?.value) addClasses += ' passedplayer-styles';
                  return addClasses;
                })()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
                transition={{ duration: 0.4, type: 'spring' }}
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
                      <StyledTableSEQMAnimatedTextTd
                        {...(col.textBold && { $bold: true })}
                      >
                        {row[col.key]?.value}
                      </StyledTableSEQMAnimatedTextTd>
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
          </AnimatePresence>
        </StyledBodyTableSEQMAnimated>
      </StyledTableSEQMAnimated>
    </TableScroll>
  );
};

TableSEQMAnimated.displayName = 'TableSEQMAnimated';

export { StyledTableSEQMAnimatedTextTd, StyledTableSEQMAnimatedTextTh } from './styles';
