import { Meta, StoryObj } from '@storybook/react';
import { Footer, FooterProps } from '@abqm-ds/react';

export default {
  title: 'Surfaces/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: `
O componente **Footer** exibe um rodapé para páginas ou aplicações.

### Como implementar

\`\`\`tsx
import { Footer } from '@abqm-ds/react';

<Footer>
  © 2024 ABQM. Todos os direitos reservados.
</Footer>
\`\`\`

- Aceita qualquer conteúdo como filho.
- Pode ser estilizado via prop \`style\`.
        `,
      },
    },
  },
} as Meta<FooterProps>;

export const Primary: StoryObj<FooterProps> = {};
