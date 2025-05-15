import { theme } from '../../styles'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  margin-top: ${theme.space[2]} !important;
  margin: ${theme.space[2]} auto 0 auto;

  max-width: 81.75rem;

  background: ${theme.colors.emeraldGreen50};
  border-radius: ${theme.space[2]} ${theme.space[2]} 0px 0px;
`