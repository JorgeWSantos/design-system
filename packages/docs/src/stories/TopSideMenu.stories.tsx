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

export const Secondary: StoryObj<TopSideMenuProps> = {
  args: {
    userName: 'Jorge Santos',
    srcImage: 'https://avatars.githubusercontent.com/u/36779335?v=4',
  },
};
