import { Meta, StoryObj } from '@storybook/react';
import { TableSEQMHeaderLabel } from '@abqm-ds/react';
import { TableColumnSEQM, TableRowSEQM } from '@abqm-ds/react';

const columns: Array<TableColumnSEQM> = [
  { key: 'name', label: 'NOME' },
  { key: 'age', label: 'IDADE' },
  {
    key: 'email',
    label: 'EMAIL',
    align: 'left',
  },
];

const data: Array<TableRowSEQM> = [
  { name: { value: 'João' }, age: { value: 28 }, email: { value: 'joao@email.com' } },
  { name: { value: 'Maria' }, age: { value: 32 }, email: { value: 'maria@email.com' } },
  { name: { value: 'Pedro' }, age: { value: 24 }, email: { value: 'pedro@email.com' } },
];

export default {
  title: 'Data Display/TableSEQMHeaderLabel',
  component: TableSEQMHeaderLabel,
  parameters: {
    docs: {
      description: {
        component: `
O componente **TableSEQMHeaderLabel** exibe dados tabulares com colunas customizáveis e um título de cabeçalho.

### Como implementar

\`\`\`tsx
import { TableSEQMHeaderLabel } from '@abqm-ds/react';

const columns = [
  { key: 'name', label: 'NOME' },
  { key: 'age', label: 'IDADE' },
  { key: 'email', label: 'EMAIL', align: 'left', minWidth: '80px' },
];
const data = [
  { name: { value: 'João' }, age: { value: 28 }, email: { value: 'joao@email.com' } },
  { name: { value: 'Maria' }, age: { value: 32 }, email: { value: 'maria@email.com' } },
  { name: { value: 'Pedro' }, age: { value: 24 }, email: { value: 'pedro@email.com' } },
];

<TableSEQMHeaderLabel columns={columns} data={data} headerLabel="Usuários" width="1000px" />
\`\`\`

- As colunas podem ser customizadas com propriedades como \`key\`, \`label\`, \`width\`, \`align\` e \`minWidth\`.
- O componente aceita dados em formato de array de objetos.
- Propriedades adicionais como \`width\`, \`height\` e \`variant\` podem ser utilizadas para ajustar o tamanho e estilo da tabela.
- O \`headerLabel\` exibe um título acima da tabela.
        `,
      },
    },
  },
} as Meta<typeof TableSEQMHeaderLabel>;

export const Basic: StoryObj = {
  render: () => (
    <div style={{ padding: 32, background: '#8bb09d' }}>
      <TableSEQMHeaderLabel
        columns={columns}
        data={data}
        headerLabel="Usuários"
        width="300px"
      />
    </div>
  ),
};
