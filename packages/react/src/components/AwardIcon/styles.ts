import { colors, fontSizes, fontWeights } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

const glow = css`
  filter: drop-shadow(0 0 1.5px ${colors.yellow400}) brightness(1.05);
  transform: scale(1.15);
`;

export const AwardIconWrapper = styled.span`
  /* && vence o "span { display: flex }" das células de tabela que usam o ícone */
  && {
    display: inline-flex;
    align-items: center;
  }

  cursor: pointer;
  outline: none;

  img {
    display: block;
    transition:
      filter 0.15s ease,
      transform 0.15s ease;
  }

  /* Brilha só o ícone sob o mouse; no teclado, o foco visível */
  &:hover img,
  &:focus-visible img {
    ${glow}
  }

  /* No toque não há hover: brilha enquanto o ícone tocado estiver em foco (o tooltip abre junto) */
  @media (hover: none) {
    &:focus img {
      ${glow}
    }
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }
`;

// Imagem dos selos de premiação (LegacyBadge, HallOfFameBadge) no tamanho pedido
export const AwardImg = styled.img<{ $size: string }>`
  display: block;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  min-width: ${({ $size }) => $size};
  object-fit: contain;
`;

export const AwardTooltipText = styled.span`
  display: block;
  white-space: nowrap;
  font-size: ${fontSizes.xs};
  font-weight: ${fontWeights.semiBold};
  color: ${colors.black};
`;
