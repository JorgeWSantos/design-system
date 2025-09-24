import { Meta, StoryObj } from '@storybook/react';
import { TableColumnSEQM, TableRowSEQM, TableSEQM } from '@abqm-ds/react';

interface User {
  name: string;
  age: number;
  email: string;
  isOficial?: boolean; // Optional property for AQHA-specific columns
}

const data: Array<User> = [
  { name: 'João', age: 28, email: 'joao@email.com', isOficial: true },
  { name: 'Maria', age: 32, email: 'maria@email.com' },
  { name: 'Pedro', age: 24, email: 'pedro@email.com' },
];

const columns: Array<TableColumnSEQM> = [
  { key: 'name', label: 'NOME', width: '20%' },
  { key: 'age', label: 'IDADE', width: '60%' },
  {
    key: 'email',
    label: 'EMAIL',
    width: '20%',
    align: 'left',
    minWidth: '80px',
  },
];

const tableData: Array<TableRowSEQM> = data.map((item) => ({
  name: {
    value: item.name,
    isBold: item.isOficial || false,
  },
  age: { value: item.age },
  email: { value: item.email },
}));

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

const columns: Array<TableColumnSEQM> = [
  { key: 'name', label: 'NOME', width: '20%' },
  { key: 'age', label: 'IDADE', width: '60%' },
  {
    key: 'email',
    label: 'EMAIL',
    width: '20%',
    align: 'left',
    minWidth: '80px',
  },
];
const data: Array<User> = [
  { name: 'João', age: 28, email: 'joao@email.com', isOficial: true },
  { name: 'Maria', age: 32, email: 'maria@email.com' },
  { name: 'Pedro', age: 24, email: 'pedro@email.com' },
];

const tableData: Array<TableRowSEQM> = data.map((item) => ({
  name: {
    value: item.name,
    isBold: item.isOficial || false,
  },
  age: { value: item.age },
  email: { value: item.email },
}));

<TableSEQM columns={columns} data={tableData} width="1000px" />
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
    data: tableData,
    width: '1000px',
    // height: '200px',
  },
};
