import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps, theme } from '@abqm-ui2/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
  // not show the complete element
  // decorators: [
  //   (Story) => {
  //     return (
  //       <Box
  //         as="label"
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'column',
  //           gap: theme.space[2],
  //         }}
  //       >
  //         {Story()}
  //       </Box>
  //     )
  //   },
  // ],
} as Meta<MultiStepProps>

const render = (args: MultiStepProps) => (
  <Box
    as="label"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.space[2],
    }}
  >
    <MultiStep {...args} />
  </Box>
)

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
  render,
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
    size: 4,
  },
  render,
}
