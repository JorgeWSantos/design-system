import {
  MedalImg,
  OwnerTableDataContainer,
  StyledSubTextHallOfFame,
  StyledTextHallOfFameOwner,
} from './styles';
import { StarIcon } from '@abqm-ds/icons';

const OwnerTableData = ({
  value,
  isHallOfFameOwner,
}: {
  value: string;
  isHallOfFameOwner: string | null;
}) => (
  <OwnerTableDataContainer>
    <StyledTextHallOfFameOwner $isHallOfFameOwner={!!isHallOfFameOwner}>
      <span>{value}</span>
      {isHallOfFameOwner && <StarIcon />}
    </StyledTextHallOfFameOwner>

    {isHallOfFameOwner && (
      <StyledSubTextHallOfFame>HALL DA FAMA {isHallOfFameOwner}</StyledSubTextHallOfFame>
    )}
  </OwnerTableDataContainer>
);

export { OwnerTableData };
