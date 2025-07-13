import { breakpointsPx, colors, fontSizes, fontWeights, radii } from '@abqm-ds/tokens';
import { css, styled } from 'styled-components';
import { VariantsTypesDropdown } from './types';
import { Text } from '@components/Text';
import { CaretDownFillIcon } from '@abqm-ds/icons';

interface ContainerProps {
  $hasLabel: boolean;
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
      height: 3.25.rem;
    `}
`;

export const StyledDropdown = styled.div<{ $variant?: VariantsTypesDropdown }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: ${radii.sm};
  border: ${radii.px} solid ${colors.white50};
  background-color: ${colors.emeraldGreen25};

  padding: 0.5rem;

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
    `}

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      background-color: ${colors.white50};
      border: ${radii.px} solid ${colors.emeraldGreen25};
    `}

  @media (max-width: ${breakpointsPx.lg}) {
    border-radius: ${radii.xs};
    border: ${radii.px} solid transparent;
  }
`;

export const StyledTextSelect = styled(Text).attrs({
  lineHeight: 'initial',
  fontWeight: 'regular',
  fontSize: 'ssm',
})<{ $variant?: VariantsTypesDropdown }>`
  color: ${colors.white75};

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
}>`
  width: 12px;
  height: 12px;

  path {
    fill: ${colors.white50};

    ${({ $variant }) =>
      $variant === 'tertiary' &&
      css`
        fill: ${colors.emeraldGreen50};
      `}
  }
`;

export const ContainerOptions = styled.div<{
  $variant?: VariantsTypesDropdown;
  $maxHeight?: string;
}>`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  overflow-y: auto; // scroll no componente pai
  overflow-x: hidden; // previne scroll lateral
  border-radius: 0.25rem;
  /* Garante que o conteúdo do scroll respeite o border-radius */
  -webkit-mask-image: radial-gradient(white 0 0);
  mask-image: radial-gradient(white 0 0);

  min-height: 100%;
  /* max-height: 18.75rem; */

  max-height: ${({ $maxHeight }) => $maxHeight || 'unset'};

  min-width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  padding: 0.5rem 0.5rem;
  gap: 0.25rem;

  backdrop-filter: blur(3.125rem);

  background-color: ${colors.emeraldGreen75};
  color: ${colors.white75};

  border: ${radii.px} solid ${colors.emeraldGreen92};
  border-radius: ${radii.sm};

  cursor: pointer;

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${colors.white10};
      color: ${colors.white85};

      border: ${radii.px} solid ${colors.white50};
    `}

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      background-color: ${colors.white};
      color: ${colors.emeraldGreen75};

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
  padding-bottom: 0.3rem;
  font-size: ${fontSizes.ssm};

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      border-bottom: ${radii.px} solid ${colors.white50};
      font-weight: ${fontWeights.medium};
    `}

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      /* background-color: ${colors.white}; */
      /* color: ${colors.emeraldGreen75}; */

      border-bottom: ${radii.px} solid ${colors.emeraldGreen25};
    `}
`;
