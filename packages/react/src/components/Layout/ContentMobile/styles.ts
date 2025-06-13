import { space } from '@abqm-ds/tokens';
import { Box } from '@components/Box';
import styled from 'styled-components';

export const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  max-height: 87vh;
  gap: ${space[2]};
  padding: ${space[2]} ${space[1]} 0 ${space[1]} !important;

  @media (max-height: 810px) {
    max-height: 86vh;
  }

  @media (max-height: 700px) {
    max-height: 83vh;
  }
`;

export const MobileScroll = styled(Box)`
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
`;
