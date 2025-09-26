import { Meta, StoryObj } from '@storybook/react';
import { TableWithLoader, TableWithLoaderProps } from '@abqm-ds/react';
import type { TableColumnSEQM, TableRowSEQM } from '@abqm-ds/react';

interface User {
  name: string;
  age: number;
  email: string;
  isOficial?: boolean;
}

const data: Array<User> = [
  { name: 'João', age: 28, email: 'joao@email.com', isOficial: true },
  { name: 'Maria', age: 32, email: 'maria@email.com' },
  { name: 'Pedro', age: 24, email: 'pedro@email.com' },
];

const columns: Array<TableColumnSEQM> = [
  { key: 'name', label: 'NOME' },
  { key: 'empty', label: '', minWidth: '8px' },
  { key: 'age', label: 'IDADE' },
  { key: 'auto', label: '', minWidth: '100%' },
  {
    key: 'email',
    label: 'EMAIL',
    align: 'left',
    minWidth: '80px',
  },
];

const tableData: Array<TableRowSEQM> = data.map((item) => ({
  name: {
    value: item.name,
    isBold: item.isOficial || false,
  },
  empty: { value: '' },
  age: { value: item.age },
  auto: { value: '' },
  email: { value: item.email },
}));

export default {
  title: 'Data Display/TableWithLoader',
  component: TableWithLoader,
  parameters: {
    docs: {
      description: {
        component: `\nO componente **TableWithLoader** exibe uma tabela com estado de carregamento e mensagem de vazio.\n\n### Como implementar\n\n\u0060\u0060\u0060tsx\nimport { TableWithLoader } from '@abqm-ds/react';\n\n<TableWithLoader columns={columns} data={tableData} isLoading={false} />\n\u0060\u0060\u0060\n\n- As colunas podem ser customizadas com propriedades como \`key\`, \`label\`, \`width\` e \`align\`.\n- O componente aceita dados em formato de array de objetos.\n- Propriedade \`isLoading\` controla o estado de carregamento.\n- Exibe mensagem de vazio quando não há dados.\n        `,
      },
    },
  },
} as Meta<typeof TableWithLoader>;

export const Basic: StoryObj<TableWithLoaderProps> = {
  args: {
    columns,
    data: tableData,
    isLoading: false,
  },
  render: (args) => (
    <div style={{ background: '#f3f3f3', padding: 24 }}>
      <TableWithLoader {...args} />
    </div>
  ),
};

export const Loading: StoryObj<TableWithLoaderProps> = {
  args: {
    columns,
    data: [],
    isLoading: true,
  },
  render: (args) => (
    <div style={{ background: '#f3f3f3', padding: 24 }}>
      <TableWithLoader {...args} />
    </div>
  ),
};

export const Empty: StoryObj<TableWithLoaderProps> = {
  args: {
    columns,
    data: [],
    isLoading: false,
  },
  render: (args) => (
    <div style={{ background: '#f3f3f3', padding: 24 }}>
      <TableWithLoader {...args} />
    </div>
  ),
};
