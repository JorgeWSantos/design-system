import { MouseEvent, ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { Tooltip } from '@components/Tooltip';
import { AwardIconWrapper, AwardTooltipText } from './styles';

// A seta (topLeft/bottomLeft) fica a ~9px da borda esquerda do tooltip (left 5% + metade dos 10px)
const ARROW_CENTER_PX = 9;

interface AwardIconProps {
  label: string;
  children: ReactNode;
  tooltipPlacement?: 'top' | 'bottom';
}

// Ícone de premiação (Hall da Fama, Legacy) com brilho próprio e tooltip com o `label`.
// Desktop: abre no hover. Mobile: abre no toque, e o clique não sobe para o elemento pai
// (ex.: célula clicável da tabela, que navegaria para o detalhe).
export const AwardIcon = ({ label, children, tooltipPlacement = 'bottom' }: AwardIconProps) => {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [offsetX, setOffsetX] = useState(0);

  // Centraliza a seta no ícone, seja qual for o tamanho dele (12px na tabela, maior no cabeçalho)
  useLayoutEffect(() => {
    const width = wrapperRef.current?.getBoundingClientRect().width;
    if (width) setOffsetX(Math.round(width / 2 - ARROW_CENTER_PX));
  }, []);

  return (
    <AwardIconWrapper
      ref={wrapperRef}
      className="award-icon"
      tabIndex={0}
      aria-label={label}
      onClick={(e: MouseEvent) => e.stopPropagation()}
    >
      <Tooltip
        style={{ width: 'fit-content' }}
        contentInside={<AwardTooltipText>{label}</AwardTooltipText>}
        arrowType={tooltipPlacement === 'bottom' ? 'topLeft' : 'bottomLeft'}
        positions={
          tooltipPlacement === 'bottom'
            ? { bottom: '8', left: String(offsetX) }
            : { top: '-40', left: String(offsetX) }
        }
      >
        {children}
      </Tooltip>
    </AwardIconWrapper>
  );
};

AwardIcon.displayName = 'AwardIcon';
