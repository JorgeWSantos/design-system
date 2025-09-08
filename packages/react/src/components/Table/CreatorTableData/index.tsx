import {
  CreatorTableDataContainer,
  StyledSubTextHallOfFame,
  StyledTextHallOfFameCreator,
} from './styles';

const CreatorTableData = ({
  value,
  isHallOfFameCreator,
  bolder = false,
  ...rest
}: {
  value: string;
  isHallOfFameCreator: string | null;
  bolder?: boolean;
}) => {
  const cdn = 'https://i.imgur.com';
  const urlMedal = `${cdn}/6ymvs72.png`;

  return (
    <CreatorTableDataContainer className="creator-table-data-container" {...rest}>
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
