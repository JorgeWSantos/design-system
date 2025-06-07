import { Meta, StoryObj } from '@storybook/react';
import { RoundedButton, RoundedButtonProps } from '@abqm-ds/react';

export default {
  title: 'Form/RoundedButton',
  component: RoundedButton,
  parameters: {
    docs: {
      description: {
        component: `
O componente **RoundedButton** é um botão circular para ações rápidas.

### Como implementar

\`\`\`tsx
import { RoundedButton } from '@abqm-ds/react';

<RoundedButton onClick={() => alert('Clicou!')}>
  +
</RoundedButton>
\`\`\`

- Aceita qualquer conteúdo como filho.
- Pode ser estilizado via prop \`style\`.
        `,
      },
    },
  },
} as Meta<RoundedButtonProps>;

export const Primary: StoryObj<RoundedButtonProps> = {};
