import { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderProps } from '@abqm-ui2/react';

export default {
  title: 'Surfaces/Header',
  component: Header,
} as Meta<HeaderProps>;

export const Primary: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    size: 'md',
    fontWeight: 'semi',
  },
};

export const Secondary: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    size: 'md',
    // fontWeight: 'regular',
  },
};

export const Tertiary: StoryObj<HeaderProps> = {
  args: {
    text: 'Calendários',
    size: 'sm',
    // fontWeight: 'regular',
  },
};
