import { Meta, StoryObj } from '@storybook/react';
import { HeaderMobile, HeaderMobileProps } from '@abqm-ds/react';

// Documentação principal do componente HeaderMobile
export default {
  title: 'Surfaces/HeaderMobile',
  component: HeaderMobile,
  args: {},
  argTypes: {
    data: {
      control: 'object',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
O componente **HeaderMobile** exibe um cabeçalho adaptado para dispositivos móveis, com título, página atual e menu lateral.

### Como implementar

\`\`\`tsx
import { HeaderMobile } from '@abqm-ds/react';

const data = [
  { name: 'Calendários', link: '#' },
  { name: 'Resultados', link: '#' },
  // ...
];

<HeaderMobile title="SEQM" page="Calendários" data={data} />
\`\`\`

- O menu lateral é aberto pelo botão de menu.
- O título e a página atual são exibidos no topo.
        `,
      },
    },
  },
} as Meta<HeaderMobileProps>;

export const Primary: StoryObj<HeaderMobileProps> = {
  args: {
    title: 'SEQM',
    page: 'Calendários',
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
  },
};
