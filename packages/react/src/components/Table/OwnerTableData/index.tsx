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
}) => {
  const cdn = 'https://i.imgur.com';
  const urlMedal = `${cdn}/6ymvs72.png`;

  return (
    <OwnerTableDataContainer className="owner-table-data-container">
      <StyledTextHallOfFameOwner $isHallOfFameOwner={!!isHallOfFameOwner}>
        <span className="owner-name">
          {value}
          {isHallOfFameOwner && (
            <img src={urlMedal} width="12" height="12" className="hall-fama-owner-icon" />
          )}
        </span>
      </StyledTextHallOfFameOwner>

      {isHallOfFameOwner && (
        <StyledSubTextHallOfFame className="hall-fama-owner-subtext">
          HALL DA FAMA {isHallOfFameOwner}
        </StyledSubTextHallOfFame>
      )}
    </OwnerTableDataContainer>
  );
};

export { OwnerTableData };
