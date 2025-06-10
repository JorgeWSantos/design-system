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
      {
        id: 1,
        name: 'Calendários',
        link: 'http://localhost:5173',
        parent_id: null,
        open_submenu: false,
        sub_menu: [],
      },
      {
        id: 2,
        name: 'Resultados',
        link: 'https://seqm.com.br/resultados',
        parent_id: null,
        open_submenu: false,
        sub_menu: [],
      },
      {
        id: 3,
        name: 'Ranking',
        link: '#',
        parent_id: null,
        open_submenu: true,
        sub_menu: [
          {
            id: 0,
            name: 'Geral',
            link: 'https://seqm.com.br/ranking/geral',
            parent_id: 3,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Competidor',
            link: '#',
            parent_id: 3,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Animal',
            link: '#',
            parent_id: 3,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Reprodutor',
            link: '#',
            parent_id: 3,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Reprodutora',
            link: '#',
            parent_id: 3,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Avô',
            link: '#',
            parent_id: 3,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Proprietário',
            link: '#',
            parent_id: 3,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Criador',
            link: '#',
            parent_id: 3,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Premiação',
            link: '#',
            parent_id: 3,
            open_submenu: false,
            sub_menu: null,
          },
        ],
      },
      {
        id: 4,
        name: 'Campeonatos',
        link: '#',
        parent_id: null,
        open_submenu: false,
        sub_menu: [],
      },
      {
        id: 5,
        name: 'Eventos',
        link: '#',
        parent_id: null,
        open_submenu: true,
        sub_menu: [
          {
            id: 0,
            name: 'Eventos Oficializados',
            link: '#',
            parent_id: 5,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Meus Calendarios',
            link: '#',
            parent_id: 5,
            open_submenu: false,
            sub_menu: null,
          },
          {
            id: 0,
            name: 'Participações',
            link: '#',
            parent_id: 5,
            open_submenu: false,
            sub_menu: null,
          },
        ],
      },
      {
        id: 6,
        name: 'Premiações',
        link: '#',
        parent_id: null,
        open_submenu: false,
        sub_menu: [],
      },
      {
        id: 7,
        name: 'Awards',
        link: '#',
        parent_id: null,
        open_submenu: false,
        sub_menu: [],
      },
      {
        id: 8,
        name: 'Financeiro',
        link: '#',
        parent_id: null,
        open_submenu: false,
        sub_menu: [],
      },
      {
        id: 9,
        name: 'Acesso restrito',
        link: '#',
        parent_id: null,
        open_submenu: false,
        sub_menu: [],
      },
    ],
    style: { width: '200px' },
  },
};
