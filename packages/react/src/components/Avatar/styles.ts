import { PersonCircleIcon } from '@abqm-ds/icons';
import { colors, radii } from '@abqm-ds/tokens';
import styled, { css, keyframes } from 'styled-components';

export type AvatarVariant = 'default' | 'outline';

export const StyledImageContainer = styled.div<{
  $size?: string;
  $variant?: AvatarVariant;
}>`
  position: relative;
  width: ${({ $size = '2.5rem' }) => $size};
  height: ${({ $size = '2.5rem' }) => $size};
  min-width: ${({ $size = '2.5rem' }) => $size};
  min-height: ${({ $size = '2.5rem' }) => $size};
  max-width: ${({ $size = '2.5rem' }) => $size};
  max-height: ${({ $size = '2.5rem' }) => $size};
  border-radius: 50%;
  overflow: hidden;
  border: ${radii.px} solid ${colors.white25};
  background-color: ${colors.white25};
  z-index: 1;

  /* Ocupa o container para o img (height: 100%) não seguir a proporção da foto */
  div {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }

  /* Sem fundo e sem borda: só o ícone contornado */
  ${({ $variant }) =>
    $variant === 'outline' &&
    css`
      border: none;
      background-color: transparent;

      div {
        background-color: transparent;
      }
    `}
`;

// Mesmo tamanho da foto no tooltip do animal
export const TooltipImage = styled.img`
  display: block;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 0.25rem;
`;

// Faixa de brilho atravessando da esquerda para a direita (efeito "shimmer"). Desliza por
// `transform` (compositor da GPU) e em passos, ~12 atualizações por segundo: animar
// `background-position` repintava o skeleton a cada quadro e uma animação contínua faz o
// navegador apresentar um quadro por vsync (~145/s a 144 Hz) sob os backdrop-filter do
// layout, o que derrubava o fps de vídeos em outras janelas
const shimmer = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
`;

// Ocupa o lugar do avatar (mesmo tamanho) enquanto a foto ainda não é conhecida,
// para não exibir o fallback de "sem foto" antes de o dado carregar
export const AvatarSkeleton = styled.div<{ $size?: string }>`
  position: relative;
  overflow: hidden;
  width: ${({ $size = '2.5rem' }) => $size};
  height: ${({ $size = '2.5rem' }) => $size};
  min-width: ${({ $size = '2.5rem' }) => $size};
  min-height: ${({ $size = '2.5rem' }) => $size};
  border-radius: 50%;
  background-color: ${colors.white10};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      90deg,
      transparent 30%,
      ${colors.white30} 50%,
      transparent 70%
    );
    will-change: transform;
    animation: ${shimmer} 1.4s steps(17, end) infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      background-image: none;
    }
  }
`;

export const FallbackIcon = styled(PersonCircleIcon)<{
  $variant?: AvatarVariant;
  $color?: string;
}>`
  width: 100%;
  height: 100%;

  path {
    fill: ${({ $variant, $color }) =>
      $color ?? ($variant === 'outline' ? colors.white85 : colors.emeraldGreen25)};
  }
`;
