import { CompetitorTableDataContainer, StyledTextCompetitor } from './styles';

const CompetitorTableData = ({ value }: { value: string }) => (
  <CompetitorTableDataContainer>
    <StyledTextCompetitor>{value}</StyledTextCompetitor>
  </CompetitorTableDataContainer>
);

CompetitorTableData.displayName = 'CompetitorTableData';

export { CompetitorTableData };
