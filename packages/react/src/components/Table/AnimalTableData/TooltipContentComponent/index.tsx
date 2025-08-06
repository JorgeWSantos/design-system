import { colors } from '@abqm-ds/tokens';
import { ImagesAchivements, TooltipContent, TooltipContentRight } from './styles';
import { Text } from '@components/Text';
import type { SVGProps, JSX } from 'react';
import React from 'react';

interface TooltipContentComponentProps {
  ImgAnimal?: string | React.FC<SVGProps<SVGSVGElement>> | ((props: any) => JSX.Element);
  isHallOfFameAnimal: string | null;
  registerOfMerity?: string;
  modalityAwards?: string | null;
  allAroundAmateur?: string | null;
  allAroundYoung?: string | null;
  superHorseAward?: string | null;
  rankingGeneralAward?: string | null;
}

const TooltipContentComponent = ({
  ImgAnimal,
  isHallOfFameAnimal,
  registerOfMerity,
  modalityAwards,
  allAroundAmateur,
  allAroundYoung,
  superHorseAward,
  rankingGeneralAward,
  ...rest
}: TooltipContentComponentProps) => {
  const cdn = 'https://i.imgur.com/';
  const superhorse = `${cdn}/pCJKPmX.png`;
  const modalidade_awards = `${cdn}/YuhCYyc.png`;
  const all_around_amador = `${cdn}/oS8CGsJ.png`;
  const all_around_jovem = `${cdn}/KL3oYCg.png`;
  const ranking_geral = `${cdn}/7SnbguO.png`;
  const hall_da_fama = `${cdn}/iKdpXz2.png`;
  const registro_merito_bronze = `${cdn}/sLLCvQD.png`;
  const registro_merito_prata = `${cdn}/zTcjEms.png`;
  const registro_merito_ouro = `${cdn}/EQOfayn.png`;
  const registro_merito_platinum = `${cdn}/5I4HtPZ.png`;
  const registro_merito_superior = `${cdn}/8ypvEJW.png`;
  const registro_merito_superior_bronze = `${cdn}/7HFmc3f.png`;
  const registro_merito_superior_prata = `${cdn}/rk2dku3.png`;
  const registro_merito_superior_ouro = `${cdn}/HnNze7J.png`;
  const registro_merito_superior_platinum = `${cdn}/splqHz5.png`;
  const registro_merito_superior_diamante = `${cdn}/BvVsRmr.png`;

  return (
    <TooltipContent {...rest}>
      {typeof ImgAnimal === 'string' ? (
        <img className="tooltip-image" src={ImgAnimal} />
      ) : typeof ImgAnimal === 'function' ? (
        <ImgAnimal className="tooltip-svg" />
      ) : null}

      <TooltipContentRight>
        <ImagesAchivements>
          <img className="tooltip-image" src={superhorse} />
          <img className="tooltip-image" src={registro_merito_superior_diamante} />
          <img className="tooltip-image" src={registro_merito_superior_ouro} />
          <img className="tooltip-image" src={registro_merito_superior_platinum} />
        </ImagesAchivements>

        <Text fontSize="xxs" color={colors.emeraldGreen75}>
          Conquistas do animal
        </Text>
      </TooltipContentRight>
    </TooltipContent>
  );
};

TooltipContentComponent.displayName = 'TooltipContentComponent';

export default TooltipContentComponent;
