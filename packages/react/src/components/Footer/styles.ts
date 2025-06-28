import { breakpointsPx, colors, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0;
  flex-shrink: 0;
  z-index: 1001;
  backdrop-filter: blur(0.625rem);

  margin: ${space[2]} ${space[2]} 0 ${space[2]};

  max-width: 100%;
  height: 3.598rem;

  align-self: end;

  background: ${colors.emeraldGreen50};
  border-radius: ${space[2]} ${space[2]} 0 0;

  @media (max-width: ${breakpointsPx.lg}) {
    height: 2.5rem;
  }

  @media (max-width: ${breakpointsPx.sm}) {
    height: 2.188rem;
  }
`;
