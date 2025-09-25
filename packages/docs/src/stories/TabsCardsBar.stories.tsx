import type { Meta, StoryObj } from '@storybook/react';
import { CardFilter, TabsCardsBar, TabsPropType } from '@abqm-ds/react';
import React from 'react';
import { colors } from '@abqm-ds/tokens';

const meta: Meta<typeof TabsCardsBar> = {
  title: 'Data Display/TabsCardsBar',
  component: TabsCardsBar,
  args: {},
  parameters: {
    docs: {
      description: {
        component: `
  O componente **TabsCardsBar** exibe uma barra de abas no formato de cartões, permitindo alternar entre diferentes conteúdos.

  ### Como implementar

  \`\`\`tsx
  import { TabsCardsBar } from '@abqm-ds/react';

  const tabs = [
    { label: 'Todas as Provas', value: 'all_proves' },
    { label: 'Provas Pontuadas', value: 'pointeds' },
  ];

  <TabsCardsBar
    tabs={tabs}
    activeTab={activeTab}
    onTabChange={setActiveTab}
  >
    <CardFilter ... />
  </TabsCardsBar>
  \`\`\`

  #### Props principais

  - \`tabs\`: { label: string; value: string }[] — Lista de abas a serem exibidas.
  - \`activeTab\`: string — Valor da aba atualmente ativa.
  - \`onTabChange\`: (tab: string) => void — Função chamada ao trocar de aba.
  - \`children\`: ReactNode — Conteúdo opcional exibido abaixo das abas.
  - \`...props\`: Aceita todas as props do container externo.
`,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TabsCardsBar>;

export const Default: Story = {
  args: {},
  render: () => {
    const tabs: Array<TabsPropType> = [
      { label: 'Todas as Provas', value: 'all_proves' },
      { label: 'Provas Pontuadas', value: 'pointeds' },
    ];

    const [activeTab, setActiveTab] = React.useState('all_proves');

    return (
      <div
        style={{
          maxWidth: 600,
          backgroundColor: colors.emeraldGreen50,
          padding: '0 8px',
          borderRadius: 8,
        }}
      >
        <TabsCardsBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}>
          <CardFilter
            title="joquei"
            filter={'Fulano de Tal'}
            onRemove={() =>
              alert('Remover filtro: ' + 'Fulano de Tal' + ' (implementar lógica)')
            }
          />
        </TabsCardsBar>
      </div>
    );
  },
};
