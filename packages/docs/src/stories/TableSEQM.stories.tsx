import { Meta, StoryObj } from '@storybook/react';
import { TableColumnSEQM, TableSEQM } from '@abqm-ds/react';

interface User {
  name: string;
  age: number;
  email: string;
  isAQHA?: boolean; // Optional property for AQHA-specific columns
}

const columns: Array<TableColumnSEQM<User>> = [
  { key: 'name', label: 'NOME', width: '20%' },
  { key: 'age', label: 'IDADE', width: '60%' },
  {
    key: 'email',
    label: 'EMAIL',
    width: '20%',
    align: 'left',
    // render: (row: User) => <a href={`mailto:${row}`}>{row.name + 'ola'}</a>,
  },
];

const data: Array<User> = [
  { name: 'João', age: 28, email: 'joao@email.com', isAQHA: true },
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
    width: '1000px',
    // height: '200px',
  },
};
