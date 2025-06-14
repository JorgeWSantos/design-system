import { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextInput, TextInputProps, theme } from '@abqm-ds/react';
import { SearchIcon } from '@abqm-ds/icons';

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

- Aceita todas as props nativas de \`input\`.
- Suporta variantes e tamanhos.
- Pode exibir ícone à esquerda.
        `,
      },
    },
  },
} as Meta<TextInputProps>;

const renderPrimary = (args: TextInputProps) => (
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
      <Text fontSize="sm">Email Adress</Text>
      <TextInput {...args} />
    </>
  </Box>
);

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite seu texto',
  },
  render: renderPrimary,
};

const renderSecondary = (args: TextInputProps) => (
  <Box
    as="div"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: theme.space[2],
      width: '300px',
      padding: theme.space[8],
      borderRadius: theme.radii.md,
    }}
  >
    <>
      <Text fontSize="sm">Email Adress</Text>
      <TextInput {...args} />
    </>
  </Box>
);

export const Secondary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Buscar',
    variant: 'secondary',
    icon: <SearchIcon />,
  },
  render: renderSecondary,
};

export const Tertiary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'With Icon',
    size: 'sm',
    icon: <SearchIcon />,
  },
  render: renderPrimary,
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
    size: 'sm',
  },
  render: renderPrimary,
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
  render: renderPrimary,
};
