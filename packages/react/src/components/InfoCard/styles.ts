import { colors, radii } from '@abqm-ds/tokens';
import { styled } from 'styled-components';

export const InfoCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 2rem;
  align-items: center;
  justify-content: center;
  background-color: ${colors.emeraldGreen25};
  padding: 0.1875rem 0.5rem;
  border-radius: ${radii.xs};
`;
