import { Meta, StoryObj } from '@storybook/react';
import { TableColumnSEQM, TableSEQM } from '@abqm-ds/react';

interface User {
  name: string;
  age: number;
  email: string;
  isOficial?: boolean; // Optional property for AQHA-specific columns
}

const columns: Array<TableColumnSEQM<User>> = [
  { key: 'name', label: 'NOME', width: '20%' },
  { key: 'age', label: 'IDADE', width: '60%' },
  {
    key: 'email',
    label: 'EMAIL',
    width: '20%',
    align: 'left',
    minWidth: '80px',
    // render: (row: User) => <a href={`mailto:${row}`}>{row.name + 'ola'}</a>,
  },
];

const data: Array<User> = [
  { name: 'João', age: 28, email: 'joao@email.com', isOficial: true },
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
  { key: 'name', label: 'NOME', width: '20%' },
  { key: 'age', label: 'IDADE', width: '60%' },
  { key: 'email', label: 'EMAIL', width: '20%', align: 'left', minWidth: '80px' },
];

const data = [
  { name: 'João', age: 28, email: 'joao@email.com', isOficial: true },
  { name: 'Maria', age: 32, email: 'maria@email.com' },
  { name: 'Pedro', age: 24, email: 'pedro@email.com' },
];

<TableSEQM columns={columns} data={data} width="1000px" />
\`\`\`

- As colunas podem ser customizadas com propriedades como \`key\`, \`label\`, \`width\` e \`align\`.
- O componente aceita dados em formato de array de objetos.
- Propriedades adicionais como \`width\` e \`height\` podem ser utilizadas para ajustar o tamanho da tabela.
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
