import { Meta, StoryObj } from '@storybook/react';
import { TableSEQM } from '@abqm-ds/react';

const columns = [
  { key: 'name', label: 'Nome', width: 60 },
  { key: 'age', label: 'Idade', width: '25%' },
  { key: 'email', label: 'Email', width: '100%' },
];

const data = [
  { name: 'João', age: 28, email: 'joao@email.com' },
  { name: 'Maria', age: 32, email: 'maria@email.com' },
  { name: 'Pedro', age: 24, email: 'pedro@email.com' },
];

export default {
  title: 'Data Display/TableSEQM',
  component: TableSEQM,
  parameters: {
    docs: {
      description: {
        component: `
O componente **TableSEQM** exibe dados tabulares com colunas customizáveis.

### Como implementar

\`\`\`tsx
import { TableSEQM } from '@abqm-ds/react';

const columns = [
  { key: 'name', label: 'Nome', width: 180 },
  { key: 'age', label: 'Idade', width: 80 },
  { key: 'email', label: 'Email', width: 220 },
];

const data = [
  { name: 'João', age: 28, email: 'joao@email.com' },
  // ...
];

<TableSEQM columns={columns} data={data} />
\`\`\`
        `,
      },
    },
  },
} as Meta<typeof TableSEQM>;

export const Basic: StoryObj = {
  args: {
    columns,
    data,
  },
};
