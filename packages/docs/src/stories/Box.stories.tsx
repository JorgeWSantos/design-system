import { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps, Text } from '@abqm-ds/react';

export default {
  title: 'Components/Box',
  component: Box,
  args: {
    children: <Text fontSize="sm">testando elemento box</Text>,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
O componente **Box** é um container genérico para composição de layouts.

### Como implementar

\`\`\`tsx
import { Box, Text } from '@abqm-ds/react';

<Box style={{ padding: 16, background: '#eee' }}>
  <Text>Conteúdo do Box</Text>
</Box>
\`\`\`

- Aceita qualquer elemento filho.
- Permite estilização via prop \`style\`.
        `,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

export const Secondary: StoryObj<BoxProps> = {
  args: {
    style: { backgroundColor: 'green', border: '1px solid red' }, //example
  },
};
