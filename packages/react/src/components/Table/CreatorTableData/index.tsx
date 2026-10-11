import { ComponentProps } from 'react';
import { HallOfFameBadge } from '@components/HallOfFameBadge';
import { LegacyBadge } from '@components/LegacyBadge';
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
  /** Ano do prêmio Legacy do criador: mostra o brasão e "LEGACY {ano}". Sem valor, nada muda. */
  legacyYear?: string | number | null;
  bolder?: boolean;
}

const CreatorTableData = ({
  value,
  isHallOfFameCreator,
  legacyYear,
  bolder = false,
  onClick,
  ...rest
}: CreatorTableDataContainerTypeProps) => {
  // Mesma linha do Consulta Animal: "HALL DA FAMA 2019 ● LEGACY 2021"
  const awards = [
    isHallOfFameCreator && `HALL DA FAMA ${isHallOfFameCreator}`,
    legacyYear && `LEGACY ${legacyYear}`,
  ].filter(Boolean);

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
          {/* Cada ícone brilha sozinho e mostra o tooltip (hover no desktop, toque no mobile) */}
          {isHallOfFameCreator && (
            <HallOfFameBadge
              year={isHallOfFameCreator}
              size="0.75rem"
              className="hall-fama-creator-icon"
            />
          )}
          {!!legacyYear && <LegacyBadge year={legacyYear} size="0.75rem" />}
        </span>
      </StyledTextHallOfFameCreator>

      {awards.length > 0 && (
        <StyledSubTextHallOfFame $bolder={bolder} className="hall-fama-creator-subtext">
          {awards.join(' ● ')}
        </StyledSubTextHallOfFame>
      )}
    </CreatorTableDataContainer>
  );
};

export { CreatorTableData };
