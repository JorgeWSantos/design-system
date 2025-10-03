import { breakpointsPx } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const DivContainerTableRight = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  width: 100%;
  position: relative;

  table {
    width: 100%;
  }

  @media (max-width: ${breakpointsPx.lg}) {
    overflow-x: scroll;
    margin-top: 0;
    height: 100%;

    table {
      min-width: 32rem;
      width: 100%;
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
