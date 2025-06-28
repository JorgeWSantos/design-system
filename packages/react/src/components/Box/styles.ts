import { breakpointsPx, colors, radii, space } from '@abqm-ds/tokens';
import { styled } from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;

  flex: 1;
  flex-direction: column;
  padding: ${space[10]} ${space[4]} ${space[4]};

  box-sizing: border-box;

  backdrop-filter: blur(5rem);
  gap: ${space[16]};

  background: ${colors.white50};

  overflow-y: auto;

  border-radius: 0 0 ${radii.md} ${radii.md};

  @media (max-width: ${breakpointsPx.md}) {
    padding: ${space[10]} ${space[4]} ${space[4]};
    gap: ${space[6]};
  }
`;
