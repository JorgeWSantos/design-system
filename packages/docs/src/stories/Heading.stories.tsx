import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@abqm-ui2/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    weight: 'semi',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero esse placeat quae et blanditiis, aspernatur ut itaque possimus ea autem alias ex minima tenetur reiciendis natus ipsa eligendi! Soluta.',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
    weight: {
      options: ['regular', 'medium', 'semi', 'bold'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será `h2`, mas podemos alterar com a propriedade `as`',
      },
    },
  },
};
