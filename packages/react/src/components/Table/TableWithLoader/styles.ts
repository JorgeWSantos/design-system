import { breakpointsPx } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export const DivContainerTableRight = styled.div<{ $isLoading?: boolean }>`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
  width: 100%;
  position: relative;

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      height: 100%;
      min-height: 16rem;
    `}

  table {
    width: 100%;
  }

  @media (max-width: ${breakpointsPx.lg}) {
    overflow-x: scroll;
    margin-top: 0;
    /* height: 100%; removido para o funcionamento correto do table scroll no mobile do ao vivo*/
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
