import { ComponentProps } from 'react';
import {
  MedalImg,
  OwnerTableDataContainer,
  OwnerTableDataContainerType,
  StyledSubTextHallOfFame,
  StyledTextHallOfFameOwner,
} from './styles';

export interface OwnerTableDataContainerTypeProps
  extends ComponentProps<typeof OwnerTableDataContainerType> {
  value: string;
  isHallOfFameOwner: string | null;
  bolder?: boolean;
}

const OwnerTableData = ({
  value,
  isHallOfFameOwner,
  bolder = false,
  onClick,
  ...rest
}: OwnerTableDataContainerTypeProps) => {
  const cdn = 'https://i.imgur.com';
  const urlMedal = `${cdn}/6ymvs72.png`;

  return (
    <OwnerTableDataContainer
      className="owner-table-data-container"
      onClick={onClick}
      $hasClick={!!onClick}
      {...rest}
    >
      <StyledTextHallOfFameOwner
        $bolder={bolder}
        $isHallOfFameOwner={!!isHallOfFameOwner}
      >
        <span className="owner-name">
          {value}
          {isHallOfFameOwner && (
            <img src={urlMedal} width="12" height="12" className="hall-fama-owner-icon" />
          )}
        </span>
      </StyledTextHallOfFameOwner>

      {isHallOfFameOwner && (
        <StyledSubTextHallOfFame $bolder={bolder} className="hall-fama-owner-subtext">
          HALL DA FAMA {isHallOfFameOwner}
        </StyledSubTextHallOfFame>
      )}
    </OwnerTableDataContainer>
  );
};

export { OwnerTableData };
