import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@abqm-ui2/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/jorgewsantos.png',
    alt: 'Jorge W Santos',
  },
  argTypes: {
    src: {
      control: 'text',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
}
