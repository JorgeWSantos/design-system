import { theme } from '@styles/index';
import styled from 'styled-components';

export type Variant = 'primary' | 'secondary' | 'tertiary';
export type Size = 'sm' | 'md';

export interface RoundedButtonStyleProps {
  variant?: Variant;
  size?: Size;
}

export const ContainerRoundedButton = styled.div`
  display: flex;
  width: 4.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #737373;
`;

export const StyledRoundedButton = styled.button<RoundedButtonStyleProps>`
  display: flex;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;

  border: none;

  width: 22px;
  height: 22px;

  border-radius: ${theme.radii.half};

  p {
    line-height: 0.875rem;
  }
`;
