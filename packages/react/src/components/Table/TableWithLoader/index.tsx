import React from 'react';
import { Text } from '@components/Text';
import { ActivityIndicator } from '@components/ActivityIndicator';
import { TableSEQM } from '@componentsSEQM/TableSEQM';
import type { TableColumnSEQM, TableRowSEQM } from '@componentsSEQM/TableSEQM';
import { colors } from '@abqm-ds/tokens';
import { DivContainerTableRight, LoadingContainer, NotFoundContainer } from './styles';

interface TableWithLoaderProps {
  data: TableRowSEQM[];
  columns: TableColumnSEQM[];
  isLoading: boolean;
  minWidthTable?: string;
}

const TableWithLoader: React.FC<TableWithLoaderProps> = ({
  data,
  columns,
  isLoading,
  minWidthTable,
}) => {
  return (
    <DivContainerTableRight>
      {data?.length > 0 ? (
        <TableSEQM data={data} columns={columns} style={{ minWidth: minWidthTable }} />
      ) : (
        <>
          {isLoading ? (
            <LoadingContainer>
              <ActivityIndicator width={20} height={20} />
            </LoadingContainer>
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
export { TableWithLoader, type TableWithLoaderProps };
