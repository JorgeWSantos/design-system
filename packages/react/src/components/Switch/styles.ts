import styled, { css } from 'styled-components';
import { colors } from '@abqm-ds/tokens';
import { SwitchVariants } from '.';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchButton = styled.button<{
  $checked: boolean;
  $variant: SwitchVariants;
}>`
  width: 2rem;
  height: 1rem;
  border-radius: 1rem;
  background: ${({ $checked }) => ($checked ? colors.white50 : colors.white25)};
  border: none;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  padding: 0;

  ${({ $variant, $checked }) =>
    $variant === 'filter' &&
    css`
      background: ${$checked ? colors.green500 : colors.greenTransparent15};
    `}
`;

export const SwitchKnob = styled.span<{ $checked: boolean; $variant: SwitchVariants }>`
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: ${colors.white};
  position: absolute;
  top: -2px;
  left: ${({ $checked }) => ($checked ? '0.8rem' : '0')};
  transition: left 0.5s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  ${({ $variant }) =>
    $variant === 'filter' &&
    css`
      border: 1px solid ${colors.gray100};
    `}
`;
