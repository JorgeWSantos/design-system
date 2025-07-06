import { Meta, StoryObj } from '@storybook/react';
import { RoundedModalityButton } from '@abqm-ds/react';

export default {
  title: 'Form/RoundedModalityButton',
  component: RoundedModalityButton,
  parameters: {
    docs: {
      description: {
        component: `
O componente **RoundedModalityButton** é um botão circular para seleção de modalidades, exibindo um ícone centralizado.

### Como implementar

\`\`\`tsx
import { RoundedModalityButton } from '@abqm-ds/react';

<RoundedModalityButton
  icon="https://placehold.co/48x48?text=Icon"
  text="Modalidade"
  onClick={() => alert('Selecionado!')}
/>
\`\`\`

- Aceita as variantes \`default\` e \`secondary\`.
- Recebe um ícone (URL) e texto alternativo.
        `,
      },
    },
  },
} as Meta<typeof RoundedModalityButton>;

export const Default: StoryObj = {
  args: {
    icon: 'https://placehold.co/48x48?text=Icon',
    text: 'Modalidade Default',
    variant: 'default',
    onClick: () => alert('Selecionado!'),
  },
};

export const Secondary: StoryObj = {
  args: {
    icon: 'https://placehold.co/48x48?text=Icon',
    text: 'Modalidade Secundária',
    variant: 'secondary',
    onClick: () => alert('Selecionado!'),
  },
};
