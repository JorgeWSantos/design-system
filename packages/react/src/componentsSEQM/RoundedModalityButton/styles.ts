import { breakpointsPx, colors } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export type VariantsRoundedModalityButton =
  | 'default'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'quinary';

interface RoundedButtonProps {
  $variant: VariantsRoundedModalityButton;
  $bordered?: boolean;
}

const styledVariantsRoundedButton = css<RoundedButtonProps>`
  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      background-color: ${colors.black50};
    `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      box-shadow: 0 0 0 0 ${colors.white25};
    `}

  ${({ $variant }) =>
    $variant === 'tertiary' &&
    css`
      background-color: ${colors.green100};
    `}

    ${({ $variant }) =>
    $variant === 'quaternary' &&
    css`
      background-color: ${colors.emeraldGreen50};
    `}

    ${({ $variant }) =>
    $variant === 'quinary' &&
    css`
      background-color: ${colors.emeraldGreen15};
    `}
`;

export const RoundedButton = styled.button<RoundedButtonProps>`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  box-shadow: 0 0 0 4px ${colors.white25};

  background-color: ${colors.green500};

  ${styledVariantsRoundedButton}

  ${({ $bordered }) =>
    $bordered &&
    css`
      box-shadow: 0 0 0 2px ${colors.white25};
    `}

  border-radius: 50%;
  gap: 0.5rem;
  aspect-ratio: 1/1;

  cursor: pointer;
  transition: box-shadow 0.3s ease, width 0.3s, height 0.3s;

  &:hover {
    box-shadow: 0 0 0 6px ${colors.white25};

    ${({ $variant }) =>
      $variant === 'secondary' &&
      css`
        box-shadow: 0 0 0 4px ${colors.white25};
      `}
  }

  @media (max-width: ${breakpointsPx.lg}) {
    width: 5.625rem;
    height: 5.625rem;
    max-width: 5.625rem;
  }
`;

export const IconWrapper = styled.span<{ $svgFullWidth?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  padding: 0.5rem;
  border-radius: 50%;
  aspect-ratio: 1/1;

  & > svg {
    width: 100%;
    height: 100%;

    padding: 0.5rem;

    ${({ $svgFullWidth }) =>
      $svgFullWidth &&
      css`
        padding: 0;
      `}

    border-radius: 50%;
    gap: 0.5rem;
    aspect-ratio: 1/1;
  }
`;
