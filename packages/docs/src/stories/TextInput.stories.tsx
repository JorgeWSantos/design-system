import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps, theme } from '@abqm-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
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
          <Text size="sm">Email Adress</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite seu texto',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
