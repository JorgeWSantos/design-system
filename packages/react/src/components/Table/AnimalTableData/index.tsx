import {
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
// import MedalSVG from '@assets/icons/medal.svg';

import { StarIcon } from '@abqm-ds/icons';
import { Tooltip } from '@components/Tooltip';

interface AnimalTableDataProps {
  idAnimal: number;
  nameAnimal: string;
  imgAnimal: string | null;
  isHallOfFameAnimal: string | null;
  registerAnimal?: string;
  medal?: string;
  recordOfMerity?: string;
  modalityAwards?: string;
  allAroundAmateur?: string;
  allAroundYoung?: string;
  superHorseAward?: string;
  rankingGeralAward?: string;
}

const AnimalTableData = ({
  idAnimal,
  nameAnimal,
  imgAnimal = '',
  registerAnimal,
  isHallOfFameAnimal,
  medal = '',
  recordOfMerity,
  modalityAwards,
  allAroundAmateur,
  allAroundYoung,
  superHorseAward,
  rankingGeralAward,
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

  const ImageSrc =
    imgAnimal !== '' && imgAnimal !== null ? imgAnimal : DefaultHorseRoundedIconIMG;
  const imageSrcTooltip =
    imgAnimal !== '' && imgAnimal !== null ? imgAnimal : DefaultHorseSquadIconIMG;

  const hasSomething = !!(
    medal ||
    isHallOfFameAnimal ||
    recordOfMerity ||
    modalityAwards ||
    allAroundAmateur ||
    allAroundYoung ||
    superHorseAward ||
    rankingGeralAward
  );

  return (
    <ContainerImage className="animal-table-data-container">
      <Tooltip
        style={{ width: 'fit-content' }}
        id={
          isHallOfFameAnimal
            ? `tooltip-laurelimage-${nameAnimal}`
            : `tooltip-divimage-${nameAnimal}`
        }
        contentInside={
          hasSomething && <TooltipContentComponent ImgAnimal={imageSrcTooltip} />
        }
        arrowType="bottomLeft"
        positions={{
          top: '-106',
          left: '-5',
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
      </Tooltip>
      {isHallOfFameAnimal && (
        <LaurelImage
          className="tooltip-anchor-laurelimage"
          data-tooltip-id={`tooltip-laurelimage-${nameAnimal}`}
        />
      )}

      <DivInfo style={{}}>
        <DivTexts>
          <StyledTextHallOfFameNameAnimal $isHallOfFameAnimal={!!isHallOfFameAnimal}>
            {nameAnimal}
            {isHallOfFameAnimal && <StarIcon />}
          </StyledTextHallOfFameNameAnimal>

          {isHallOfFameAnimal ? (
            <StyledTextHallOfFame>HALL DA FAMA 2017</StyledTextHallOfFame>
          ) : (
            <StyledTextRegister>{registerAnimal}</StyledTextRegister>
          )}
        </DivTexts>

        {/* Tooltip para DivImage */}
      </DivInfo>
    </ContainerImage>
  );
};

AnimalTableData.displayName = 'AnimalTableData';

export { AnimalTableData };
