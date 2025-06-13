import { Meta, StoryObj } from '@storybook/react';
import {
  ContentMobile,
  HeaderMobileNavigator,
  Box,
  Text,
  Dropdown,
} from '@abqm-ds/react';
import { breakpoints } from '@abqm-ds/tokens';

// Documentação principal do componente ContentMobile
export default {
  title: 'Layout/ContentMobile',
  component: ContentMobile,
  parameters: {
    docs: {
      description: {
        component: `
O componente **ContentMobile** é um container para páginas mobile, que organiza o conteúdo principal e pode receber um cabeçalho customizado.

### Como implementar

\`\`\`tsx
import { ContentMobile, HeaderMobileNavigator } from '@abqm-ds/react';

<ContentMobile headerMobileNavigator={<HeaderMobileNavigator />}>
  <div>Conteúdo principal</div>
</ContentMobile>
\`\`\`

- A prop \`headerMobileNavigator\` é opcional e renderiza um elemento acima do conteúdo.
- O conteúdo é renderizado dentro de um container com rolagem automática se necessário.
        `,
      },
    },
  },
} as Meta;

const dropdownData = [
  { value: '1', label: 'Opção 1', id: '1' },
  { value: '2', label: 'Opção 2', id: '2' },
  { value: '3', label: 'Opção 3', id: '3' },
];

export const Primary: StoryObj = {
  render: () => (
    <ContentMobile
      headerMobileNavigator={
        <HeaderMobileNavigator>
          <Dropdown data={dropdownData} variant="secondary" />
          <Dropdown data={dropdownData} variant="secondary" />
        </HeaderMobileNavigator>
      }
    >
      <Text>
        Este é o conteúdo principal do ContentMobile. O container é otimizado para uso em
        telas pequenas de no máximo {breakpoints.lg}px e suporta rolagem interna.
      </Text>
    </ContentMobile>
  ),
};
