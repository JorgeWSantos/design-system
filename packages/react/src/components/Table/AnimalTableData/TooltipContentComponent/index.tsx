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
  token: string | null;
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
  token,
  ...rest
}: TooltipContentComponentProps) => {
  // Função utilitária para validar conquistas
  const isValidAchievement = (value: any) =>
    value !== null && value !== '' && value !== undefined;

  const cdn = 'http://img.seqm.com.br/portal';
  const superhorse = `${cdn}/super-horse.png`;
  const modalidade_awards = `${cdn}/awards-modalidade.png`;
  const all_around_amador = `${cdn}/all-around.png`;
  const all_around_jovem = `${cdn}/all-around.png`;
  const ranking_geral = `${cdn}/awards-ranking-geral.png`;
  const hall_da_fama = `${cdn}/hall-da-fama.png`;

  const registerOfMerityObjectLiteral = {
    '': '',
    registro_de_merito: `${cdn}/registro-merito.png`,
    registro_de_merito_bronze: `${cdn}/registro-merito-bronze.png`,
    registro_de_merito_prata: `${cdn}/registro-merito-prata.png`,
    registro_de_merito_ouro: `${cdn}/registro-merito-ouro.png`,
    registro_de_merito_platinum: `${cdn}/registro-merito-platinum.png`,
    registro_de_merito_superior: `${cdn}/registro-merito-superior.png`,
    registro_de_merito_superior_bronze: `${cdn}/registro-merito-superior-bronze.png`,
    registro_de_merito_superior_prata: `${cdn}/registro-merito-superior-prata.png`,
    registro_de_merito_superior_ouro: `${cdn}/registro-merito-superior-ouro.png`,
    registro_de_merito_superior_platinum: `${cdn}/registro-merito-superior-platinum.png`,
    registro_de_merito_superior_diamante: `${cdn}/registro-merito-diamante.png`,
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
            const urlToRedirect =
              urlConsultaAnimal + '/perfil-do-animal/registro-de-merito/' + idAnimal;

            window.open(token ? urlToRedirect + '?tk=' + token : urlToRedirect, '_blank');
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
