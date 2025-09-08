import { colors, radii, space } from '@abqm-ds/tokens';

import styled from 'styled-components';

export const Container = styled.div<{ $reverse?: boolean }>`
  display: flex;
  min-width: 80px;
  padding: 2px ${space[3]};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 32px;
  background: ${colors.emeraldGreen25};
  border-radius: ${radii.xs};

  white-space: nowrap;
`;
