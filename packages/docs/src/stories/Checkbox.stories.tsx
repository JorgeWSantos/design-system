import { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text, theme } from '@abqm-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},

  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: theme.space[2],
          }}
        >
          {Story()}
          <Text size="sm">Aceito os termos de uso</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
