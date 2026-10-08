import {
  ContainerAnimalTableDataType,
  ContainerImage,
  DivInfo,
  DivTexts,
  MedalImg,
  StyledTextHallOfFame,
  StyledTextHallOfFameNameAnimal,
  StyledTextRegister,
  // StyledTooltip,
} from './styles';
import { colors } from '@abqm-ds/tokens';
import { ChevronDownIcon, CrossFullfiledIcon } from '@abqm-ds/icons';
import { AnimalImageWithTooltip } from './AnimalImageWithTooltip';

import React, { ComponentProps } from 'react';

export interface AnimalTableDataProps
  extends ComponentProps<typeof ContainerAnimalTableDataType> {
  idAnimal: number;
  nameAnimal: string;
  imgAnimal: string | null;
  medal?: string;
  registerAnimal: string | null;
  isHallOfFameAnimal: string | null;
  registerOfMerity?: string | null;
  modalityAwards?: string | null;
  allAroundAmateur?: string | null;
  allAroundYoung?: string | null;
  superHorseAward?: string | null;
  rankingGeneralAward?: string | null;
  bolder?: boolean;
  isDead?: boolean;
  textStyles?: React.CSSProperties;
  onClick?: () => void;
  token: string | null;
}

const AnimalTableData = ({
  idAnimal,
  nameAnimal,
  imgAnimal = '',
  registerAnimal,
  isHallOfFameAnimal,
  medal = '',
  registerOfMerity,
  modalityAwards,
  allAroundAmateur,
  allAroundYoung,
  superHorseAward,
  rankingGeneralAward,
  onClick,
  bolder = false,
  isDead = false,
  textStyles,
  token,
  ...rest
}: AnimalTableDataProps) => {
  const cdn = 'https://i.imgur.com';
  const urlMedal = `${cdn}/6ymvs72.png`;

  const infoString = [
    medal && `medal=${medal}`,
    isHallOfFameAnimal && 'isHallOfFame',
    registerOfMerity && `registerOfMerity=${registerOfMerity}`,
    modalityAwards && `modalityAwards=${modalityAwards}`,
    allAroundAmateur && `allAroundAmateur=${allAroundAmateur}`,
    allAroundYoung && `allAroundYoung=${allAroundYoung}`,
    superHorseAward && `superHorseAward=${superHorseAward}`,
    rankingGeneralAward && `rankingGeneralAward=${rankingGeneralAward}`,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <ContainerImage className="animal-table-data-container" id={infoString} {...rest}>
      <AnimalImageWithTooltip
        idAnimal={idAnimal}
        nameAnimal={nameAnimal}
        imgAnimal={imgAnimal}
        medal={medal}
        isHallOfFameAnimal={isHallOfFameAnimal}
        registerOfMerity={registerOfMerity}
        modalityAwards={modalityAwards}
        allAroundAmateur={allAroundAmateur}
        allAroundYoung={allAroundYoung}
        superHorseAward={superHorseAward}
        rankingGeneralAward={rankingGeneralAward}
        token={token}
      />

      <DivTexts $hasClick={!!onClick} onClick={onClick}>
        <StyledTextHallOfFameNameAnimal
          $bolder={bolder}
          $isHallOfFameAnimal={!!isHallOfFameAnimal}
          style={textStyles}
        >
          <span className="animal-name">
            {nameAnimal}

            {isHallOfFameAnimal && !isDead && (
              <img
                src={urlMedal}
                width="12"
                height="12"
                className="hall-fama-creator-icon"
              />
            )}
          </span>

          {isDead && (
            <CrossFullfiledIcon
              fill={colors.yellow500}
              stroke={colors.emeraldGreen40}
              width={8}
              style={{
                marginLeft: '0.1rem',
              }}
            />
          )}
        </StyledTextHallOfFameNameAnimal>

        {isHallOfFameAnimal && !isDead ? (
          <StyledTextHallOfFame className="hall-of-fame-animal-subtext">
            HALL DA FAMA 2017
          </StyledTextHallOfFame>
        ) : (
          <StyledTextRegister $bolder={bolder}>{registerAnimal}</StyledTextRegister>
        )}
      </DivTexts>
    </ContainerImage>
  );
};

AnimalTableData.displayName = 'AnimalTableData';

export { AnimalTableData };
export * from './AnimalImageWithTooltip';
