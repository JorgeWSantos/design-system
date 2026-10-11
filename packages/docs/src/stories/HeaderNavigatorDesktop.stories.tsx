import { Meta, StoryObj } from '@storybook/react';
import { Avatar, HeaderNavigatorDesktop, LegacyBadge, TextInput } from '@abqm-ds/react';
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
O componente **HeaderNavigatorDesktop** exibe um cabeçalho de navegação para ambientes desktop, com suporte opcional a botão de voltar, subtítulo (\`subtitle\`) e conteúdo customizável via \`children\`.

### Como implementar

\`\`\`tsx
import { HeaderNavigatorDesktop } from '@abqm-ds/react';

<HeaderNavigatorDesktop hasBackButton onGoBack={() => alert('Voltar!')} title="Título" subtitle="Subtítulo opcional">
  <span>Conteúdo do cabeçalho</span>
</HeaderNavigatorDesktop>
\`\`\`

- O botão de voltar é exibido se \`hasBackButton\` for \`true\`.
- O conteúdo passado em \`children\` é exibido ao lado do botão de voltar.
- Use a prop \`onGoBack\` para tratar o clique no botão de voltar.
- Use a prop \`subtitle\` para exibir um subtítulo abaixo do título principal.
- Use a prop \`image\` para exibir uma imagem à esquerda do título, por exemplo o \`Avatar\` de uma pessoa ou o \`AnimalImageWithTooltip\` de um animal. Aceita qualquer \`ReactNode\`; o tamanho é definido pelo componente passado.
- Use a prop \`titleSuffix\` para exibir algo depois do título, à direita (ex.: o \`LegacyBadge\` de um criador).
- \`image\` e \`titleSuffix\` aceitam **um ou vários** elementos, exibidos lado a lado com o mesmo espaçamento. Passe vários num fragment (ou numa lista com \`key\` em cada item, como todo array no React). Itens vazios (\`cond && <Badge />\`) são ignorados:

\`\`\`tsx
<HeaderNavigatorDesktop
  title="Haras Exemplo"
  image={
    <>
      <Avatar src={foto} />
      <AnimalImageWithTooltip {...animal} />
    </>
  }
  titleSuffix={
    <>
      {legacyYear && <LegacyBadge year={legacyYear} />}
      {outroSelo}
    </>
  }
/>
\`\`\`
        `,
      },
    },
  },
} as Meta<typeof HeaderNavigatorDesktop>;

export const WithSubtitle: StoryObj = {
  render: () => (
    <HeaderNavigatorDesktop
      hasBackButton
      onGoBack={() => alert('Voltar!')}
      title="Ranch Sorting"
      subtitle="Subtítulo do Header"
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
        story: 'Exemplo do HeaderNavigatorDesktop com subtítulo e um input.',
      },
    },
  },
};

export const WithImage: StoryObj = {
  render: () => (
    <HeaderNavigatorDesktop
      hasBackButton
      onGoBack={() => alert('Voltar!')}
      title="Jorge W Santos"
      subtitle="Subtítulo do Header"
      image={<Avatar src="https://github.com/jorgewsantos.png" alt="Jorge W Santos" />}
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
        story: 'Exemplo do HeaderNavigatorDesktop com imagem à esquerda do título.',
      },
    },
  },
};

export const WithTitleSuffix: StoryObj = {
  render: () => (
    <HeaderNavigatorDesktop
      hasBackButton
      onGoBack={() => alert('Voltar!')}
      title="HARAS EXEMPLO"
      subtitle="Criador • Legacy 2021"
      titleSuffix={<LegacyBadge year={2021} size="1.75rem" />}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo do HeaderNavigatorDesktop com o selo Legacy depois do título.',
      },
    },
  },
};

export const WithMultipleImages: StoryObj = {
  render: () => (
    <HeaderNavigatorDesktop
      hasBackButton
      onGoBack={() => alert('Voltar!')}
      title="HARAS EXEMPLO"
      subtitle="Criador • Legacy 2021"
      image={
        <>
          <Avatar src="https://github.com/jorgewsantos.png" alt="Jorge W Santos" />
          <LegacyBadge year={2021} size="2.5rem" />
        </>
      }
      titleSuffix={[
        <LegacyBadge key="legacy" year={2021} size="1.75rem" />,
        <Avatar
          key="foto"
          src="https://github.com/jorgewsantos.png"
          alt="Jorge W Santos"
          size="1.75rem"
          variant="outline"
          withTooltip
          tooltipPlacement="bottom"
        />,
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Várias imagens antes (`image`, num fragment) e depois (`titleSuffix`, numa lista com `key`) do título.',
      },
    },
  },
};

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
