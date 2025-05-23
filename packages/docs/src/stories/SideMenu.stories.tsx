import { Meta, StoryObj } from '@storybook/react';
import { SideMenu, SideMenuProps } from '@abqm-ui2/react';

export default {
  title: 'Surfaces/SideMenu',
  component: SideMenu,
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
