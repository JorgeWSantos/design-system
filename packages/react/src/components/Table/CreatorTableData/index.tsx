import { ComponentProps } from 'react';
import {
  CreatorTableDataContainer,
  StyledSubTextHallOfFame,
  StyledTextHallOfFameCreator,
  CreatorTableDataContainerType,
} from './styles';

export interface CreatorTableDataContainerTypeProps
  extends ComponentProps<typeof CreatorTableDataContainerType> {
  value: string;
  isHallOfFameCreator: string | null;
  bolder?: boolean;
}

const CreatorTableData = ({
  value,
  isHallOfFameCreator,
  bolder = false,
  onClick,
  ...rest
}: CreatorTableDataContainerTypeProps) => {
  const cdn = 'https://i.imgur.com';
  const urlMedal = `${cdn}/6ymvs72.png`;

  return (
    <CreatorTableDataContainer
      className="creator-table-data-container"
      onClick={onClick}
      $hasClick={!!onClick}
      {...rest}
    >
      <StyledTextHallOfFameCreator
        $bolder={bolder}
        $isHallOfFameCreator={!!isHallOfFameCreator}
      >
        <span className="creator-name">
          {value}
          {isHallOfFameCreator && (
            <img
              src={urlMedal}
              width="12"
              height="12"
              className="hall-fama-creator-icon"
            />
          )}
        </span>
      </StyledTextHallOfFameCreator>

      {isHallOfFameCreator && (
        <StyledSubTextHallOfFame $bolder={bolder} className="hall-fama-creator-subtext">
          HALL DA FAMA {isHallOfFameCreator}
        </StyledSubTextHallOfFame>
      )}
    </CreatorTableDataContainer>
  );
};

export { CreatorTableData };
