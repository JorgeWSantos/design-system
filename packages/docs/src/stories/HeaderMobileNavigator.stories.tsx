import { Meta, StoryObj } from '@storybook/react';
import { HeaderMobileNavigator } from '@abqm-ds/react';
import { Dropdown, DataDropdown } from '@abqm-ds/react';

// Documentação principal do componente HeaderMobileNavigator
export default {
  title: 'Navigation/HeaderMobileNavigator',
  component: HeaderMobileNavigator,
  parameters: {
    docs: {
      description: {
        component: `
O componente **HeaderMobileNavigator** exibe um cabeçalho para navegação mobile, podendo receber qualquer conteúdo como \`children\`.

### Como implementar

\`\`\`tsx
import { HeaderMobileNavigator, Dropdown } from '@abqm-ds/react';

const data = [
  { value: '1', label: 'Opção 1', id: '1' },
  { value: '2', label: 'Opção 2', id: '2' },
];

<HeaderMobileNavigator hasBackButton>
  <Dropdown data={data} label="Selecione uma opção" />
</HeaderMobileNavigator>
\`\`\`

- O botão de voltar é opcional (\`hasBackButton\`).
- O conteúdo passado em \`children\` é exibido ao lado do botão de voltar.
        `,
      },
    },
  },
} as Meta;

// Exemplo de dados para o Dropdown
const dropdownData: DataDropdown[] = [
  { value: '1', label: 'Opção 1', id: '1' },
  { value: '2', label: 'Opção 2', id: '2' },
  { value: '3', label: 'Opção 3', id: '3' },
];

export const WithDropdown: StoryObj = {
  render: () => (
    <HeaderMobileNavigator hasBackButton>
      <Dropdown data={dropdownData} variant="secondary" />
    </HeaderMobileNavigator>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de uso do HeaderMobileNavigator com um Dropdown passado como children.',
      },
    },
  },
};

export const With2DropdownAndNoButton: StoryObj = {
  render: () => (
    <HeaderMobileNavigator>
      <Dropdown data={dropdownData} variant="secondary" />
      <Dropdown data={dropdownData} variant="secondary" />
    </HeaderMobileNavigator>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de uso do HeaderMobileNavigator com 2 Dropdowns passados como children.',
      },
    },
  },
};
