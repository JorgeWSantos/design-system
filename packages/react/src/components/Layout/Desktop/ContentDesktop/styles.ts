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

export const ContentBox = styled(Box)<{
  $hideOverflow?: boolean;
  $removeRoundedBottom?: boolean;
}>`
  height: 100%;

  ${(props) =>
    props.$hideOverflow &&
    css`
      overflow-y: hidden; !important
    `}

  ${(props) =>
    props.$removeRoundedBottom &&
    css`
      border-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;
