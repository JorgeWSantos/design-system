import {
  ContainerAnimalTableDataType,
  ContainerImage,
  DivBorder,
  DivImage,
  DivInfo,
  DivTexts,
  LaurelImage,
  MedalImg,
  StyledTextHallOfFame,
  StyledTextHallOfFameNameAnimal,
  StyledTextRegister,
  // StyledTooltip,
} from './styles';
import { colors } from '@abqm-ds/tokens';
import { DefaultHorseRoundedIconIMG, DefaultHorseSquadIconIMG } from '@abqm-ds/icons';
import TooltipContentComponent from './TooltipContentComponent';

import { Tooltip } from '@components/Tooltip';
import { ComponentProps } from 'react';

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
  ...rest
}: AnimalTableDataProps) => {
  const medalha: Record<string, string> = {
    '': 'transparent',
    'blue-medal': colors.blue500,
    'black-medal': colors.black,
    'brown-medal': colors.brown700,
    'gray-medal': colors.gray400,
    'green-medal': colors.green300,
    'red-medal': colors.red500,
    'yellow-medal': colors.yellow200,
  };

  const cdn = 'https://i.imgur.com';
  const urlMedal = `${cdn}/6ymvs72.png`;

  const ImageSrc =
    imgAnimal !== '' && imgAnimal !== null ? imgAnimal : DefaultHorseRoundedIconIMG;
  const imageSrcTooltip =
    imgAnimal !== '' && imgAnimal !== null ? imgAnimal : DefaultHorseSquadIconIMG;

  const hasSomething = !!(
    medal ||
    isHallOfFameAnimal ||
    registerOfMerity ||
    modalityAwards ||
    allAroundAmateur ||
    allAroundYoung ||
    superHorseAward ||
    rankingGeneralAward
  );

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
      <Tooltip
        style={{ width: 'fit-content' }}
        id={
          isHallOfFameAnimal
            ? `tooltip-laurelimage-${nameAnimal}`
            : `tooltip-divimage-${nameAnimal}`
        }
        contentInside={
          hasSomething && (
            <TooltipContentComponent
              ImgAnimal={imageSrcTooltip}
              isHallOfFameAnimal={isHallOfFameAnimal}
              registerOfMerity={registerOfMerity}
              modalityAwards={modalityAwards}
              allAroundAmateur={allAroundAmateur}
              allAroundYoung={allAroundYoung}
              superHorseAward={superHorseAward}
              rankingGeneralAward={rankingGeneralAward}
            />
          )
        }
        arrowType="bottomLeft"
        positions={{
          top: '-110',
          left: '-8',
          // right: '10',
        }}
      >
        <DivImage
          key={idAnimal}
          id={idAnimal.toString()}
          className="tooltip-anchor-divimage"
          data-tooltip-id={`tooltip-divimage-${nameAnimal}`}
        >
          <DivBorder
            $medalColor={isHallOfFameAnimal ? colors.yellow200 : medalha[medal ?? '']}
          />
          {typeof ImageSrc === 'string' ? (
            <img src={ImageSrc} />
          ) : ImageSrc ? (
            <ImageSrc className="image-animal-default" />
          ) : (
            <></>
          )}
        </DivImage>
        {isHallOfFameAnimal && (
          <LaurelImage
            className="tooltip-anchor-laurelimage"
            data-tooltip-id={`tooltip-laurelimage-${nameAnimal}`}
          />
        )}
      </Tooltip>

      <DivTexts $hasClick={!!onClick} onClick={onClick}>
        <StyledTextHallOfFameNameAnimal $isHallOfFameAnimal={!!isHallOfFameAnimal}>
          <span className="animal-name">
            {nameAnimal}
            {isHallOfFameAnimal && (
              <img
                src={urlMedal}
                width="12"
                height="12"
                className="hall-fama-creator-icon"
              />
            )}
          </span>
        </StyledTextHallOfFameNameAnimal>

        {isHallOfFameAnimal ? (
          <StyledTextHallOfFame>HALL DA FAMA 2017</StyledTextHallOfFame>
        ) : (
          <StyledTextRegister>{registerAnimal}</StyledTextRegister>
        )}
      </DivTexts>
    </ContainerImage>
  );
};

AnimalTableData.displayName = 'AnimalTableData';

export { AnimalTableData };
