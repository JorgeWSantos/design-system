import React, { useState } from 'react';
import { DateTimePicker } from '@abqm-ds/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateTimePicker> = {
  title: 'Form/DateTimePicker',
  component: DateTimePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente para seleção de data e hora, seguindo o padrão dos componentes Dropdown e RadioGroup.\n\n' +
          '## Como implementar\n' +
          '```tsx\n' +
          "import { DateTimePicker } from '@abqm-ds/react';\n" +
          "import { useState } from 'react';\n\n" +
          "const [value, setValue] = useState('');\n\n" +
          '<DateTimePicker\n' +
          '  label="Data e hora"\n' +
          '  value={value}\n' +
          '  onChange={setValue}\n' +
          '  placeholder="Selecione data e hora"\n' +
          '/>\n' +
          '```\n\n' +
          '## Propriedades\n' +
          '| Propriedade | Tipo | Descrição |\n' +
          '|-------------|------|-----------|\n' +
          '| `value` | `string` | Valor atual do input |\n' +
          '| `onChange` | `(value: string) => void` | Callback ao alterar valor |\n' +
          '| `label` | `string` | Rótulo do campo |\n' +
          '| `placeholder` | `string` | Placeholder do input |\n' +
          '| `disabled` | `boolean` | Desabilita o input |',
      },
    },
  },
  argTypes: {
    value: { control: 'text', description: 'Valor atual do input' },
    onChange: { action: 'changed', description: 'Callback ao alterar valor' },
    label: { control: 'text', description: 'Rótulo do campo' },
    placeholder: { control: 'text', description: 'Placeholder do input' },
    disabled: { control: 'boolean', description: 'Desabilita o input' },
  },
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {
  args: {
    label: 'Data e hora',
    placeholder: 'Selecione data e hora',
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return <DateTimePicker {...args} value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = {
  args: {
    label: 'Data e hora',
    disabled: true,
    placeholder: 'Desabilitado',
  },
  render: (args) => <DateTimePicker {...args} />,
};
