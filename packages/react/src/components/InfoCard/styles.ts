import { colors, radii } from '@abqm-ds/tokens';

import styled from 'styled-components';

export const Container = styled.div<{ $reverse?: boolean }>`
  display: flex;
  min-width: 80px;
  padding: 2px 12px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 32px;
  background: ${colors.emeraldGreen25};
  border-radius: ${radii.xs};
`;
