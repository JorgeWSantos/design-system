import { PersonCircleIcon } from '@abqm-ds/icons';
import { colors, radii } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export type AvatarVariant = 'default' | 'outline';

export const StyledImageContainer = styled.div<{
  $size?: string;
  $variant?: AvatarVariant;
}>`
  position: relative;
  width: ${({ $size = '2.5rem' }) => $size};
  height: ${({ $size = '2.5rem' }) => $size};
  min-width: ${({ $size = '2.5rem' }) => $size};
  min-height: ${({ $size = '2.5rem' }) => $size};
  max-width: ${({ $size = '2.5rem' }) => $size};
  max-height: ${({ $size = '2.5rem' }) => $size};
  border-radius: 50%;
  overflow: hidden;
  border: ${radii.px} solid ${colors.white25};
  background-color: ${colors.white25};
  z-index: 1;

  /* Ocupa o container para o img (height: 100%) não seguir a proporção da foto */
  div {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }

  /* Sem fundo e sem borda: só o ícone contornado */
  ${({ $variant }) =>
    $variant === 'outline' &&
    css`
      border: none;
      background-color: transparent;

      div {
        background-color: transparent;
      }
    `}
`;

export const FallbackIcon = styled(PersonCircleIcon)<{
  $variant?: AvatarVariant;
  $color?: string;
}>`
  width: 100%;
  height: 100%;

  path {
    fill: ${({ $variant, $color }) =>
      $color ?? ($variant === 'outline' ? colors.white85 : colors.emeraldGreen25)};
  }
`;
