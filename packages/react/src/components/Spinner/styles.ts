import styled, { keyframes } from 'styled-components';

// Gira o <svg> inteiro por `transform` (compositor da GPU, sem repintura) e em 12 passos por
// volta, ou seja, 12 atualizações por segundo. Uma animação contínua faz o navegador
// apresentar um quadro a cada vsync: num monitor de 144 Hz são ~145 quadros por segundo só
// por causa do spinner, cada um refazendo o backdrop-filter do layout (blur de 50 a 80px),
// e o fps de vídeos em outras janelas/monitores caía. Em passos, são 12 quadros por segundo.
// O SpinnerRingResizeIcon antigo ainda animava stroke-dasharray e o transform de um <g>
// interno, que repintam na thread principal
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerSvg = styled.svg`
  animation: ${spin} 1s steps(12, end) infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 3s;
  }
`;
