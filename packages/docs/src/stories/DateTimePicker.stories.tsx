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
          "import { DateTimePicker } from '@abqm-ds/react';\n\n" +
          "const [value, setValue] = useState('');\n\n" +
          '<DateTimePicker\n' +
          '  label="Data e hora"\n' +
          '  value={value}\n' +
          '  onChange={setValue}\n' +
          '  placeholder="Selecione data e hora"\n' +
          '/>\n' +
          '```',
      },
    },
  },
  argTypes: {
    value: { control: 'text', description: 'Valor atual do input' },
    onChange: { action: 'changed', description: 'Callback ao alterar valor' },
    label: { control: 'text', description: 'Rótulo do campo' },
    options: { control: 'object', description: 'Sugestões de datas/horários' },
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

export const WithOptions: Story = {
  args: {
    label: 'Data e hora',
    options: ['2025-08-16T10:00', '2025-08-16T14:00'],
    placeholder: 'Escolha uma opção',
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
