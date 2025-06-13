import { colors, radii, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const StyledNavigatorMobile = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  max-height: 1.8125rem;
  border-bottom: ${radii.px} solid ${colors.white25};

  padding: ${space[1]} ${space[1]} ${space[1]} ${space[1]};
  gap: ${space[4]};
`;

export const ContainerButtonBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
`;

export const ButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: ${radii.px} solid ${colors.white85};
  color: white;
  cursor: pointer;
`;
