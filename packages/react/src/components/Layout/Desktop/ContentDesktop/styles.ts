import { Box } from '@components/Box';
import styled, { css } from 'styled-components';

export const ContainerDesktop = styled.div<{ $maxHeight?: string }>`
  display: flex;
  flex-direction: column;
  align-self: start;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  height: ${(props) => props.$maxHeight || '100%'};
`;

export const ContentBox = styled(Box)<{ $hideOverflow?: boolean }>`
  height: 100%;

  ${(props) =>
    props.$hideOverflow &&
    css`
      overflowy: hidden; !important
    `}
`;
