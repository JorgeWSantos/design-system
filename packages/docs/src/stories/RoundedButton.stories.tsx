import { Meta, StoryObj } from '@storybook/react';
import { RoundedButton, RoundedButtonProps } from '@abqm-ds/react';
import { PlusIcon } from '@abqm-ds/icons';

export default {
  title: 'Form/RoundedButton',
  component: RoundedButton,
  parameters: {
    docs: {
      description: {
        component: `
O componente **RoundedButton** é um botão circular utilizado para ações rápidas, como adicionar, fechar ou custom actions.

### Como implementar

\`\`\`tsx
import { RoundedButton } from '@abqm-ds/react';
import { PlusIcon } from '@abqm-ds/icons';

<RoundedButton onClick={() => alert('Clicou!')}>
  <PlusIcon width={24} height={24} />
</RoundedButton>
\`\`\`

#### Props principais

- \`children\`: ReactNode — Conteúdo do botão (normalmente um ícone).
- \`onClick\`: função chamada ao clicar.
- \`disabled\`: boolean — Desabilita o botão.
- \`style\`: CSSProperties — Estilização inline opcional.
- \`width\`, \`height\`: string — Define o tamanho do botão (ex: \`"40px"\`).

#### Tamanhos e exemplos

\`\`\`tsx
<RoundedButton width="40px" height="40px">
  <PlusIcon width={24} height={24} />
</RoundedButton>
\`\`\`

#### Acessibilidade

- Propaga todas as props nativas de \`button\`, incluindo \`aria-*\` e \`type\`.
- Recomenda-se passar \`aria-label\` quando não houver texto visível.

---
        `,
      },
    },
  },
} as Meta<RoundedButtonProps>;

const renderInBox = (args: RoundedButtonProps) => (
  <div
    style={{
      width: 50,
      height: 50,
      background: '#e5e5e5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8%',
    }}
  >
    <RoundedButton {...args} />
  </div>
);

export const Primary: StoryObj<RoundedButtonProps> = {
  args: {
    children: <PlusIcon width={40} height={40} color="white" />,
    onClick: () => alert('Clicou!'),
  },
  render: renderInBox,
};

export const Active: StoryObj<RoundedButtonProps> = {
  args: {
    children: <PlusIcon width={40} height={40} color="white" />,
    isActive: true,
    onClick: () => alert('Ativo!'),
  },
  render: renderInBox,
};
