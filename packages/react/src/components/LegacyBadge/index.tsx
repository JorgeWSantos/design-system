import { AwardIcon } from '@components/AwardIcon';
import { AwardImg } from '@components/AwardIcon/styles';
import { legacyIconSrc } from './legacyIcon';

export interface LegacyBadgeProps {
  year?: string | number | null;
  size?: string;
  withTooltip?: boolean;
  tooltipPlacement?: 'top' | 'bottom';
}

/**
 * LegacyBadge
 *
 * Brasão do prêmio Legacy do criador (Quarto de Milha Legacy).
 *
 * @param year Ano da premiação, exibido no tooltip e no texto alternativo.
 * @param size Largura e altura do brasão (padrão `1.125rem`).
 * @param withTooltip Brilha e mostra "Legacy {ano}" ao passar o mouse ou tocar, no mobile. Padrão `true`.
 * @param tooltipPlacement Posição do tooltip: 'bottom' (padrão) ou 'top'.
 */
export const LegacyBadge = ({
  year,
  size = '1.125rem',
  withTooltip = true,
  tooltipPlacement = 'bottom',
}: LegacyBadgeProps) => {
  const label = year ? `Legacy ${year}` : 'Legacy';
  const badge = <AwardImg src={legacyIconSrc} alt={label} $size={size} />;

  if (!withTooltip) return badge;

  return (
    <AwardIcon label={label} tooltipPlacement={tooltipPlacement}>
      {badge}
    </AwardIcon>
  );
};

LegacyBadge.displayName = 'LegacyBadge';
