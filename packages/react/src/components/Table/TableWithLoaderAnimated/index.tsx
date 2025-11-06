import React, { ComponentProps } from 'react';
import { Text } from '@components/Text';
import { TableSEQMAnimated } from '@componentsSEQM/TableSEQMAnimated';

import { colors } from '@abqm-ds/tokens';
import { DivContainerTableRight, LoadingContainer, NotFoundContainer } from './styles';
import { LoadingOverlay } from '@components/LoadingOverlay';
import { TableColumnSEQM, TableRowSEQM } from '@componentsSEQM/TableSEQM';
import { TableSEQMAnimatedVariants } from '@componentsSEQM/TableSEQMAnimated/types';

interface TableWithLoaderAnimatedProps
  extends ComponentProps<typeof DivContainerTableRight> {
  data: TableRowSEQM[];
  columns: TableColumnSEQM[];
  isLoading: boolean;
  minWidthTable?: string;
  variant?: TableSEQMAnimatedVariants;
  autoScroll?: boolean;
  setAutoScroll?: (value: boolean) => void;
}

const TableWithLoaderAnimated: React.FC<TableWithLoaderAnimatedProps> = ({
  data,
  columns,
  isLoading,
  variant = 'light',
  autoScroll = false,
  setAutoScroll = () => {},
  ...rest
  // minWidthTable,
}) => {
  return (
    <DivContainerTableRight {...rest} $isLoading={isLoading}>
      {data?.length > 0 && !isLoading ? (
        <TableSEQMAnimated
          data={data}
          columns={columns}
          variant={variant}
          autoScroll={autoScroll}
          setAutoScroll={setAutoScroll}
        />
      ) : (
        <>
          {isLoading ? (
            <LoadingOverlay withoutBackground sizes={{ desktop: 25, mobile: 25 }} />
          ) : (
            <NotFoundContainer>
              <Text fontSize="smm" fontWeight="semiBold" color={colors.emeraldGreen75}>
                Nenhum resultado encontrado
              </Text>
            </NotFoundContainer>
          )}
        </>
      )}
    </DivContainerTableRight>
  );
};

TableWithLoaderAnimated.displayName = 'TableWithLoaderAnimated';

export { TableWithLoaderAnimated, type TableWithLoaderAnimatedProps };
