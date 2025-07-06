import { Meta, StoryObj } from '@storybook/react';
import { HeaderNavigatorDesktop, TextInput } from '@abqm-ds/react';
import { Dropdown } from '@abqm-ds/react';
import { optionsStates } from './mockedData/dropdownOption';
import { SearchIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';

export default {
  title: 'Navigation/HeaderNavigatorDesktop',
  component: HeaderNavigatorDesktop,
  parameters: {
    docs: {
      description: {
        component: `
O componente **HeaderNavigatorDesktop** exibe um cabeçalho de navegação para ambientes desktop, com suporte opcional a botão de voltar e conteúdo customizável via \`children\`.

### Como implementar

\`\`\`tsx
import { HeaderNavigatorDesktop } from '@abqm-ds/react';

<HeaderNavigatorDesktop hasBackButton onGoBack={() => alert('Voltar!')}>
  <span>Conteúdo do cabeçalho</span>
</HeaderNavigatorDesktop>
\`\`\`

- O botão de voltar é exibido se \`hasBackButton\` for \`true\`.
- O conteúdo passado em \`children\` é exibido ao lado do botão de voltar.
- Use a prop \`onGoBack\` para tratar o clique no botão de voltar.
        `,
      },
    },
  },
} as Meta<typeof HeaderNavigatorDesktop>;

export const Primary: StoryObj = {
  render: () => (
    <HeaderNavigatorDesktop
      hasBackButton
      onGoBack={() => alert('Voltar!')}
      title="Ranch Sorting"
    ></HeaderNavigatorDesktop>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo básico do HeaderNavigatorDesktop sem children.',
      },
    },
  },
};

export const WithInput: StoryObj = {
  render: () => (
    <HeaderNavigatorDesktop
      hasBackButton
      onGoBack={() => alert('Voltar!')}
      title="Ranch Sorting"
    >
      <TextInput
        placeholder="Buscar"
        icon={<SearchIcon fill={colors.white50} width={12} height={12} />}
      />
    </HeaderNavigatorDesktop>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo do HeaderNavigatorDesktop com um input.',
      },
    },
  },
};

export const WithDropdownAndNoBackButton: StoryObj = {
  render: () => (
    <HeaderNavigatorDesktop title="Ranch Sorting">
      <Dropdown data={optionsStates} label="" />
    </HeaderNavigatorDesktop>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo do HeaderNavigatorDesktop com um Dropdown como children.',
      },
    },
  },
};
