import { space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const StyledContainerDesktop = styled.div<{ $isSidebarCollapsed?: boolean }>`
  display: grid;
  max-height: 100%;
  padding: ${space[4]} 0 0 0;
  grid-template-columns: ${({ $isSidebarCollapsed }) =>
    $isSidebarCollapsed ? '5rem minmax(0, 1fr)' : '13.5rem minmax(0, 1fr)'};
  gap: 1rem;
`;
