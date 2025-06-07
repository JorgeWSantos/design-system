import { Meta, StoryObj } from '@storybook/react';
import { ColorBar, ColorBarProps } from '@abqm-ds/react';

export default {
  title: 'Components/ColorBar',
  component: ColorBar,
  parameters: {
    docs: {
      description: {
        component: `
O componente **ColorBar** exibe uma barra colorida para representar status ou categorias.

### Como implementar

\`\`\`tsx
import { ColorBar } from '@abqm-ds/react';

<ColorBar colors={['#00FF00', '#FF0000', '#0000FF']} />
\`\`\`

- Recebe um array de cores na prop \`colors\`.
- Pode ser estilizado via prop \`style\`.
        `,
      },
    },
  },
} as Meta<ColorBarProps>;

export const Primary: StoryObj<ColorBarProps> = {};

// export const Secondary: StoryObj<ColorBarProps> = {
//   args: {
//     style: { backgroundColor: 'green', border: '1px solid red' } //example
//   }
// }
