import { Meta, StoryObj } from '@storybook/react';
import { HeaderMobile, HeaderMobileProps } from '@abqm-ds/react';
import { menu } from './mockedData/menu';

// Documentação principal do componente HeaderMobile
export default {
  title: 'Layout/HeaderMobile',
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
    data: menu,
  },
};
