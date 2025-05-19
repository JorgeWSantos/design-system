import { Meta, StoryObj } from '@storybook/react';
import { RoundedButton, RoundedButtonProps } from '@abqm-ui2/react';
import { FilterIcon, PlusIcon, PrinterIcon } from '@abqm-ui2/icons';

export default {
  title: 'Components/RoundedButton',
  component: RoundedButton,
  args: {
    children: <PlusIcon width={14} height={14} />,
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'test' },
  },
} as Meta<RoundedButtonProps>;

export const Primary: StoryObj<RoundedButtonProps> = {};

export const Secondary: StoryObj<RoundedButtonProps> = {
  args: {
    children: <FilterIcon width={14} height={14} />,
  },
};

export const Disabled: StoryObj<RoundedButtonProps> = {
  args: {
    children: <PrinterIcon width={14} height={14} />,
    disabled: true,
  },
};
