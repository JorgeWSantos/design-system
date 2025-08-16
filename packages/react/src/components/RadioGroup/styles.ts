import styled, { css } from 'styled-components';
import { space } from '@abqm-ds/tokens';
import type { RadioGroupDirections } from './types';

export const ContainerRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${space[2]};
`;

export const ContentRadioGroup = styled.div<{ direction: RadioGroupDirections }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: ${space[2]};

  ${({ direction }) =>
    direction === 'horizontal' &&
    css`
      flex-direction: row;
      gap: ${space[2]} ${space[4]};
    `}
`;
