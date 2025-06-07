import { Meta, StoryObj } from '@storybook/react';
import { ColorBar, ColorBarProps } from '@abqm-ds/react';

export default {
  title: 'Components/ColorBar',
  component: ColorBar,
} as Meta<ColorBarProps>;

export const Primary: StoryObj<ColorBarProps> = {};

// export const Secondary: StoryObj<ColorBarProps> = {
//   args: {
//     style: { backgroundColor: 'green', border: '1px solid red' } //example
//   }
// }
