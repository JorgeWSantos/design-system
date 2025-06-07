import * as Checkbox from '@radix-ui/react-checkbox';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles';
import { radii } from '@abqm-ds/tokens';

const { colors, space } = theme;

export const CheckboxContainer = styled(Checkbox.Root)`
  all: unset;
  width: ${space[4]};
  height: ${space[4]};
  background-color: ${colors.gray900};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${radii.pxx} solid ${colors.gray900};
  border-radius: ${radii.xs};

  &[data-state='checked'] {
    background-color: ${colors.green500};
    border: ${radii.pxx} solid ${colors.green500};
  }

  &[data-state='unchecked'] {
    border: ${radii.pxx} solid ${colors.gray900};
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;
const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${colors.white};
  width: ${space[4]};
  height: ${space[4]};

  &[data-state='checked'] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state='unchecked'] {
    animation: ${slideOut} 200ms ease-out;
  }
`;
