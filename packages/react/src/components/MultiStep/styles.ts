import { styled } from 'styled-components'
import { Text } from '../Text'
import { theme } from '../../styles'
const { colors, fontSizes, space, radii } = theme

export const MultiStepContainer = styled.div``

export const Label = styled(Text)`
  color: ${colors.gray200};
  font-size: ${fontSizes.xs};
`

export const Steps = styled.div<{
  size: number
}>`
  display: grid;
  gap: ${space[2]};
  margin-top: ${space[1]};
  grid-template-columns: ${({ size }) => `repeat(${size}, 1fr)`};
`

export const Step = styled.div<{
  active?: boolean
}>`
  height: ${space[1]};
  border-radius: ${radii.px};
  background-color: ${colors.gray700};

  ${({ active }) =>
    active &&
    `
    background-color: ${colors.gray100};
  `}
`
