import { ComponentProps } from 'react';
import {
  CompetitorTableDataContainer,
  CompetitorTableDataContainerType,
  StyledTextCompetitor,
} from './styles';

export interface CompetitorTableDataContainerTypeProps
  extends ComponentProps<typeof CompetitorTableDataContainerType> {
  value: string;
}

const CompetitorTableData = ({
  value,
  onClick,
  ...rest
}: CompetitorTableDataContainerTypeProps) => (
  <CompetitorTableDataContainer onClick={onClick} $hasClick={!!onClick} {...rest}>
    <StyledTextCompetitor>{value}</StyledTextCompetitor>
  </CompetitorTableDataContainer>
);

CompetitorTableData.displayName = 'CompetitorTableData';

export { CompetitorTableData };
