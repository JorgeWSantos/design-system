import { breakpointsPx, colors } from '@abqm-ds/tokens';
import styled, { createGlobalStyle, css } from 'styled-components';
import { BoxContainer } from '@components/Box/styles';
import { blurredBackgroundDesktop, blurredBackgroundMobile } from './blurredBackground';

// Medido no Chrome com o loading na tela, num monitor de 144 Hz e um vídeo tocando em outro de
// 60 Hz: com o blur(80px) do Box ligado, o vídeo apresentou ~40% menos quadros e perdeu 3x
// mais. Qualquer animação do loading (mesmo a 12 passos por segundo) faz o navegador refazer
// esse desfoque em área grande a cada quadro, e a GPU é compartilhada com as outras janelas.
// Tirar só o desfoque do Box devolve o vídeo ao normal (reduzir o raio para 40/20/10px não
// resolve; desligar os blurs menores dos painéis e do rodapé também não).
//
// Entre o Box e o fundo da página não há nenhuma camada, então o que o desfoque mostra é a
// imagem de fundo borrada com o branco 50% do Box por cima. Enquanto o loading existe, o Box
// troca o backdrop-filter por esse mesmo resultado, estático: a miniatura já desfocada da
// imagem (mesma geometria do fundo da página: cover, centralizada e fixa) com o branco 50% por
// cima. Fica visualmente igual (ver blurredBackground.ts) e ao terminar o loading o blur volta.
// Pressupõe o fundo padrão do SEQM (assets/images) atrás do Box, como em todos os apps.
export const StaticBlurBackgroundWhileLoading = createGlobalStyle`
  ${BoxContainer} {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    background-image:
      linear-gradient(${colors.white50}, ${colors.white50}),
      url('${blurredBackgroundDesktop}') !important;
    background-size: 100% 100%, cover !important;
    background-position: 0 0, center !important;
    background-repeat: no-repeat !important;
    background-attachment: scroll, fixed !important;

    @media (max-width: ${breakpointsPx.lg}) {
      background-image:
        linear-gradient(${colors.white50}, ${colors.white50}),
        url('${blurredBackgroundMobile}') !important;
    }
  }
`;

export const StyledOverlayLoading = styled.div<{
  $withoutBackground?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$withoutBackground &&
    css`
      background: transparent;
    `}
`;
