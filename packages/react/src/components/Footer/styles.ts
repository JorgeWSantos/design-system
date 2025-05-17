import { theme } from '../../styles'
import styled, { css } from 'styled-components'

export type Size = 'sm' | 'md' | 'lg'

export interface StyledFooterWrapperProps {
  size: Size
}

export const FooterWrapper = styled.footer<StyledFooterWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  /* margin-top: ${theme.space[2]} !important; */
  margin: ${theme.space[2]} auto 0 auto;

  max-width: 81.75rem;

  background: ${theme.colors.emeraldGreen50};
  border-radius: ${theme.space[2]} ${theme.space[2]} 0px 0px;

  ${({ size }) => (size === 'lg' || !size) && css`
    /* height: 3.473rem; */
    height: 57.56px;
  `}

  ${({ size }) => size === 'md' && css`
    height: 2.5rem;
  `}

  ${({ size }) => size === 'sm' && css`
    height: 2.188rem;
  `}
`