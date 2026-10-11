import { AwardIcon } from '@components/AwardIcon';
import { AwardImg } from '@components/AwardIcon/styles';

// Mesma medalha que as tabelas de criador já usavam (hospedada no imgur — dívida conhecida)
const hallOfFameMedalSrc = 'https://i.imgur.com/6ymvs72.png';

export interface HallOfFameBadgeProps {
  year?: string | number | null;
  size?: string;
  withTooltip?: boolean;
  tooltipPlacement?: 'top' | 'bottom';
  /** Classe aplicada à imagem (ex.: `hall-fama-creator-icon`, usada nos estilos de impressão dos apps). */
  className?: string;
}

/**
 * HallOfFameBadge
 *
 * Medalha do Hall da Fama (criador ou proprietário).
 *
 * @param year Ano da premiação, exibido no tooltip e no texto alternativo.
 * @param size Largura e altura da medalha (padrão `1.125rem`).
 * @param withTooltip Brilha e mostra "Hall da Fama {ano}" ao passar o mouse ou tocar, no mobile. Padrão `true`.
 * @param tooltipPlacement Posição do tooltip: 'bottom' (padrão) ou 'top'.
 */
export const HallOfFameBadge = ({
  year,
  size = '1.125rem',
  withTooltip = true,
  tooltipPlacement = 'bottom',
  className,
}: HallOfFameBadgeProps) => {
  const label = year ? `Hall da Fama ${year}` : 'Hall da Fama';
  const badge = (
    <AwardImg src={hallOfFameMedalSrc} alt={label} $size={size} className={className} />
  );

  if (!withTooltip) return badge;

  return (
    <AwardIcon label={label} tooltipPlacement={tooltipPlacement}>
      {badge}
    </AwardIcon>
  );
};

HallOfFameBadge.displayName = 'HallOfFameBadge';
