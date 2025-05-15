import { Meta, StoryObj } from '@storybook/react'
import { Footer, FooterProps } from '@abqm-ui2/react'

export default {
  title: 'Surfaces/Footer',
  component: Footer,
} as Meta<FooterProps>

export const Primary: StoryObj<FooterProps> = {
}

export const Secondary: StoryObj<FooterProps> = {
  args: {
    style: { backgroundColor: 'green', border: '1px solid red' } //example
  }
}