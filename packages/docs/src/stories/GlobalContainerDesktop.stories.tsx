import { Meta, StoryObj } from '@storybook/react';
import {
  ContainerDesktop,
  ContentDektop,
  GlobalContainer,
  Header,
  SideBarDesktop,
} from '@abqm-ds/react';
import { Box, Text } from '@abqm-ds/react';
import { user } from './mockedData/user';
import { menu } from './mockedData/menu';

export default {
  title: 'Layout/GlobalContainerDesktop',
  component: GlobalContainer,
  parameters: {
    docs: {
      description: {
        component: [
          'O componente **GlobalContainer** é utilizado para envolver toda a aplicação ou grandes seções, servindo como contêiner global.',
          '',
          '### Como implementar',
          '',
          '```tsx',
          'import { GlobalContainer } from "@abqm-ds/react";',
          '',
          '<GlobalContainer>',
          '  {/* Conteúdo */}',
          '</GlobalContainer>',
          '```',
          '',
          '- A prop `children` recebe os elementos React a serem renderizados dentro do contêiner.',
        ].join('\n'),
      },
    },
  },
} as Meta<typeof GlobalContainer>;

export const Primary: StoryObj<typeof GlobalContainer> = {
  render: () => (
    <GlobalContainer>
      <ContainerDesktop>
        <SideBarDesktop user={user} menu={menu} />

        <ContentDektop header={<Header text={'title'} />}>
          <Box style={{ padding: 24, background: '#f5f5f5' }}>
            <Text>Conteúdo principal do ContainerDesktop.</Text>
          </Box>
        </ContentDektop>
      </ContainerDesktop>
    </GlobalContainer>
  ),
};
