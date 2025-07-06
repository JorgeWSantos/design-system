import { Meta, StoryObj } from '@storybook/react';
import { ContainerMobile, ContentMobile } from '@abqm-ds/react';
import { Text } from '@abqm-ds/react';

export default {
  title: 'Layout/ContentMobile',
  component: ContainerMobile,
  parameters: {
    docs: {
      description: {
        component: `
O componente **ContainerMobile** é utilizado para estruturar o conteúdo principal em telas mobile.

### Como implementar

\`\`\`tsx
import { ContainerMobile, ContentMobile } from '@abqm-ds/react';

<ContainerMobile>
  <ContentMobile>
    <div>Conteúdo</div>
  </ContentMobile>
</ContainerMobile>
\`\`\`

- Use \`ContainerMobile\` para o layout principal mobile.
- Use \`ContentMobile\` para o conteúdo com rolagem.
        `,
      },
    },
  },
} as Meta<typeof ContainerMobile>;

export const Primary: StoryObj = {
  render: () => (
    <ContainerMobile>
      <ContentMobile>
        <Text>Conteúdo principal do ContainerMobile.</Text>
      </ContentMobile>
    </ContainerMobile>
  ),
};
