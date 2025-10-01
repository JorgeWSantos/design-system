import styled, { css } from 'styled-components';
import { colors, fonts, fontSizes, fontWeights, radii, space } from '@abqm-ds/tokens';

export type variantsTextInputTypes = 'primary' | 'secondary' | 'tertiary';

const autocompleteSizeVariants = {
  sm: `${space[2]} ${space[2]}`,
  md: `${space[3]} ${space[3]}`,
};

export const TextInputWithLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  gap: ${space[1]};

  p {
    padding: 0 ${space[2]};
  }
`;

export type AutocompleteSizeVariants = keyof typeof autocompleteSizeVariants;
interface StyledTextInputContainerProps {
  $size: AutocompleteSizeVariants;
  $variant: variantsTextInputTypes;
}

export const TextInputContainer = styled.div<StyledTextInputContainerProps>`
  display: flex;
  align-items: center;
  max-height: 2rem;
  width: 100%;
  position: relative;

  box-sizing: border-box;
  border-radius: ${radii.sm};
  border: ${radii.px} solid ${colors.emeraldGreen25};
  background-color: ${colors.white50};

  transition: 0.3s;

  svg {
    path {
      transition: 0.3s;
    }
  }

  &:has(input:focus) {
    border-color: ${colors.emeraldGreen50};

    svg {
      path {
        fill: ${colors.emeraldGreen50};
      }
    }
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $size }) =>
    $size &&
    css`
      padding: ${autocompleteSizeVariants[$size]};
    `}
`;

interface StyledInputProps {
  $variant?: variantsTextInputTypes;
}

export const Input = styled.input<StyledInputProps>`
  font-family: ${fonts.default};
  font-size: ${fontSizes.ssm};
  color: ${colors.white};
  line-height: 1.2rem;
  font-weight: ${fontWeights.regular};
  background: transparent;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors.white75};
  }

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      color: ${colors.white85};

      &::placeholder {
        color: ${colors.white85};
      }
    `}

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      color: ${colors.emeraldGreen75};

      &::placeholder {
        color: ${colors.emeraldGreen75};
      }
    `}
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${colors.white};
  border: ${radii.px} solid ${colors.emeraldGreen25};
  box-shadow: 0 2px 8px ${colors.white25};
  margin: 0;
  list-style: none;
  max-height: 180px;
  overflow-y: auto;

  background: ${colors.solidWhiteGreen};
  border-radius: ${radii.xs};
  padding: ${space[2]} 0 ${space[6]} ${space[2]};
  gap: ${space[2]};

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
`;

export const SuggestionItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${colors.green900};
  font-size: ${fontSizes.x};
  font-family: ${fonts.default};
  font-weight: 400;
  text-transform: none;
  transition: background 0.2s, color 0.2s;
  border-bottom: 1px solid ${colors.emeraldGreen25}; // traço separador
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${colors.emeraldGreen5};
    color: ${colors.green900};
  }
`;
