import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@abqm-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text size="sm">testando elemento box</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
