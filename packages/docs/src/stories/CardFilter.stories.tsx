import type { Meta, StoryObj } from '@storybook/react';
import { CardFilter } from '@abqm-ds/react';
import { colors } from '@abqm-ds/tokens';

const meta: Meta<typeof CardFilter> = {
  title: 'Data Display/CardFilter',
  component: CardFilter,
  args: {
    title: 'Sexo',
    filter: 'Masculino',
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        component:
          'Componente de filtro em formato de cartão, muito utilizado nas telas de detalhes do ranking.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardFilter>;

export const Primary: Story = {
  args: {
    title: 'Ano Hípico',
    filter: '2024/2025',
    onChange: () => {},
  },
  render: (args) => (
    <div
      style={{
        maxWidth: 100,
        backgroundColor: colors.greenTransparent15,
        padding: 10,
        borderRadius: 8,
      }}
    >
      <CardFilter {...args} onRemove={() => alert('Removido!')} />
    </div>
  ),
};
