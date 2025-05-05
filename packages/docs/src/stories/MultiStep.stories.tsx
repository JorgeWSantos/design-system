import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps, theme } from '@abqm-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.space[2],
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
    size: 4,
  },
}
