import { colors, radii } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const VideoWrapper = styled.div`
  position: relative;
  /* margin auto centraliza o vídeo nos dois eixos dentro do conteúdo do Modal */
  margin: auto;
  /* 16:9 limitado pela largura (retrato) ou pela altura (paisagem) da tela */
  width: 92vw;
  width: min(92vw, calc((100dvh - 6rem) * 16 / 9));
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
