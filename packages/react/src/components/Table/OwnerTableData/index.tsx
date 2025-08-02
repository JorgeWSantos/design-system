import {
  MedalImg,
  OwnerTableDataContainer,
  StyledSubTextHallOfFame,
  StyledTextHallOfFameOwner,
} from './styles';

import medalSvg from './medal.svg';

const OwnerTableData = ({
  value,
  isHallOfFameOwner,
}: {
  value: string;
  isHallOfFameOwner: string | null;
}) => (
  <OwnerTableDataContainer>
    <StyledTextHallOfFameOwner $isHallOfFameOwner={!!isHallOfFameOwner}>
      {value}
      {isHallOfFameOwner && (
        <img
          src={medalSvg}
          alt="Medalha"
          style={{
            width: '1rem',
            height: '1rem',
            aspectRatio: '1/1',
            marginTop: '-0.15rem',
          }}
        />
      )}
    </StyledTextHallOfFameOwner>

    {isHallOfFameOwner && (
      <StyledSubTextHallOfFame>HALL DA FAMA {isHallOfFameOwner}</StyledSubTextHallOfFame>
    )}
  </OwnerTableDataContainer>
);

export { OwnerTableData };
