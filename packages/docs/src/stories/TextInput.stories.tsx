import { Meta, StoryObj } from '@storybook/react';
import { Box, TextInput, TextInputProps, theme } from '@abqm-ds/react';
import { SearchIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    icon: {
      control: false,
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
O componente **TextInput** é utilizado para entrada de dados em formulários.

### Como implementar

\`\`\`tsx
import { TextInput } from '@abqm-ds/react';

<TextInput placeholder="Digite seu texto" />
\`\`\`

#### Props principais

- \`size\`: 'sm' | 'md' — Tamanho do campo (padrão: 'md').
- \`variant\`: 'primary' | 'secondary' — Variação de cor/estilo.
- \`icon\`: ReactNode — Ícone exibido à esquerda do campo.
- \`prefix\`: string — Texto exibido antes do valor digitado.
- \`disabled\`: boolean — Desabilita o campo.
- \`...props\`: Aceita todas as props nativas de \`<input>\`.

#### Exemplo com ícone e prefixo

\`\`\`tsx
import { TextInput } from '@abqm-ds/react';
import { SearchIcon } from '@abqm-ds/icons';

<TextInput
  placeholder="Buscar"
  icon={<SearchIcon />}
  prefix="cal.com/"
/>
\`\`\`

#### Acessibilidade

- O componente propaga todas as props nativas de \`input\`, incluindo \`aria-*\` e \`role\`.
- Use \`aria-label\` ou associe um \`<label>\` para melhor acessibilidade.

---        `,
      },
    },
  },
} as Meta<TextInputProps>;

const render = (args: TextInputProps) => (
  <Box
    as="div"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.space[2],
      width: '500px',
      padding: theme.space[8],
      borderRadius: theme.radii.md,
    }}
  >
    <>
      <TextInput {...args} />
    </>
  </Box>
);

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite seu texto',
  },
  render,
};

export const Secondary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Buscar',
    variant: 'secondary',
  },
  render,
};

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'With Icon',
    size: 'sm',
    icon: <SearchIcon fill={colors.white50} />,
  },
  render,
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
  render,
};

// const renderLabel = (args: TextInputProps) => (
//   <Box
//     as="div"
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//       gap: theme.space[2],
//       width: '500px',
//       padding: theme.space[8],
//       borderRadius: theme.radii.md,
//     }}
//   >
//     <>
//       <Text fontSize="sm">Email Adress</Text>
//       <TextInput {...args} />
//     </>
//   </Box>
// );

// export const WithLabel: StoryObj<TextInputProps> = {
//   args: {
//     placeholder: 'With Icon & Label',
//     size: 'sm',
//     icon: <SearchIcon fill={colors.white50} />,
//   },
//   render: renderLabel,
// };
