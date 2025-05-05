import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps, theme } from '@abqm-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
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
          <Text size="sm">Observações</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Adicione algumas observações',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
