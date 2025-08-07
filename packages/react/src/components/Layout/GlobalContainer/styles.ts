import { breakpointsPx, space } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const StyledGlobalContainer = styled.div<{ $hasFooterButtons?: boolean }>`
  height: 100%;
  /* width: 100%; */
  display: grid;
  grid-template-rows: 1fr auto;

  padding: 0 ${space[5]};
  max-width: 100rem;
  margin: 0 auto;

  @media (max-width: ${breakpointsPx.lg}) {
    padding: 0;
    gap: 0.5rem;
  }
`;
