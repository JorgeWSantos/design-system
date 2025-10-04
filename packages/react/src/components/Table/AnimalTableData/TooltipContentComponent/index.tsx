import { colors } from '@abqm-ds/tokens';
import { ImagesAchivements, TooltipContent, TooltipContentRight } from './styles';
import { Text } from '@components/Text';
import type { SVGProps, JSX } from 'react';
import React from 'react';

interface TooltipContentComponentProps {
  idAnimal: number;
  ImgAnimal?: string | React.FC<SVGProps<SVGSVGElement>> | ((props: any) => JSX.Element);
  isHallOfFameAnimal: string | null;
  registerOfMerity?: string | null;
  modalityAwards?: string | null;
  allAroundAmateur?: string | null;
  allAroundYoung?: string | null;
  superHorseAward?: string | null;
  rankingGeneralAward?: string | null;
}

const TooltipContentComponent = ({
  idAnimal,
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
  // Função utilitária para validar conquistas
  const isValidAchievement = (value: any) =>
    value !== null && value !== '' && value !== undefined;

  const cdn = 'https://i.imgur.com/';
  const superhorse = `${cdn}/pCJKPmX.png`;
  const modalidade_awards = `${cdn}/YuhCYyc.png`;
  const all_around_amador = `${cdn}/oS8CGsJ.png`;
  const all_around_jovem = `${cdn}/KL3oYCg.png`;
  const ranking_geral = `${cdn}/7SnbguO.png`;
  const hall_da_fama = `${cdn}/iKdpXz2.png`;

  // https://i.imgur.com/oS8CGsJ.png

  const registerOfMerityObjectLiteral = {
    '': '',
    registro_de_merito: `${cdn}/wWtqfvL.png`,
    registro_de_merito_bronze: `${cdn}/sLLCvQD.png`,
    registro_de_merito_prata: `${cdn}/zTcjEms.png`,
    registro_de_merito_ouro: `${cdn}/EQOfayn.png`,
    registro_de_merito_platinum: `${cdn}/5I4HtPZ.png`,
    registro_de_merito_superior: `${cdn}/8ypvEJW.png`,
    registro_de_merito_superior_bronze: `${cdn}/7HFmc3f.png`,
    registro_de_merito_superior_prata: `${cdn}/rk2dku3.png`,
    registro_de_merito_superior_ouro: `${cdn}/HnNze7J.png`,
    registro_de_merito_superior_platinum: `${cdn}/splqHz5.png`,
    registro_de_merito_superior_diamante: `${cdn}/BvVsRmr.png`,
  };

  return (
    <TooltipContent {...rest}>
      {typeof ImgAnimal === 'string' ? (
        <img className="tooltip-image" src={ImgAnimal} />
      ) : typeof ImgAnimal === 'function' ? (
        <ImgAnimal className="tooltip-svg" />
      ) : null}

      <TooltipContentRight>
        <ImagesAchivements>
          {/* Exibe imagens conforme conquistas do animal */}
          {isValidAchievement(isHallOfFameAnimal) && <img src={hall_da_fama} />}
          {isValidAchievement(superHorseAward) && <img src={superhorse} />}
          {isValidAchievement(modalityAwards) && <img src={modalidade_awards} />}
          {isValidAchievement(allAroundAmateur) && <img src={all_around_amador} />}
          {isValidAchievement(allAroundYoung) && <img src={all_around_jovem} />}
          {isValidAchievement(rankingGeneralAward) && <img src={ranking_geral} />}
          {isValidAchievement(registerOfMerity) && (
            <img
              src={
                registerOfMerityObjectLiteral[
                  (registerOfMerity || '') as keyof typeof registerOfMerityObjectLiteral
                ]
              }
            />
          )}
        </ImagesAchivements>

        <Text
          fontSize="xxs"
          color={colors.emeraldGreen75}
          onClick={() => {
            const urlConsultaAnimal = import.meta.env.VITE_URL_CONSULTA_ANIMAL;

            window.open(
              urlConsultaAnimal + '/perfil-do-animal/registro-de-merito/' + idAnimal,
              '_blank'
            );
          }}
          style={{ cursor: 'pointer' }}
        >
          Conquistas do animal
        </Text>
      </TooltipContentRight>
    </TooltipContent>
  );
};

TooltipContentComponent.displayName = 'TooltipContentComponent';

export default TooltipContentComponent;
