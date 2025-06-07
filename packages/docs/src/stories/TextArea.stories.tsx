import { Meta, StoryObj } from '@storybook/react';
import { TextArea, TextAreaProps } from '@abqm-ds/react';

export default {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: `
O componente **TextArea** é utilizado para entrada de textos longos.

### Como implementar

\`\`\`tsx
import { TextArea } from '@abqm-ds/react';

<TextArea placeholder="Digite sua mensagem..." />
\`\`\`

- Aceita todas as props nativas de \`textarea\`.
- Pode ser estilizado via prop \`style\`.
        `,
      },
    },
  },
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Digite sua mensagem...',
  },
};
