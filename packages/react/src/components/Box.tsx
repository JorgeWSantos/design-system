import { ComponentProps, ElementType } from 'react'
import { styled } from 'styled-components'

import { theme } from '../styles'

export const Box = styled.div`
  padding: ${theme.space[6]};
  border-radius: ${theme.radii.md};
  background-color: ${theme.colors.gray600};
  border: 1px solid ${theme.colors.gray700};
`

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
