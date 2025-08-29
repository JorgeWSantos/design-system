import { ComponentProps } from 'react';
import {
  CompetitorTableDataContainer,
  CompetitorTableDataContainerType,
  StyledTextCompetitor,
} from './styles';

export interface CompetitorTableDataContainerTypeProps
  extends ComponentProps<typeof CompetitorTableDataContainerType> {
  value: string;
  bolder?: boolean;
}

const CompetitorTableData = ({
  value,
  onClick,
  bolder = false,
  ...rest
}: CompetitorTableDataContainerTypeProps) => (
  <CompetitorTableDataContainer onClick={onClick} $hasClick={!!onClick} {...rest}>
    <StyledTextCompetitor $bolder={bolder}>{value}</StyledTextCompetitor>
  </CompetitorTableDataContainer>
);

CompetitorTableData.displayName = 'CompetitorTableData';

export { CompetitorTableData };
