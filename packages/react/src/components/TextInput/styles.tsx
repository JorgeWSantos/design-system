import styled, { css } from 'styled-components';
import { colors, fonts, fontSizes, fontWeights, radii, space } from '@abqm-ds/tokens';

export type variantsTextInputTypes = 'primary' | 'secondary' | 'tertiary';

const sizeVariants = {
  sm: `${space[2]} ${space[2]}`,
  md: `${space[3]} ${space[3]}`,
};

export const TextInputWithLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  p {
    padding: 0 ${space[2]};
  }
`;

export type SizeVariants = keyof typeof sizeVariants;
interface StyledTextInputContainerProps {
  $size: SizeVariants;
  $variant: variantsTextInputTypes;
}

export const TextInputContainer = styled.div<StyledTextInputContainerProps>`
  display: flex;
  align-items: center;
  max-height: 2rem;
  width: 100%;

  box-sizing: border-box;
  border-radius: ${radii.sm};
  border: ${radii.px} solid ${colors.white50};
  background-color: ${colors.emeraldGreen50};

  transition: 0.3s;

  /* icon */
  svg {
    path {
      transition: 0.3s;
    }
  }

  &:has(input:focus) {
    border-color: ${colors.white75};

    svg {
      path {
        fill: ${colors.white75};
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
      padding: ${sizeVariants[$size]};
    `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      border: ${radii.px} solid ${colors.emeraldGreen25};
      background-color: ${colors.white25};

      &:has(input:focus) {
        border-color: ${colors.emeraldGreen10};
      }
    `}

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      border: ${radii.px} solid ${colors.emeraldGreen25};
      background-color: ${colors.white50};

      &:has(input:focus) {
        border-color: ${colors.emeraldGreen50};
      }
    `}
`;

interface PreffixProps {
  $variant: variantsTextInputTypes;
}

export const Prefix = styled.span<PreffixProps>`
  font-family: ${fonts.default};
  font-size: ${fontSizes.sm};
  color: ${colors.emeraldGreen50};
  font-weight: ${fontWeights.regular};

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      color: ${colors.white75};
    `}
`;

interface StyledInputProps {
  $variant?: variantsTextInputTypes;
}

export const Input = styled.input<StyledInputProps>`
  font-family: ${fonts.default};
  font-size: ${fontSizes.ssm};
  color: ${colors.white};

  line-height: 1rem;

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
