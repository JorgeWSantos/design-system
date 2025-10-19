import { breakpointsPx, colors } from '@abqm-ds/tokens';
import styled, { css } from 'styled-components';

export type VariantsRoundedModalityButton = 'default' | 'secondary';

interface RoundedButtonProps {
  $variant: VariantsRoundedModalityButton;
  $bordered?: boolean;
}

export const RoundedButton = styled.button<RoundedButtonProps>`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  box-shadow: 0 0 0 4px ${colors.white25};

  background-color: ${colors.green500};

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
