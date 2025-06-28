import { breakpointsPx, space } from '@abqm-ds/tokens';
import { Box } from '@components/Box';
import styled, { css } from 'styled-components';

export const ContainerMobile = styled.main<{ $headerNoGap?: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: 89vh;
  height: 100%;

  max-width: ${breakpointsPx.lg};

  gap: ${space[2]};
  padding: ${space[2]} ${space[2]} 0 ${space[2]} !important;

  @media (max-height: 1400px) {
    max-height: 91vh;
  }

  @media (max-height: 1200px) {
    max-height: 90vh;
  }

  @media (max-height: 1024px) {
    max-height: 89vh;
  }

  @media (max-height: 950px) {
    max-height: 88.5vh;
  }

  @media (max-height: 920px) {
    max-height: 88vh;
  }

  @media (max-height: 850px) {
    max-height: 87vh;
  }
  @media (max-height: 810px) {
    max-height: 86vh;
  }
  @media (max-height: 810px) {
    max-height: 86vh;
  }

  @media (max-height: 700px) {
    max-height: 83vh;
  }

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
