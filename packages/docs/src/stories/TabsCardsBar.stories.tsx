import type { Meta, StoryObj } from '@storybook/react';
import { CardFilter, TabsCardsBar, TabsPropType } from '@abqm-ds/react';
import React from 'react';
import { colors } from '@abqm-ds/tokens';

const meta: Meta<typeof TabsCardsBar> = {
  title: 'Components/TabsCardsBar',
  component: TabsCardsBar,
  args: {},
  parameters: {
    docs: {
      description: {
        component: 'Barra de abas em formato de cartões.',
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
