import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps, theme } from '@abqm-ui2/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

const render = (args: TextInputProps) => (
  <Box
    as="label"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.space[2],
    }}
  >
    <Text size="sm">Email Adress</Text>
    <TextInput {...args} />
  </Box>
)

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite seu texto',
  },
  render,
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
  render,
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
  render,
}
