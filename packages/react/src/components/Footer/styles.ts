import { breakpointsPx } from '@abqm-ui2/tokens';
import { theme } from '../../styles';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  /* margin-top: ${theme.space[2]} !important; */
  margin: ${theme.space[2]} auto 0 auto;

  width: 100%;
  height: 3.598rem;

  align-self: end;

  background: ${theme.colors.emeraldGreen50};
  border-radius: ${theme.space[2]} ${theme.space[2]} 0px 0px;

  @media (max-width: ${breakpointsPx.lg}) {
    height: 2.5rem;
  }

  @media (max-width: ${breakpointsPx.sm}) {
    height: 2.188rem;
  }
`;
