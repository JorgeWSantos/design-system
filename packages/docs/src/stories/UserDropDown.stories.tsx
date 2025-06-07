import { Meta, StoryObj } from '@storybook/react';
import { UserDropDown, UserDropDownProps } from '@abqm-ds/react';

export default {
  title: 'Components/UserDropDown',
  component: UserDropDown,
} as Meta<UserDropDownProps>;

export const Primary: StoryObj<UserDropDownProps> = {
  args: {
    userName: 'John Doe',
  },
};
