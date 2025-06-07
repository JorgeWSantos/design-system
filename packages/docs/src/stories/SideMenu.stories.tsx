import { Meta, StoryObj } from '@storybook/react';
import { SideMenu, SideMenuProps } from '@abqm-ds/react';

// Documentação principal do componente SideMenu
export default {
  title: 'Navigation/SideMenu',
  component: SideMenu,
  parameters: {
    docs: {
      description: {
        component: `
O componente **SideMenu** exibe um menu lateral com suporte a submenus.

### Como implementar

\`\`\`tsx
import { SideMenu } from '@abqm-ds/react';

const data = [
  { name: 'Calendários', link: '#' },
  { name: 'Resultados', link: '#' },
  {
    name: 'Ranking',
    link: '#',
    submenu: [
      { name: 'Geral', link: '#' },
      { name: 'Competidor', link: '#' },
      // ...
    ],
    open_submenu: false,
  },
  // ...
];

<SideMenu data={data} style={{ width: '200px' }} />
\`\`\`

- O menu aceita itens simples ou com submenu.
- O submenu é exibido ao clicar no item principal.
- O estilo pode ser customizado via prop \`style\`.

        `,
      },
    },
  },
} as Meta<SideMenuProps>;

export const Primary: StoryObj<SideMenuProps> = {
  args: {
    data: [
      { name: 'Calendários', link: '#' },
      { name: 'Resultados', link: '#' },
      {
        name: 'Ranking',
        link: '#',
        submenu: [
          { name: 'Geral', link: '#' },
          { name: 'Competidor', link: '#' },
          { name: 'Animal', link: '#' },
          { name: 'Reprodutor', link: '#' },
          { name: 'Reprodutora', link: '#' },
          { name: 'Avô', link: '#' },
          { name: 'Proprietário', link: '#' },
          { name: 'Criador', link: '#' },
          { name: 'Premiação', link: '#' },
        ],
        open_submenu: false,
      },
      {
        name: 'Campeonatos',
        link: '#',
      },
      {
        name: 'Eventos',
        link: '#',
        submenu: [
          { name: 'Eventos Oficializados', link: '#' },
          { name: 'Meus Calendários', link: '#' },
          { name: 'Participações', link: '#' },
        ],
        open_submenu: false,
      },
      { name: 'Premiações', link: '#' },
      { name: 'Awards', link: '#' },
      { name: 'Financeiro', link: '#' },
      { name: 'Acesso restrito', link: '#' },
    ],
    style: { width: '200px' },
  },
};
