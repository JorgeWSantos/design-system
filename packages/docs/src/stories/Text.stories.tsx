import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@abqm-ds/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero esse placeat quae et blanditiis, aspernatur ut itaque possimus ea autem alias ex minima tenetur reiciendis natus ipsa eligendi! Soluta.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
O componente **Text** exibe textos com diferentes tamanhos e pesos.

### Como implementar

\`\`\`tsx
import { Text } from '@abqm-ds/react';

<Text fontSize="lg" fontWeight="bold">
  Texto de exemplo
</Text>
\`\`\`

- Controle o tamanho com \`fontSize\`.
- Controle o peso com \`fontWeight\`.
- Altere o elemento com a prop \`as\`.
        `,
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
};
