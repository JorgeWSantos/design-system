import { colors } from '@abqm-ds/tokens';
import { DefaultHorseRoundedIconIMG, DefaultHorseSquadIconIMG } from '@abqm-ds/icons';
import { Tooltip } from '@components/Tooltip';
import { DivBorder, DivImage, LaurelImage } from './styles';
import TooltipContentComponent from './TooltipContentComponent';

export interface AnimalImageWithTooltipProps {
  idAnimal: number;
  nameAnimal: string;
  imgAnimal: string | null;
  medal?: string;
  isHallOfFameAnimal: string | null;
  registerOfMerity?: string | null;
  modalityAwards?: string | null;
  allAroundAmateur?: string | null;
  allAroundYoung?: string | null;
  superHorseAward?: string | null;
  rankingGeneralAward?: string | null;
  token: string | null;
  size?: string;
  tooltipPlacement?: 'top' | 'bottom';
}

// Imagem do animal com anel da medalha, louro do hall da fama e tooltip de conquistas
const AnimalImageWithTooltip = ({
  idAnimal,
  nameAnimal,
  imgAnimal = '',
  medal = '',
  isHallOfFameAnimal,
  registerOfMerity,
  modalityAwards,
  allAroundAmateur,
  allAroundYoung,
  superHorseAward,
  rankingGeneralAward,
  token,
  size,
  tooltipPlacement = 'top',
}: AnimalImageWithTooltipProps) => {
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
    registerOfMerity ||
    modalityAwards ||
    allAroundAmateur ||
    allAroundYoung ||
    superHorseAward ||
    rankingGeneralAward
  );

  return (
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
            idAnimal={idAnimal}
            ImgAnimal={imageSrcTooltip}
            isHallOfFameAnimal={isHallOfFameAnimal}
            registerOfMerity={registerOfMerity}
            modalityAwards={modalityAwards}
            allAroundAmateur={allAroundAmateur}
            allAroundYoung={allAroundYoung}
            superHorseAward={superHorseAward}
            rankingGeneralAward={rankingGeneralAward}
            token={token}
          />
        )
      }
      // Para baixo, ancora na base da imagem e não depende da altura do tooltip
      arrowType={tooltipPlacement === 'bottom' ? 'topLeft' : 'bottomLeft'}
      positions={
        tooltipPlacement === 'bottom'
          ? { bottom: '8', left: '0' }
          : {
              top: '-110',
              left: '-8',
              // right: '10',
            }
      }
    >
      <DivImage
        key={idAnimal}
        id={idAnimal.toString()}
        className="tooltip-anchor-divimage"
        data-tooltip-id={`tooltip-divimage-${nameAnimal}`}
        $size={size}
      >
        <DivBorder
          $medalColor={isHallOfFameAnimal ? colors.yellow200 : medalha[medal ?? '']}
          $size={size}
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
          $size={size}
        />
      )}
    </Tooltip>
  );
};

AnimalImageWithTooltip.displayName = 'AnimalImageWithTooltip';

export { AnimalImageWithTooltip };
