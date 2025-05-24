import { Meta, StoryObj } from '@storybook/react';
import { TopSideMenu, TopSideMenuProps } from '@abqm-ui2/react';

export default {
  title: 'Surfaces/TopSideMenu',
  component: TopSideMenu,
} as Meta<TopSideMenuProps>;

export const Primary: StoryObj<TopSideMenuProps> = {
  args: {
    userName: 'Jhon Who',
  },
};
