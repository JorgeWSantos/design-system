import { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Text,
  TextInputBordered,
  TextInputBorderedProps,
  theme,
} from '@abqm-ds/react';
import { SearchIcon } from '@abqm-ds/icons';
import { colors } from '@abqm-ds/tokens';

export default {
  title: 'Form/TextInputBordered',
  component: TextInputBordered,
  parameters: {
    docs: {
      description: {
        component: `
O componente **TextInputBordered** é utilizado para entrada de dados com borda destacada.

### Como implementar

\`\`\`tsx
import { TextInputBordered } from '@abqm-ds/react';

<TextInputBordered placeholder="Digite seu texto" />
\`\`\`

#### Props principais

- \`size\`: 'sm' | 'md' — Tamanho do campo (padrão: 'md').
- \`variant\`: 'primary' | 'secondary' — Variação de cor/estilo.
- \`icon\`: ReactNode — Ícone exibido à esquerda do campo.
- \`disabled\`: boolean — Desabilita o campo.
- \`...props\`: Aceita todas as props nativas de \`<input>\`.

#### Exemplo com ícone

\`\`\`tsx
import { TextInputBordered } from '@abqm-ds/react';
import { SearchIcon } from '@abqm-ds/icons';

<TextInputBordered
  placeholder="Buscar"
  icon={<SearchIcon />}
/>
\`\`\`

#### Acessibilidade

- Propaga todas as props nativas de \`input\`, incluindo \`aria-*\` e \`role\`.
- Use \`aria-label\` ou associe um \`<label>\` para melhor acessibilidade.

---
        `,
      },
    },
  },
} as Meta<TextInputBorderedProps>;

const renderPrimary = (args: TextInputBorderedProps) => (
  <Box
    as="div"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.space[2],
      width: '500px',
      padding: theme.space[8],
      borderRadius: theme.radii.md,
      backgroundColor: theme.colors.green700,
    }}
  >
    <>
      <Text fontSize="sm">Email Address</Text>
      <TextInputBordered {...args} />
    </>
  </Box>
);

export const Primary: StoryObj<TextInputBorderedProps> = {
  args: {
    placeholder: 'email',
  },
  render: renderPrimary,
};

export const WithIcon: StoryObj<TextInputBorderedProps> = {
  args: {
    placeholder: 'Buscar',
    icon: <SearchIcon fill={colors.white50} />,
  },
  render: renderPrimary,
};

export const Disabled: StoryObj<TextInputBorderedProps> = {
  args: {
    disabled: true,
    placeholder: 'Campo desabilitado',
  },
  render: renderPrimary,
};
