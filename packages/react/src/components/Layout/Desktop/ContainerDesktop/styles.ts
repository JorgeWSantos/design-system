import { space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const StyledContainerDesktop = styled.div`
  display: grid;
  max-height: 100%;
  padding: ${space[4]} 0 0 0;
  grid-template-columns: 13.5rem 1fr;
  gap: 1rem;
`;
