import styled, { css } from 'styled-components';
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@abqm-ds/tokens';
import {
  textInputBorderedSizes,
  TextInputBorderedSizes,
  TextInputBorderedVariants,
} from './types';

interface StyledTextInputContainerProps {
  $size: TextInputBorderedSizes;
  $variant: TextInputBorderedVariants;
}

export const TextInputBorderedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${space[1]};
`;

export const TextInputBorderedContent = styled.div<StyledTextInputContainerProps>`
  display: flex;
  align-items: center;

  box-sizing: border-box;
  border-radius: ${radii.xs};
  border: ${radii.xs} solid ${colors.emeraldGreen10};
  background-color: ${colors.white50};
  width: 100%;
  height: 2.375rem;

  transition: box-shadow 0.3s, border-color 0.3s;

  &:has(input:focus) {
    box-shadow: 0 0 0 1px ${colors.white25};
    border-color: ${colors.white10};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $size }) =>
    $size &&
    css`
      padding: ${textInputBorderedSizes[$size]};
    `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      border: ${radii.px} solid ${colors.emeraldGreen25};
      background-color: ${colors.white25};

      &:has(input:focus) {
        border-color: ${colors.emeraldGreen50};
      }
    `}
`;

interface StyledInputProps {
  $variant?: TextInputBorderedVariants;
}

export const Input = styled.input<StyledInputProps>`
  font-family: ${fonts.default};
  font-size: ${fontSizes.mdd};
  color: ${colors.emeraldGreen50};

  line-height: ${lineHeights.shorter};

  font-weight: ${fontWeights.regular};
  background: transparent;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
    /* box-shadow: none; */
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors.emeraldGreen25};
  }

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      color: ${colors.white50};

      &::placeholder {
        color: ${colors.white50};
      }
    `}
`;
