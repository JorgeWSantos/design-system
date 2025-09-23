import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabsCardsBar } from '@abqm-ds/react';

const meta: Meta<typeof TabsCardsBar> = {
  title: 'Components/TabsCardsBar',
  component: TabsCardsBar,
  args: {
    // tabs: [
    //   { label: 'Tab 1', value: 'tab1' },
    //   { label: 'Tab 2', value: 'tab2' },
    // ],
    // value: 'tab1',
    // onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        component: 'Barra de abas em formato de cartões.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TabsCardsBar>;

export const Default: Story = {
  args: {},
};
