import { Meta, StoryObj } from '@storybook/react';
import { CardTableSEQMProps, TableSEQMWithCards } from '@abqm-ds/react';
import { TableColumnSEQM, TableRowSEQM } from '@abqm-ds/react';

const columns: Array<TableColumnSEQM> = [
  { key: 'name', label: 'NOME' },
  { key: 'age', label: 'IDADE' },
  { key: 'email', label: 'EMAIL', align: 'left' },
];

const data: Array<TableRowSEQM> = [
  { name: { value: 'João' }, age: { value: 28 }, email: { value: 'joao@email.com' } },
  { name: { value: 'Maria' }, age: { value: 32 }, email: { value: 'maria@email.com' } },
  { name: { value: 'Pedro' }, age: { value: 24 }, email: { value: 'pedro@email.com' } },
];

const cards: Array<CardTableSEQMProps> = [
  { title: 'Total', subtitle: '3' },
  { title: 'Ativos', subtitle: '2' },
];

export default {
  title: 'Data Display/TableSEQMWithCards',
  component: TableSEQMWithCards,
  parameters: {
    docs: {
      description: {
        component: `
O componente **TableSEQMWithCards** exibe dados tabulares com colunas customizáveis e cartões acima da tabela.

### Como implementar

\`\`\`tsx
import { TableSEQMWithCards } from '@abqm-ds/react';

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
const cards = [
  { title: 'Total', value: 3 },
  { title: 'Ativos', value: 2 },
];

<TableSEQMWithCards
  columns={columns}
  data={data}
  cards={cards}
  width="1000px"
/>
\`\`\`

- As colunas podem ser customizadas com propriedades como \`key\`, \`label\`, \`width\`, \`align\` e \`minWidth\`.
- O componente aceita dados em formato de array de objetos.
- A propriedade \`cards\` exibe cartões acima da tabela.
- Propriedades adicionais como \`width\`, \`height\`, \`variant\` e \`tableStyles\` podem ser utilizadas para ajustar o tamanho e estilo da tabela.
        `,
      },
    },
  },
} as Meta<typeof TableSEQMWithCards>;

export const Basic: StoryObj = {
  render: () => (
    <div style={{ padding: 32, background: '#8bb09d' }}>
      <TableSEQMWithCards columns={columns} data={data} cards={cards} width={'100%'} />
    </div>
  ),
};
