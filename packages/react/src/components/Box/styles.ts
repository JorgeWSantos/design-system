import { colors, radii, space } from '@abqm-ui2/tokens';
import { styled } from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;

  flex: 1;
  flex-direction: column;
  padding: ${space[16]} ${space[10]} ${space[6]};

  box-sizing: border-box;

  backdrop-filter: blur(5rem);
  gap: ${space[16]};

  background: ${colors.white50};

  border-radius: 0 0 ${radii.md} ${radii.md};

  @media (max-width: 768px) {
    padding: ${space[10]} ${space[4]} ${space[4]};
    gap: ${space[26]};
  }
`;
