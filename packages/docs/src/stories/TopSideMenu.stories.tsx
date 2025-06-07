import { Meta, StoryObj } from '@storybook/react';
import { TopSideMenu, TopSideMenuProps } from '@abqm-ds/react';

export default {
  title: 'Navigation/TopSideMenu',
  component: TopSideMenu,
  parameters: {
    docs: {
      description: {
        component: `
O componente **TopSideMenu** exibe um menu de navegação horizontal no topo da página.

### Como implementar

\`\`\`tsx
import { TopSideMenu } from '@abqm-ds/react';

<TopSideMenu data={[{ name: 'Home', link: '#' }, { name: 'Sobre', link: '#' }]} />
\`\`\`

- Recebe um array de itens de menu.
- Pode ser estilizado via prop \`style\`.
        `,
      },
    },
  },
} as Meta<TopSideMenuProps>;

export const Primary: StoryObj<TopSideMenuProps> = {
  args: {
    userName: 'Jorge Santos',
    srcImage: 'https://avatars.githubusercontent.com/u/36779335?v=4',
    onLogout: () => console.log('clicou em logout'),
  },
};

export const Secondary: StoryObj<TopSideMenuProps> = {
  args: {
    userName: '',
    srcImage: '',
    onLogin: () => console.log('clicou em login'),
  },
};
