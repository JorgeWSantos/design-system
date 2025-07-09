import { AbqmOficialColoredIconSEQM } from '@abqm-ds/icons';
import { space } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled from 'styled-components';

export const OficialColumn = styled.span`
  display: flex;
  align-items: center;
  height: 0.875rem;
  gap: ${space[1]};
`;

export const TableSEQMColumnOficial = ({ value }: { value: string }) => {
  return (
    <OficialColumn>
      <AbqmOficialColoredIconSEQM width={13} height={13} />
      <Text fontSize="xxs" fontWeight="semiBold" lineHeight="tight">
        {value}
      </Text>
    </OficialColumn>
  );
};
