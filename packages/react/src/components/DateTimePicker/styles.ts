import { colors, fontSizes, radii, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const DateTimePickerContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${space[1]};
`;

export const DateTimeInput = styled.input`
  width: 100%;
  padding: ${space[1]} ${space[2]};
  border: ${radii.px} solid ${colors.emeraldGreen25};
  border-radius: 4px;
  outline: none;
  transition: filter 0.3s;
  color: ${colors.emeraldGreen75};

  font-size: ${fontSizes.ssm};

  &:focus {
    filter: brightness(1.1);
  }

  &:disabled {
    color: ${colors.emeraldGreen40};
  }
`;
