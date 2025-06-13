import { Meta, StoryObj } from '@storybook/react';
import { ContentDektop, Header } from '@abqm-ds/react';
import { Box, Text } from '@abqm-ds/react';

export default {
  title: 'Layout/ContentDesktop',
  component: ContentDektop,
  parameters: {
    docs: {
      description: {
        component: `
O componente **ContentDesktop** é um container para páginas desktop, que ajusta automaticamente a altura máxima de acordo com a altura da janela.

### Como implementar

\`\`\`tsx
import { ContentDektop } from '@abqm-ds/react';

<ContentDektop header={<div>Header</div>}>
  <div>Conteúdo principal</div>
</ContentDektop>
\`\`\`

- A prop \`header\` é opcional e renderiza um elemento acima do conteúdo.
- O conteúdo é renderizado dentro de um container com rolagem automática se necessário.
        `,
      },
    },
  },
} as Meta;

export const Primary: StoryObj = {
  render: () => (
    <ContentDektop header={<Header text="Teste" />}>
      <Text>
        Este é o conteúdo principal do ContentDesktop. O container ajusta sua altura
        máxima conforme a altura da janela do navegador.
      </Text>
    </ContentDektop>
  ),
};
