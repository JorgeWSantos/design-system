import {
  breakpointsPx,
  colors,
  fontSizes,
  fontWeights,
  radii,
  space,
} from '@abqm-ds/tokens';
import { css, styled } from 'styled-components';
import { VariantsTypesDropdown } from './types';
import { Text } from '@components/Text';
import { CaretDownFillIcon } from '@abqm-ds/icons';

interface ContainerProps {
  $hasLabel: boolean;
  $maxWidth?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  gap: 0.25rem;

  ${({ $hasLabel }) =>
    $hasLabel &&
    css`
      height: 3.25rem;
    `}

  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};
`;

export const StyledLabel = styled(Text).attrs({
  lineHeight: 'tight',
  fontWeight: 'regular',
  fontSize: 'ssm',
})<{ $variant?: VariantsTypesDropdown }>`
  margin-left: 0.5rem;
  color: ${colors.emeraldGreen50};

  ${({ $variant }) =>
    $variant === 'quaternary' &&
    css`
      color: ${colors.white50};
    `}

  ${({ $variant }) =>
    $variant === 'dark-with-label-white' &&
    css`
      color: ${colors.white50};
      &::placeholder {
        color: ${colors.white75};
      }
    `}
`;

export const StyledDropdown = styled.div<{
  $variant?: VariantsTypesDropdown;
  $maxWidth?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: ${radii.sm};
  border: ${radii.px} solid ${colors.white50};
  background-color: ${colors.emeraldGreen25};

  padding: 0.5rem;
  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};

  color: ${colors.white75};

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.2);
    transition: 0.3s;
  }

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${colors.white25};
      color: ${colors.white75};
      border-color: transparent;
    `}

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      background-color: ${colors.white50};
      border: ${radii.px} solid ${colors.emeraldGreen30};
    `}

  ${({ $variant }) =>
    $variant === 'quaternary' &&
    css`
      background-color: ${colors.black50};
      color: ${colors.white75};
      border-radius: 0.25rem;
      border: 1px solid ${colors.white25};
    `}

    ${({ $variant }) =>
    $variant === 'quinary' &&
    css`
      border-radius: ${radii.xs};
      border: ${radii.px} solid ${colors.white50};
      background-color: ${colors.emeraldGreen25};
    `}

    ${({ $variant }) =>
    $variant === 'outline' &&
    css`
      border-radius: ${radii.xs};
      border: ${radii.px} solid ${colors.emeraldGreen50};
      background-color: ${colors.white50};
    `}

    ${({ $variant }) =>
    $variant === 'dark' &&
    css`
      color: ${colors.white75};
      border-radius: ${radii.xs};
      border: ${radii.px} solid ${colors.white25};
      background-color: ${colors.emeraldGreen50};
    `}

    ${({ $variant }) =>
    $variant === 'dark-with-label-white' &&
    css`
      color: ${colors.white75};
      border-radius: ${radii.xs};
      border: ${radii.px} solid ${colors.white25};
      background-color: ${colors.emeraldGreen50};
    `}

  @media (max-width: ${breakpointsPx.lg}) {
    ${({ $variant }) =>
      $variant === 'primary' &&
      css`
        border-radius: ${radii.xs};
        border: ${radii.px} solid transparent;
      `}

    ${({ $variant }) =>
      $variant === 'quaternary' &&
      css`
        color: ${colors.emeraldGreen75};
        border-radius: ${radii.xs};
        border: ${radii.px} solid ${colors.white50};
        background-color: ${colors.emeraldGreen25};
      `}
  }
`;

export const StyledTextSelect = styled(Text).attrs({
  lineHeight: 'initial',
  fontWeight: 'regular',
  fontSize: 'ssm',
})<{ $variant?: VariantsTypesDropdown }>`
  color: ${colors.white75};

  ${({ $variant }) =>
    $variant === 'outline' &&
    css`
      color: ${colors.emeraldGreen75};
    `}

  @media (max-width: ${breakpointsPx.lg}) {
    font-weight: ${fontWeights.semiBold};
  }

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      color: ${colors.emeraldGreen75};
      &::placeholder {
        color: ${colors.emeraldGreen75};
      }
    `}
`;

export const StyledCaretDownFillIcon = styled(CaretDownFillIcon)<{
  $variant?: VariantsTypesDropdown;
  $rotated?: boolean;
}>`
  width: 12px;
  height: 12px;

  transition: transform 0.3s;
  ${({ $rotated }) =>
    $rotated &&
    css`
      transform: rotate(180deg);
    `}

  path {
    fill: ${colors.white50};

    ${({ $variant }) =>
      $variant === 'tertiary' &&
      css`
        fill: ${colors.emeraldGreen50};
      `}

    ${({ $variant }) =>
      $variant === 'outline' &&
      css`
        fill: ${colors.emeraldGreen50};
      `}
  }
`;

export const ContainerOptions = styled.div<{
  $variant?: VariantsTypesDropdown;
  $maxHeight?: string;
  $maxWidth?: string;
  $openToTop?: boolean;
  $hasLabel?: boolean;
}>`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 0;
  z-index: 10;

  ${({ $openToTop, $hasLabel }) =>
    $openToTop
      ? css`
          bottom: 100%;
          top: auto;
          margin-bottom: ${$hasLabel ? -1.2 : 0.1}rem;
        `
      : css`
          top: 100%;
          bottom: auto;
          margin-top: 0.1rem;
        `}

  overflow-y: auto; // scroll no componente pai
  overflow-x: hidden; // previne scroll lateral
  border-radius: 0.25rem;
  /* Garante que o conteúdo do scroll respeite o border-radius */
  -webkit-mask-image: radial-gradient(white 0 0);
  mask-image: radial-gradient(white 0 0);

  min-height: 100%;
  /* max-height: 18.75rem; */

  max-height: ${({ $maxHeight }) => $maxHeight || 'unset'};
  min-width: ${({ $maxWidth }) => $maxWidth};
  max-width: ${({ $maxWidth }) => $maxWidth};

  box-sizing: border-box;

  backdrop-filter: blur(3.125rem);

  padding: ${space[2]} ${space[2]} ${space[6]} ${space[2]};

  background-color: ${colors.solidWhiteGreen};
  color: ${colors.green900};

  border: ${radii.px} solid ${colors.emeraldGreen25};
  border-radius: ${radii.xs};

  cursor: pointer;

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${colors.solidWhiteGreen};
      color: ${colors.green900};

      border: ${radii.px} solid ${colors.emeraldGreen25};

      /* Custom scrollbar styles */
      &::-webkit-scrollbar {
        width: 8px;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: ${colors.emeraldGreen25};
        border-radius: 4px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      scrollbar-color: ${colors.emeraldGreen25} transparent;
      scrollbar-width: thin;
    `}

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      background-color: ${colors.solidWhiteGreen};
      color: ${colors.green900};

      border: ${radii.px} solid ${colors.emeraldGreen25};

      /* Custom scrollbar styles */
      &::-webkit-scrollbar {
        width: 8px;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: ${colors.emeraldGreen25};
        border-radius: 4px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      scrollbar-color: ${colors.emeraldGreen25} transparent;
      scrollbar-width: thin;
    `}

  ${({ $variant }) =>
    $variant === 'quaternary' &&
    css`
      background-color: ${colors.solidWhiteGreen};
      color: ${colors.green900};

      border: ${radii.px} solid ${colors.emeraldGreen25};

      /* Custom scrollbar styles */
      &::-webkit-scrollbar {
        width: 8px;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: ${colors.emeraldGreen25};
        border-radius: 4px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      scrollbar-color: ${colors.emeraldGreen25} transparent;
      scrollbar-width: thin;
    `}
`;

export const Option = styled.div<{ $variant?: VariantsTypesDropdown }>`
  border-bottom: ${radii.px} solid ${colors.emeraldGreen50};
  font-size: ${fontSizes.xxs};
  line-height: 0.875rem;
  padding: ${space[2]};
  width: 100%;

  &:hover {
    background-color: ${colors.emeraldGreen10};
  }

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      border-bottom: ${radii.px} solid ${colors.emeraldGreen25};
      font-weight: ${fontWeights.medium};
    `}

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      border-bottom: ${radii.px} solid ${colors.emeraldGreen25};
      font-weight: ${fontWeights.medium};
    `}

  ${({ $variant }) =>
    $variant === 'quaternary' &&
    css`
      border-bottom: ${radii.px} solid ${colors.emeraldGreen25};
      font-weight: ${fontWeights.medium};
    `}
`;
