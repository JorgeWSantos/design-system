import { Box } from '@components/Box';
import styled, { css } from 'styled-components';
import { ContentDesktopBackgroundVariant } from '.';
import { colors } from '@abqm-ds/tokens';

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
  $removeRoundedBottom?: boolean;
  $backgroundVariant?: ContentDesktopBackgroundVariant;
}>`
  height: clamp(60dvh, 80dvh, 90dvh);

  ${(props) =>
    props.$removeRoundedBottom &&
    css`
      border-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}

  ${({ $backgroundVariant }) =>
    $backgroundVariant === 'dark' &&
    css`
      background-color: ${colors.emeraldGreen50};
    `}

  @media (max-height: 600px) {
    height: clamp(60dvh, 60dvh, 60dvh);
  }
`;
