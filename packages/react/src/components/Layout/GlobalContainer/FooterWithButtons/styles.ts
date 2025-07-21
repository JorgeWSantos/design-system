import { colors, space } from '@abqm-ds/tokens';
import styled from 'styled-components';

export const FooterWithButtonsWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: ${colors.emeraldGreen50};

  padding: ${space[2]} ${space[6]};
`;
