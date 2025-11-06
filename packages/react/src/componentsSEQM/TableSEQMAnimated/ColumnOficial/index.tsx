import { AbqmOficialColoredIconSEQM } from '@abqm-ds/icons';
import { space } from '@abqm-ds/tokens';
import { Text } from '@components/Text';
import styled from 'styled-components';
import { StyledTableSEQMAnimatedTextTd } from '../styles';

export const OficialColumn = styled.span`
  display: flex;
  align-items: center;
  min-height: 0.875rem;
  gap: ${space[1]};
`;

export const TableSEQMAnimatedColumnOficial = ({
  value,
  textBold,
}: {
  value: string;
  textBold?: boolean;
}) => {
  return (
    <OficialColumn>
      <AbqmOficialColoredIconSEQM width={13} height={13} />
      <StyledTableSEQMAnimatedTextTd {...(textBold && { $bold: true })}>
        {value}
      </StyledTableSEQMAnimatedTextTd>
    </OficialColumn>
  );
};
