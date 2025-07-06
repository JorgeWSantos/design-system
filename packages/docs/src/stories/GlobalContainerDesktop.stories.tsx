import { Meta, StoryObj } from '@storybook/react';
import {
  ContainerDesktop,
  ContentDektop,
  GlobalContainer,
  Header,
  SideBarDesktop,
  HeaderNavigatorDesktop,
} from '@abqm-ds/react';
import { Text } from '@abqm-ds/react';
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
        <SideBarDesktop token="" user={user} menu={menu} />

        <ContentDektop header={<Header text={'title'} />}>
          <Text>Conteúdo principal do ContainerDesktop.</Text>
        </ContentDektop>
      </ContainerDesktop>
    </GlobalContainer>
  ),
};

// Adiciona uma story secundária com HeaderNavigatorDesktop
export const Secondary: StoryObj<typeof GlobalContainer> = {
  render: () => (
    <GlobalContainer>
      <ContainerDesktop>
        <SideBarDesktop token="" user={user} menu={menu} />

        <ContentDektop
          header={<Header text={'title'} />}
          headerNavigator={
            <HeaderNavigatorDesktop
              hasBackButton
              title="Título com Navegação"
            ></HeaderNavigatorDesktop>
          }
        >
          <Text>Conteúdo principal do ContainerDesktop com HeaderNavigatorDesktop.</Text>
        </ContentDektop>
      </ContainerDesktop>
    </GlobalContainer>
  ),
};
