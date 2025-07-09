import { AqhaColoredIconSEQM } from '@abqm-ds/icons';
import { space } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled from 'styled-components';

export const AQHAColumn = styled.span`
  display: flex;
  align-items: center;
  height: 0.875rem;
  gap: ${space[1]};
`;

export const TableSEQMColumnAQHA = ({ value }: { value: string }) => {
  return (
    <AQHAColumn>
      <AqhaColoredIconSEQM width={13} height={13} />
      <Text fontSize="xxs" fontWeight="semiBold" lineHeight="tight">
        {value}
      </Text>
    </AQHAColumn>
  );
};
