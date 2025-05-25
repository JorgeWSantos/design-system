import styled, { css } from 'styled-components';
import { variantsTextInputTypes } from '.';
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@abqm-ui2/tokens';

const sizeVariants = {
  sm: `${space[2]} ${space[2]}`,
  md: `${space[3]} ${space[3]}`,
  lg: `${space[4]} ${space[4]}`,
};

export type SizeVariants = keyof typeof sizeVariants;
interface StyledTextInputContainerProps {
  size: SizeVariants;
  variant: variantsTextInputTypes;
}

export const TextInputContainer = styled.div<StyledTextInputContainerProps>`
  display: flex;
  align-items: center;

  box-sizing: border-box;
  border-radius: ${radii.sm};
  border: 1px solid ${colors.white50};
  background-color: ${colors.emeraldGreen25};

  &:has(input:focus) {
    border-color: ${colors.white75};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ size }) =>
    size &&
    css`
      padding: ${sizeVariants[size]};
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      border: 1px solid ${colors.emeraldGreen25};
      background-color: ${colors.white25};

      &:has(input:focus) {
        border-color: ${colors.emeraldGreen50};
      }
    `}
`;

interface PreffixProps {
  variant: variantsTextInputTypes;
}

export const Prefix = styled.span<PreffixProps>`
  font-family: ${fonts.default};
  font-size: ${fontSizes.sm};
  color: ${colors.emeraldGreen50};
  font-weight: ${fontWeights.regular};

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${colors.white75};
    `}
`;

interface StyledInputProps {
  variant: variantsTextInputTypes;
}

export const Input = styled.input<StyledInputProps>`
  font-family: ${fonts.default};
  font-size: ${fontSizes.sm};
  color: ${colors.white};

  line-height: ${lineHeights.tight};

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
    color: ${colors.white75};
  }

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${colors.white50};

      &::placeholder {
        color: ${colors.white50};
      }
    `}
`;
