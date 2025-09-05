import { breakpointsPx, space } from '@abqm-ds/tokens';
import { Box } from '@components/Box';
import styled, { css } from 'styled-components';

export const ContainerMobile = styled.main<{
  $headerNoGap?: boolean;
  $hasFooterButtons?: boolean;
}>`
  display: flex;
  flex-direction: column;
  max-height: 89vh;
  height: 100%;
  position: relative;

  max-width: ${breakpointsPx.lg};

  gap: ${space[2]};
  padding: ${space[2]} ${space[2]} 0 ${space[2]} !important;

  max-height: 100dvh; // 100px é a altura do header + footer

  @media (max-width: ${breakpointsPx.lg}) {
    max-height: calc(100dvh - (110px));
  }

  @media (max-width: ${breakpointsPx.sm}) {
    max-height: calc(100dvh - (100px));
  }

  //usado junto ao FooterWithButtons
  //para sobrepor o footer padrão
  ${({ $hasFooterButtons }) =>
    $hasFooterButtons &&
    css`
      @media (max-width: ${breakpointsPx.md}) {
        max-height: calc(100dvh - (130px));
      }

      @media (max-width: ${breakpointsPx.sm}) {
        max-height: calc(100dvh - (130px));
      }
    `}

  ${({ $headerNoGap }) =>
    $headerNoGap &&
    css`
      gap: unset;
      max-height: 96vh;
    `}
`;

export const MobileScroll = styled(Box)<{ $headerNoGap?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;

  padding: ${space[6]} ${space[2]};

  height: 100%;

  width: 100%;

  overflow-y: auto; // scroll no componente pai
  overflow-x: hidden; // previne scroll lateral
  border-radius: 0.25rem;

  /* Garante que o conteúdo do scroll respeite o border-radius */
  -webkit-mask-image: radial-gradient(white 0 0);
  mask-image: radial-gradient(white 0 0);

  ${({ $headerNoGap }) =>
    $headerNoGap &&
    css`
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    `}
`;
