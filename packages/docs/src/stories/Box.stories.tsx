import { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps, Text } from '@abqm-ui2/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text fontSize="sm">testando elemento box</Text>,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

export const Secondary: StoryObj<BoxProps> = {
  args: {
    style: { backgroundColor: 'green', border: '1px solid red' }, //example
  },
};
