import { colors, radii, space } from '@abqm-ds/tokens';
import styled, { createGlobalStyle } from 'styled-components';

// Com o fundo translúcido, o navegador refaz o backdrop-filter da página de trás (ex: o
// blur(80px) do layout) a cada quadro do vídeo e o fps cai pela metade. Enquanto o vídeo
// está aberto, o desfoque fica desligado fora do modal; atrás do fundo escuro não se nota.
export const DisableBackdropFilterBehind = createGlobalStyle`
  body > :not([data-modal-video]),
  body > :not([data-modal-video]) * {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
`;

// Com os botões, a altura reservada cresce 3rem para o vídeo não empurrá-los para fora da tela
export const VideoColumn = styled.div<{ $withActions: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${space[2]};
  /* margin auto centraliza o vídeo nos dois eixos dentro do conteúdo do Modal */
  margin: auto;
  /* 16:9 limitado pela largura (retrato) ou pela altura (paisagem) da tela */
  width: 92vw;
  width: min(
    92vw,
    calc((100dvh - ${({ $withActions }) => ($withActions ? '9rem' : '6rem')}) * 16 / 9)
  );
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${radii.md};
  background: ${colors.black};

  overflow: hidden;

  iframe,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  video {
    object-fit: contain;
  }
`;
