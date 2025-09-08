import { Meta, StoryObj } from '@storybook/react';
import {
  ContainerMobile,
  ContentMobile,
  Dropdown,
  GlobalContainer,
  HeaderMobile,
  HeaderMobileNavigator,
} from '@abqm-ds/react';
import { Text } from '@abqm-ds/react';
import { user } from './mockedData/user';
import { menu } from './mockedData/menu';
import { options1 } from './mockedData/dropdownOption';
import { breakpoints } from '@abqm-ds/tokens';

export default {
  title: 'Layout/GlobalContainerMobile',
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
    <GlobalContainer style={{ maxWidth: breakpoints.lg, maxHeight: '100vh' }}>
      <ContainerMobile>
        <HeaderMobile
          token=""
          title="SEQM"
          page={'title'}
          data={menu || []}
          userDropdown={{
            userName: user?.nome_pessoa || '',
            srcImage: user?.foto || '',
            onLogin: () => {},
            onLogout: () => {},
          }}
        />

        <ContentMobile
          headerMobileNavigator={
            <HeaderMobileNavigator>
              <Dropdown data={options1} setValue={() => {}} variant="secondary" />
              <Dropdown data={options1} setValue={() => {}} variant="secondary" />
            </HeaderMobileNavigator>
          }
          style={{ padding: '16px', minHeight: '80vh' }}
        >
          <div>
            <Text>Conteúdo principal do ContainerMobile.</Text>
          </div>
        </ContentMobile>
      </ContainerMobile>
    </GlobalContainer>
  ),
};

export const PrimaryWithLoader: StoryObj<typeof GlobalContainer> = {
  render: () => (
    <GlobalContainer style={{ maxWidth: breakpoints.lg, maxHeight: '100vh' }}>
      <ContainerMobile>
        <HeaderMobile
          token=""
          title="SEQM"
          page={'title'}
          data={menu || []}
          userDropdown={{
            userName: user?.nome_pessoa || '',
            srcImage: user?.foto || '',
            onLogin: () => {},
            onLogout: () => {},
          }}
        />

        <ContentMobile
          headerMobileNavigator={
            <HeaderMobileNavigator>
              <Dropdown data={options1} setValue={() => {}} variant="secondary" />
              <Dropdown data={options1} setValue={() => {}} variant="secondary" />
            </HeaderMobileNavigator>
          }
          style={{ padding: '16px', minHeight: '80vh' }}
          isLoading={true}
        >
          <div>
            <Text>Conteúdo principal do ContainerMobile.</Text>
          </div>
        </ContentMobile>
      </ContainerMobile>
    </GlobalContainer>
  ),
};
