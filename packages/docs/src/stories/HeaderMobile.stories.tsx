import { Meta, StoryObj } from '@storybook/react';
import { HeaderMobile, HeaderMobileProps } from '@abqm-ui2/react';

export default {
  title: 'Surfaces/HeaderMobile',
  component: HeaderMobile,
  args: {},
  argTypes: {
    data: {
      control: 'object',
    },
  },
} as Meta<HeaderMobileProps>;

export const Primary: StoryObj<HeaderMobileProps> = {
  args: {
    title: 'SEQM',
    page: 'Calendários',
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
        submenu: [
          { name: 'Teste', link: '#' },
          { name: 'TTTEEEEE', link: '#' },
        ],
        open_submenu: false,
      },
      { name: 'Eventos', link: '#' },
      { name: 'Premiações', link: '#' },
      { name: 'Awards', link: '#' },
      { name: 'Financeiro', link: '#' },
      { name: 'Acesso restrito', link: '#' },
    ],
  },
};
