import React, { ComponentProps } from 'react';
import { Text } from '@components/Text';
import { TableSEQM } from '@componentsSEQM/TableSEQM';
import type {
  TableColumnSEQM,
  TableRowSEQM,
  TableSEQMVariants,
} from '@componentsSEQM/TableSEQM';
import { colors } from '@abqm-ds/tokens';
import { DivContainerTableRight, LoadingContainer, NotFoundContainer } from './styles';
import { LoadingOverlay } from '@components/LoadingOverlay';

interface TableWithLoaderProps extends ComponentProps<typeof DivContainerTableRight> {
  data: TableRowSEQM[];
  columns: TableColumnSEQM[];
  isLoading: boolean;
  minWidthTable?: string;
  variant?: TableSEQMVariants;
}

const TableWithLoader: React.FC<TableWithLoaderProps> = ({
  data,
  columns,
  isLoading,
  variant = 'light',
  ...rest
  // minWidthTable,
}) => {
  return (
    <DivContainerTableRight {...rest} $isLoading={isLoading}>
      {data?.length > 0 && !isLoading ? (
        <TableSEQM data={data} columns={columns} variant={variant} />
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

TableWithLoader.displayName = 'TableWithLoader';

export { TableWithLoader, type TableWithLoaderProps };
