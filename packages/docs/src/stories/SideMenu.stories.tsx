import { Meta, StoryObj } from '@storybook/react';
import { SideMenu, SideMenuProps } from '@abqm-ds/react';
import { menu } from './mockedData/menu';

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
    data: menu,
    style: { width: '200px' },
  },
};
